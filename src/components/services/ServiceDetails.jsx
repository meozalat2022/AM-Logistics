"use client";

import { services } from "@/app/data/services";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ServiceDetails = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl space-y-24 px-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-12 md:grid-cols-2"
          >
            <div className={index % 2 !== 0 ? "md:order-2" : ""}>
              <Image
                src={service.heroImage}
                alt={service.title}
                width={900}
                height={600}
                className="rounded-xl object-cover"
              />
            </div>

            <div className={index % 2 !== 0 ? "md:order-1" : ""}>
              <h3 className="mb-4 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mb-6 leading-7 text-gray-600">
                {service.longDescription}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="font-semibold text-blue-900 transition hover:text-orange-500"
              >
                Learn More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetails;