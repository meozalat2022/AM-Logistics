import React from 'react'

const WhoWeAre = () => {
  return (
     <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 items-center">

        <div>
          <h2 className="mb-4 text-3xl font-bold">
            Who We Are
          </h2>
          <p className="mb-4 text-gray-600">
            We are a full-service international shipping and logistics company
            providing integrated freight solutions for businesses of all sizes.
          </p>
          <p className="text-gray-600">
            With expertise in ocean freight, air freight, inland transportation,
            and customs clearance, we help our clients move goods efficiently
            and compliantly across global markets.
          </p>
        </div>

        <div className="rounded-xl bg-gray-100 p-10">
          <ul className="space-y-4 text-sm text-gray-700">
            <li>• Global freight forwarding solutions</li>
            <li>• Licensed customs clearance services</li>
            <li>• Reliable carrier and agent network</li>
            <li>• Dedicated customer support</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default WhoWeAre