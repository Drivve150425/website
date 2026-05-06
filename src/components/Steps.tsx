'use client'
import { Car, MapPin, Smartphone, CalendarClock, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Smartphone,
    title: "Download Drivve™",
    description: "Get the app from Play Store or App Store",
  },
  {
    icon: MapPin,
    title: "Set your route",
    description: "Enter pickup & drop locations. Our smart algorithm finds matches along your route.",
  },
  {
    icon: CalendarClock,
    title: "Schedule Rides",
    description: "Choose your preferred date & time and schedule. Set recurring rides for daily commutes.",
  },
  {
    icon: Car,
    title: "Match & Connect",
    description: "Connect with verified users going your way. Chat with matches before confirming.",
  },
  {
    icon: IndianRupee,
    title: "Share Costs",
    description: "Split costs automatically. Payments are secure and handled through the app.",
  },
];

export default function Steps() {
  return (
    <div className="py-24 bg-linear-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            How Drivve™ works?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Drivve™ offers a seamless carpooling experience for both drivers and riders.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Our platform connects commuters with similar routes, making travel more efficient and enjoyable.
          </p>
          {/*<p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            5 simple steps to start carpooling
          </p>*/}
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-linear-to-r from-indigo-200 via-purple-200 to-pink-200"></div>

          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-linear-to-br from-indigo-500 to-purple-500 p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <step.icon className="h-12 w-12 text-white" />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="mb-4 text-2xl font-semibold text-gray-900"
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  className="text-gray-600 leading-relaxed"
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
