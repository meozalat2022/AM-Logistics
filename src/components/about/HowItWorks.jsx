"use client";

import React from 'react'
import { motion } from "framer-motion";
import { FileText, Package, Truck } from "lucide-react";
const steps = [
  {
    step: "01",
    title: "Request a Quote",
    description:
      "Share your shipment details and receive a competitive quotation.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Book & Ship",
    description:
      "We arrange transport, documentation, and customs handling.",
    icon: Package,
  },
  {
    step: "03",
    title: "Track & Deliver",
    description:
      "Monitor your shipment until it reaches its final destination.",
    icon: Truck,
  },
]
const HowItWorks = () => {
  return (
     <section className="bg-gray-50 py-24">
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
            How It Works
          </h2>
          <p className="mt-4 text-gray-600">
            A simple and transparent process to move your cargo globally.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative rounded-xl bg-white p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <span className="absolute right-6 top-6 text-5xl font-bold text-gray-100">
                {step.step}
              </span>

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                <step.icon size={26} />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks;

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
