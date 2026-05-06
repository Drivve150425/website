'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/hero-road-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/80 via-purple-500/80 to-pink-500/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 text-5xl md:text-7xl font-bold tracking-tight text-white"
          >
            Carpool with{" "}
            <span className="bg-linear-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Drivve™
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto mb-12 max-w-2xl text-xl text-white/90 md:text-2xl"
          >
            Share rides, reduce costs, and travel smarter - all while lowering traffic and emissions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Link href="/download">
              <Button size="lg" className="glass px-8 py-4 text-lg font-semibold hover:scale-105 transition-all shadow-2xl">
                <Download className="w-5 h-5 mr-2" />
                Download App Now
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
