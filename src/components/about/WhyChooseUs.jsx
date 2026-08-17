import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h2 className="mb-12 text-3xl font-bold">
          Why Choose AM Logistics
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Industry Expertise",
              text: "Deep understanding of international trade and customs regulations.",
            },
            {
              title: "End-to-End Solutions",
              text: "From pickup to final delivery, we manage every step.",
            },
            {
              title: "Customer-Centric",
              text: "Dedicated account management and transparent communication.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-gray-50 p-8">
              <h4 className="mb-2 font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs