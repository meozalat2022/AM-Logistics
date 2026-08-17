import React from 'react'

const AboutHero = () => {
  return (
       <section className="relative h-[70vh] min-h-[500px] w-full pt-20">
        

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/about-hero.jpg"
          alt="International shipping operations"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              About Us
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              AM Logistics is a trusted international logistics partner delivering reliable
              shipping solutions across air, sea, and land.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutHero