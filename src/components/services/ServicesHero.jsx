import React from 'react'

const ServicesHero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] pt-20">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/services-hero.jpg"
          alt="Global logistics services"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Comprehensive freight and logistics solutions designed to move
              your cargo efficiently across global markets.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ServicesHero