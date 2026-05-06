import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_URL.startsWith('https://') ? Redis.fromEnv() : null;

const ratelimit = redis ? new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"), // 5 requests per 10 minutes per IP
}) : null;

const schema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().optional().default(""),
  email: z.string().optional().default(""),
  message: z.string().min(10).max(2000),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = schema.parse(json);

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }
    if (!to || !from) {
      return NextResponse.json(
        { ok: false, error: "Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL" },
        { status: 500 }
      );
    }

    // Rate limiting check
    if (ratelimit) {
      const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        req.headers.get("x-real-ip") ??
        "127.0.0.1";

      const { success } = await ratelimit.limit(`contact:${ip}`);
      if (!success) {
        return NextResponse.json(
          { ok: false, error: "Too many requests. Try again later." },
          { status: 429 }
        );
      }
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to,
      subject: `New lead - Drivve™ (${data.name})`,
      text: `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Invalid request" },
      { status: 400 }
    );
  }
}
