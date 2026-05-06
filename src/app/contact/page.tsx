'use client'
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "Instant replies 24/7",
    value: "+91 98765 43210",
    color: "from-green-500 to-emerald-500",
    action: "Chat Now"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call us for urgent queries",
    value: "+91 1800 123 4567",
    color: "from-blue-500 to-indigo-500",
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Detailed queries & feedback",
    value: "hello@drivve.in",
    color: "from-purple-500 to-pink-500",
    action: "Send Email"
  }
];

const officeInfo = [
  {
    icon: MapPin,
    title: "Delhi NCR Office",
    details: ["Connaught Place, New Delhi", "110001, India"]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 9:00 AM - 9:00 PM", "Sunday: 10:00 AM - 6:00 PM"]
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-600/5 to-purple-600/5" />
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-64 h-64 bg-linear-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-linear-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-br from-indigo-500 to-purple-500 rounded-3xl mb-8 shadow-2xl"
          >
            <Send className="w-12 h-12 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-linear-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent"
          >
            Contact Drivve™
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Tell us your route or requirement. We'll respond quickly on WhatsApp or call you back.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the best way to reach us. We're here to help 24/7.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                {/* Background linear */}
                <div className={`absolute inset-0 bg-linear-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${method.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {(() => {
                    const IconComponent = method.icon;
                    return <IconComponent className="h-8 w-8 text-white" />;
                  })()}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{method.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{method.description}</p>
                <p className="text-lg font-semibold text-gray-900 mb-6">{method.value}</p>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 bg-linear-to-r ${method.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  {method.action}
                </motion.button>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r ${method.color} group-hover:w-full transition-all duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-linear-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white"
            >
              <h3 className="text-3xl font-bold mb-6">Send us a Message</h3>
              <p className="text-indigo-100 mb-8 leading-relaxed">
                Have a specific route or requirement? Fill out the form below and we'll get back to you within minutes.
              </p>
              <ContactForm />
            </motion.div>

            {/* Office Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">Visit Our Office</h3>
                <div className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                          {(() => {
                            const IconComponent = info.icon;
                            return <IconComponent className="w-6 h-6 text-white" />;
                          })()}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">{info.title}</h4>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-indigo-100 leading-relaxed">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white"
              >
                <h4 className="text-xl font-semibold mb-4">Response Time</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-300"> 2 min</div>
                    <div className="text-sm text-indigo-100">WhatsApp replies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-300"> 30 min</div>
                    <div className="text-sm text-indigo-100">Email responses</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-linear-to-br from-indigo-500 to-purple-500 rounded-3xl p-12 text-white shadow-2xl"
          >
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Quick Answers?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Check out our comprehensive FAQ section for instant answers to common questions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Visit FAQ Section
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
