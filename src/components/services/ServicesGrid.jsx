"use client";
import { services } from "@/app/data/services";
import { motion } from "framer-motion";

const ServicesGrid = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl border p-8 transition hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900 text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
