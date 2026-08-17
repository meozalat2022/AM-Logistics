const ContactHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[450px] pt-20">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/contact-hero.jpg"
          alt="Contact logistics team"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            {/* <h1 className="text-4xl font-bold text-white md:text-5xl">
              Contact Us
            </h1> */}
            <p className="mt-6 text-lg text-gray-200">
              Get in touch with our logistics experts to discuss your shipment
              requirements.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactHero;
