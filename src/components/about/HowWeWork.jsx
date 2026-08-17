import React from 'react'

const HowWeWork = () => {
  return (
    <section className="bg-blue-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h2 className="mb-12 text-3xl font-bold">
          How We Work
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            "Request a Quote",
            "Shipment Planning",
            "Execution & Tracking",
            "Delivery & Clearance",
          ].map((step, index) => (
            <div key={step} className="rounded-xl bg-white/10 p-6">
              <div className="mb-3 text-xl font-bold">
                {index + 1}
              </div>
              <p className="text-sm text-gray-300">{step}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HowWeWork