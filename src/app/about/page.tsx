'use client'
import { Users, MapPin, Award, Car, Heart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, title: "50K+ Users", desc: "Happy Delhi commuters", color: "from-blue-500 to-cyan-500" },
  { icon: MapPin, title: "Delhi NCR", desc: "Airport to Noida routes", color: "from-purple-500 to-pink-500" },
  { icon: Award, title: "Trusted", desc: "Background verified drivers", color: "from-green-500 to-emerald-500" },
];

const values = [
  { icon: Car, title: "Sustainable Travel", desc: "Reduce carbon footprint by 70% per ride" },
  { icon: Heart, title: "Community First", desc: "Building connections between commuters" },
  { icon: TrendingUp, title: "Growing Network", desc: "Expanding to more cities across India" },
];

export default function About() {
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
            About Drivve™
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Revolutionizing urban mobility in Delhi NCR through smart carpooling technology
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Solving Delhi's Traffic Crisis
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-indigo-500 to-purple-500 mx-auto mb-8" />
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2025, Drivve™ emerged from a simple idea: why should Delhi commuters
                waste hours in traffic when they could share rides and reduce congestion?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform connects people traveling the same routes, creating a sustainable
                transportation network that benefits everyone. With 50K+ successful rides and
                over 1M+ kilometers saved from traffic, we're proving that carpooling is the
                future of urban mobility.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <span className="text-sm font-medium text-indigo-700">50K+ Rides Completed</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-sm font-medium text-purple-700">1M+ KM Saved</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium text-green-700">70% CO2 Reduction</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-linear-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl" />
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Traffic Reduction</span>
                      <span className="font-bold">35%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full w-7/12" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Carbon Footprint</span>
                      <span className="font-bold">-70%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full w-11/12" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span>User Satisfaction</span>
                      <span className="font-bold">4.8/5</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full w-12/12" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-linear-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              By the Numbers
            </h2>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
              Real impact, real results for Delhi's commuting community
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center text-white shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${stat.color} mb-6 shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.title}</h3>
                <p className="text-indigo-100">{stat.desc}</p>
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-linear-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
              Driving the future of sustainable urban mobility
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white"
            >
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-indigo-100 leading-relaxed text-lg">
                To revolutionize urban commuting in India by creating a seamless, eco-friendly carpooling ecosystem that connects millions of commuters, reduces traffic congestion, and builds stronger communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white"
            >
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-indigo-100 leading-relaxed text-lg">
                Empower Delhi NCR commuters with safe, affordable, and sustainable ride-sharing solutions. We're committed to reducing carbon emissions by 70% per trip while fostering trust and convenience in every journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Leadership Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The visionaries driving Drivve™ forward
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Rahul Sharma",
                role: "Co-Founder & CEO",
                bio: "Former tech executive with 10+ years in mobility solutions. Passionate about sustainable transport.",
                image: "/placeholder-founder1.jpg"
              },
              {
                name: "Priya Patel",
                role: "Co-Founder & CTO",
                bio: "AI expert focused on smart routing algorithms. Previously at leading tech companies in Silicon Valley.",
                image: "/placeholder-founder2.jpg"
              },
              {
                name: "Amit Kumar",
                role: "Co-Founder & COO",
                bio: "Operations specialist with deep knowledge of Indian markets. Committed to user safety and experience.",
                image: "/placeholder-founder3.jpg"
              }
            ].map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="w-24 h-24 bg-linear-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {founder.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{founder.name}</h3>
                <p className="text-indigo-600 font-medium mb-4">{founder.role}</p>
                <p className="text-gray-600 leading-relaxed">{founder.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
