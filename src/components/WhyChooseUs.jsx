"use client";
import React from 'react'
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Clock, Headset } from "lucide-react";


const reasons = [
  {
    title: "Global Network",
    description: "Strong partnerships and agents across major trade lanes.",
    icon: Globe,
  },
  {
    title: "Reliable & Secure",
    description: "Your cargo handled with the highest safety standards.",
    icon: ShieldCheck,
  },
  {
    title: "On-Time Delivery",
    description: "Optimized routes and schedules to meet deadlines.",
    icon: Clock,
  },
  {
    title: "Dedicated Support",
    description: "Personalized service with real human support.",
    icon: Headset,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600">
            We combine global reach with local expertise to deliver reliable
            logistics solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="rounded-xl border border-gray-100 p-8 text-center transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                <item.icon size={26} />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs;

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
