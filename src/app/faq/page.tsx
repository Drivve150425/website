'use client'
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle, Shield, Car } from "lucide-react";
import { faqs } from "@/data/faqs";
import { useState } from "react";

const categories = [
  { icon: Car, name: "Getting Started", color: "from-blue-500 to-indigo-500" },
  { icon: Shield, name: "Safety & Security", color: "from-green-500 to-emerald-500" },
  { icon: MessageCircle, name: "Booking & Payments", color: "from-purple-500 to-pink-500" },
  { icon: HelpCircle, name: "Support", color: "from-orange-500 to-red-500" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFaqs = selectedCategory
    ? faqs.filter(faq => (faq as any).category === selectedCategory)
    : faqs;

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
            <HelpCircle className="w-12 h-12 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-linear-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Everything you need to know before your first ride with Drivve™
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Browse by Category</h2>
            <p className="text-gray-600">Find answers faster with our categorized questions</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-linear-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              All Questions
            </motion.button>
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.name
                    ? 'bg-linear-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border border-gray-200 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <motion.button
                  whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.05)" }}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-8 text-left flex items-center justify-between"
                >
                  <span className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-6 w-6 text-gray-500 group-hover:text-indigo-500 transition-colors duration-300 shrink-0" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0">
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-gray-600 leading-relaxed text-lg"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">No questions found</h3>
              <p className="text-gray-500">Try selecting a different category or view all questions.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-linear-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-white"
          >
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you 24/7. Get in touch for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
              >
                WhatsApp Help
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
