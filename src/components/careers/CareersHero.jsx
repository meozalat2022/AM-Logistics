"use client";
import { motion } from "framer-motion";

export default function CareersHero() {
  return (
    <section className="bg-blue-900 text-white py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h1
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Build Your Career in Global Logistics
        </motion.h1>

        <motion.p
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ delay:.2, duration:.6 }}
          className="text-xl text-white/80 max-w-2xl mx-auto"
        >
          Join a fast-growing international shipping company connecting markets worldwide.
        </motion.p>

        <a
          href="#open-positions"
          className="inline-block mt-10 bg-orange-500 px-8 py-4 rounded-md font-semibold hover:bg-orange-600 transition"
        >
          View Open Positions
        </a>
      </div>
    </section>
  );
}
