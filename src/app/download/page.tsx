'use client'
import { motion } from "framer-motion";
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Smartphone, Star, CheckCircle, Apple, Play, Download as DownloadIcon } from 'lucide-react'

export default function Download() {
  const features = [
    "Free ₹100 credit on first ride",
    "Verified drivers & GPS tracking",
    "24/7 customer support",
    "Women-only ride options",
    "Real-time ride matching"
  ];

  const reviews = [
    { name: "Priya S.", rating: 5, text: "Best carpool app in Delhi! Saved ₹2000/month." },
    { name: "Rahul M.", rating: 5, text: "Safe, reliable, and eco-friendly. Highly recommended!" },
    { name: "Anjali K.", rating: 5, text: "Female driver option gives peace of mind." }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-600 to-purple-600" />
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-2xl"
          >
            <Smartphone className="w-12 h-12 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Ready to Drivve™?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto"
          >
            Download now & get ₹100 credit on your first ride. Join 50K+ happy commuters!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="glass text-xl px-12 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3">
                <Apple className="w-6 h-6" />
                App Store
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-xl px-12 py-6 shadow-2xl hover:bg-white/30 transition-all duration-300 flex items-center gap-3">
                <Play className="w-6 h-6" />
                Play Store
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass p-8 rounded-3xl max-w-md mx-auto"
          >
            <p className="mb-4 text-lg font-semibold">Get early access updates:</p>
            <form className="flex gap-2">
              <Input
                placeholder="your@email.com"
                className="bg-white/20 text-white placeholder-white/70 border-white/20 focus:border-white/40"
              />
              <Button
                type="submit"
                className="bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-6"
              >
                Join Waitlist
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Why Download Drivve™?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the future of carpooling with features designed for Delhi commuters
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-900 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-linear-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
              Real reviews from real Delhi commuters
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white shadow-xl"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-4 leading-relaxed">"{review.text}"</p>
                <p className="font-semibold text-indigo-100">- {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-linear-to-br from-indigo-500 to-purple-500 rounded-3xl p-12 text-white shadow-2xl"
          >
            <DownloadIcon className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of Delhi commuters who have already switched to smarter, greener travel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold shadow-lg flex items-center gap-2">
                  <Apple className="w-5 h-5" />
                  Download for iOS
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Download for Android
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
