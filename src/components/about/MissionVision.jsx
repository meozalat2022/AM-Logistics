import React from 'react'

const MissionVision = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2">

          <div className="rounded-xl bg-white p-10 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver reliable, cost-effective, and compliant logistics
              solutions that empower our clients to grow globally.
            </p>
          </div>

          <div className="rounded-xl bg-white p-10 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become a leading regional logistics partner recognized for
              operational excellence, transparency, and customer trust.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MissionVision