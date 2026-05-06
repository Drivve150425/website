'use client'
import { motion } from "framer-motion";
import { Car, Plane, MapPin, Shield, Clock, Users, Star, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Daily Office Rides",
    desc: "Fixed routes to IT parks, offices. Share with colleagues.",
    price: "₹80/km",
    features: ["Fixed schedules", "Office colleagues", "Cost sharing", "Verified routes"],
    color: "from-blue-500 to-indigo-500",
    popular: false
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    desc: "Reliable pickup/drop to IGI Airport from Delhi NCR.",
    price: "₹15/km",
    features: ["Flight tracking", "Luggage space", "On-time guarantee", "Airport security"],
    color: "from-purple-500 to-pink-500",
    popular: true
  },
  {
    icon: MapPin,
    title: "Weekend Trips",
    desc: "Group rides to Agra, Jaipur, Rishikesh.",
    price: "Contact us",
    features: ["Group discounts", "Tourist spots", "Flexible timing", "Local guides"],
    color: "from-green-500 to-emerald-500",
    popular: false
  },
  {
    icon: Shield,
    title: "Women Safety",
    desc: "Female drivers for women passengers.",
    price: "+₹20 premium",
    features: ["Female drivers", "Safety verified", "Emergency contact", "GPS tracking"],
    color: "from-rose-500 to-pink-500",
    popular: false
  }
];

export default function Services() {
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
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-5xl md:text-7xl font-bold bg-linear-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Choose the perfect ride for your journey. From daily commutes to weekend adventures.
          </motion.p>
        </div>
      </section>

      {/* Ride Options Section */}
      <section className="py-24 bg-linear-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ride Options
            </h2>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
              Choose how you want to participate in our carpooling community
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white"
            >
              <h3 className="text-3xl font-bold mb-6">Rider</h3>
              <p className="text-indigo-100 leading-relaxed text-lg mb-6">
                Pay only for the rides you take. No subscription fees.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Flexible ride booking</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Pay per ride</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Verified drivers</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white"
            >
              <h3 className="text-3xl font-bold mb-6">Driver</h3>
              <p className="text-indigo-100 leading-relaxed text-lg mb-6">
                Earn money by offering empty seats in your vehicle.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Extra income</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Community contribution</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden ${
                  service.popular ? 'ring-2 ring-indigo-500 ring-offset-4' : ''
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-linear-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Popular
                  </div>
                )}

                {/* Background linear */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${service.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {service.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className={`text-2xl font-bold bg-linear-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 bg-linear-to-r ${service.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Book Now
                  </motion.button>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r ${service.color} group-hover:w-full transition-all duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Download Drivve™ today and experience the future of carpooling in Delhi NCR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                Download App
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Support
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
