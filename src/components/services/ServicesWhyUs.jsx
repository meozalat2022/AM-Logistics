import React from 'react'

const ServicesWhyUs  = () => {
  return (
    <section className="bg-blue-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h2 className="mb-12 text-3xl font-bold">
          Why Choose Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            "Global carrier and agent network",
            "Licensed customs expertise",
            "Real-time shipment visibility",
          ].map((item) => (
            <div key={item} className="rounded-xl bg-white/10 p-8">
              <p className="text-sm text-gray-300">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesWhyUs 