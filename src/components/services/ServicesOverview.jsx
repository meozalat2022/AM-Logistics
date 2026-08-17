"use client";

import { services } from "../../app/data/services";
import { motion } from "framer-motion";
import Link from "next/link";

const ServicesOverview = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600">
            Comprehensive logistics solutions tailored to your business
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                href={`/services/${service.slug}`}
                key={service.id}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="group h-full cursor-pointer rounded-xl bg-white p-8 shadow-sm transition hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900 text-white transition-colors duration-300 group-hover:bg-orange-500">
                    <Icon size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-6 text-gray-600">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <div className="mt-5 text-sm font-semibold text-blue-900 transition-colors group-hover:text-orange-500">
                    Learn More →
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;