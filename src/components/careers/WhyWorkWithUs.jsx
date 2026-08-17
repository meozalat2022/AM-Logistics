"use client";
import { motion } from "framer-motion";

const items = [
  { title:"Global Exposure", text:"Work with international shipments and worldwide partners." },
  { title:"Career Growth", text:"Take ownership early and grow with a fast-expanding company." },
  { title:"Collaborative Culture", text:"Small team environment where your work truly matters." },
  { title:"Learning Opportunities", text:"Gain real logistics and supply chain expertise." },
];

export default function WhyWorkWithUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Why Work With Us</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item,i)=>(
            <motion.div
              key={i}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:i*0.1 }}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
