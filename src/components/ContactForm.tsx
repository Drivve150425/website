"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Send } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const SUPPORT_WHATSAPP_E164 = "919999999999"; // TODO: replace with your real WhatsApp number (no +)

function Brand() {
  return (
    <>
      Drivve™
    </>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    | { type: "idle"; message: "" }
    | { type: "success" | "error"; message: string }
  >({ type: "idle", message: "" });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; message?: string }>({});

  const validateName = (value: string) => {
    if (!/^[a-zA-Z\s]*$/.test(value)) {
      return "Name can only contain letters and spaces";
    }
    return "";
  };

  const validatePhone = (value: string) => {
    if (value && !/^\d{0,10}$/.test(value)) {
      return "Phone must be 10 digits";
    }
    return "";
  };

  const validateEmail = (value: string) => {
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Invalid email format";
    }
    return "";
  };

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow letters, spaces, backspace, delete, tab, escape, enter, arrow keys
    if (!/[a-zA-Z\s]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
      e.preventDefault();
    }
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow digits, backspace, delete, tab, escape, enter, arrow keys
    if (!/\d/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
      e.preventDefault();
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const error = validateName(value);
    setErrors(prev => ({ ...prev, name: error }));
    setForm(prev => ({ ...prev, name: value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10); // Only digits, max 10
    const error = validatePhone(value);
    setErrors(prev => ({ ...prev, phone: error }));
    setForm(prev => ({ ...prev, phone: value }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm(prev => ({ ...prev, email: value }));
    // Validate on change but allow typing
    const error = validateEmail(value);
    setErrors(prev => ({ ...prev, email: error }));
  };

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      form.message.trim().length >= 10 &&
      (form.phone.trim().length === 10 || (form.email.trim().length >= 5 && !errors.email)) &&
      !errors.name &&
      !errors.phone
    );
  }, [form, errors]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "idle", message: "" });

    if (!canSubmit) {
      setStatus({
        type: "error",
        message: "Please enter name, a 10+ char message, and phone or email.",
      });
      return;
    }

    setLoading(true);

    // Build WhatsApp URL now, but DO NOT open yet.
    const text = `Hi Drivve™!%0AName: ${encodeURIComponent(
      form.name.trim()
    )}%0APhone: ${encodeURIComponent(
      form.phone.trim()
    )}%0AEmail: ${encodeURIComponent(
      form.email.trim()
    )}%0AMessage: ${encodeURIComponent(form.message.trim())}`;

    const waUrl = `https://wa.me/${SUPPORT_WHATSAPP_E164}?text=${text}`;

    // 1) Call email API first
    try {
      const res = await fetch("/contact/api/send-email", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({} as any));
        setStatus({
          type: "error",
          message:
            body?.error ??
            `Could not send message (status ${res.status}). Please try again.`,
        });
        return;
      }

      // 2) Only open WhatsApp after API is successful (200)
      window.open(waUrl, "_blank", "noopener,noreferrer");

      setStatus({
        type: "success",
        message: "Message sent successfully. WhatsApp opened.",
      });
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
      return;
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl border bg-white p-6 shadow-lg md:p-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
        Contact <Brand />
      </h2>

      <p className="mt-2 text-gray-600">
        Share your route or requirement—our team will respond quickly.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Name *</label>
            <input
              className="h-11 w-full rounded-md border border-gray-300 px-3 text-gray-900 outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Your name"
              value={form.name}
              onChange={handleNameChange}
              onKeyDown={handleNameKeyDown}
              autoComplete="name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Phone (optional)
            </label>
            <div className="relative">
              <Phone className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                className="h-11 w-full rounded-md border border-gray-300 pl-10 pr-3 text-gray-900 outline-none focus:ring-2 focus:ring-black/10"
                placeholder="10-digit number"
                value={form.phone}
                onChange={handlePhoneChange}
                onKeyDown={handlePhoneKeyDown}
                autoComplete="tel"
              />
            {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">
            Email (optional)
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              className="h-11 w-full rounded-md border border-gray-300 pl-10 pr-3 text-gray-900 outline-none focus:ring-2 focus:ring-black/10"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleEmailChange}
              autoComplete="email"
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">
            Message * (min 10 chars)
          </label>
          <textarea
            className="min-h-[120px] w-full resize-y rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-black/10"
            placeholder="Example: I need daily carpool from Dwarka to Gurgaon, 9am/7pm..."
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          />
        </div>

        {status.type !== "idle" && (
          <p
            className={
              status.type === "error"
                ? "text-sm text-red-600"
                : "text-sm text-green-700"
            }
          >
            {status.message}
          </p>
        )}

        <Button type="submit" disabled={!canSubmit || loading} className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
          <Send className="mr-2 h-4 w-4" />
          {loading ? "Sending..." : "Send (Email → WhatsApp)"}
        </Button>

        <p className="text-xs text-gray-500">
          By submitting, you agree to be contacted by <Brand /> via WhatsApp, phone,
          or email.
        </p>
      </form>
    </div>
  );
}
