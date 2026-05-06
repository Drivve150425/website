'use client'
import { motion } from 'framer-motion'
import { Shield, Users, Leaf, Clock } from 'lucide-react'

const features = [
  { icon: Shield, title: 'Safe Rides', desc: 'Verified drivers & real-time tracking' },
  { icon: Users, title: 'Community First', desc: '1M+ happy users in India' },
  { icon: Leaf, title: 'Eco-Friendly', desc: 'Reduce CO2 by 70% per trip' },
  { icon: Clock, title: 'Instant Matches', desc: 'Find rides in <2 mins' },
]

export default function WhyUs() {
  return (
    <section className="py-32 px-8 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-24 text-gray-800">Why Choose Drivve™?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-8 hover:scale-105 transition-all group cursor-pointer"
            >
              <feat.icon className="w-16 h-16 text-indigo-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{feat.title}</h3>
              <p className="text-gray-600">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
