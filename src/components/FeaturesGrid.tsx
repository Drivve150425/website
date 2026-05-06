'use client'
import { Shield, IndianRupee, Users, MapPin, Map, Phone } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: IndianRupee, title: "Lower Travel Costs", description: "Share fuel and toll expenses to save up to 60% on your daily commute." },
  { icon: MapPin, title: "Smart Route Matching", description: "Matches riders and drivers traveling the same route with minimal detours." },
  { icon: Shield, title: "Safe & Verified", description: "Verified profiles, live tracking feature, and trusted ride partners." },
  { icon: Users, title: "Community Driven", description: "Share your commute with people you can rely on." },
  { icon: Phone, title: "24/7 support", description: "WhatsApp help anytime" },
];

export default function FeaturesGrid() {
  return (
    <div className="py-2.5 bg-linear-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Why choose Drivve™?
          </h2>
         {/* <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Trusted by 50K+ Delhi commuters
          </p> */}
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Background linear */}
              <div className="absolute inset-0 bg-linear-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-indigo-500 to-purple-500 shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="h-10 w-10 text-white" />
              </motion.div>

              {/* Content */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="relative mb-4 text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300"
              >
                {feature.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                className="relative text-gray-600 leading-relaxed"
              >
                {feature.description}
              </motion.p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="py-12"></div>
    </div>
  );
}
