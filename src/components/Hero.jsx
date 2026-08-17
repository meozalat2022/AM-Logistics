"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/shipping_background.png"
          alt="Global logistics and freight services"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto flex min-h-screen items-center px-6">
        <motion.div
          className="max-w-3xl text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          >
            Global Freight Solutions You Can Rely On
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-white/90 md:text-xl"
          >
            Ocean, Air, and Inland Transportation seamlessly connected.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                href="/getQuote"
                className="inline-flex rounded-md bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Get a Quote
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                href="/services"
                className="inline-flex rounded-md border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};