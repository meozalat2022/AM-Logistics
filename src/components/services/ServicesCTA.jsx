import React from "react";

import CTAForm from "@/components/CTAForm";

const ServicesCTA = () => {
return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-6 text-3xl font-bold">
          Request a Shipping Quote
        </h2>
        <p className="mb-10 text-gray-600">
          Tell us about your shipment and our team will get back to you shortly.
        </p>
        <CTAForm />
      </div>
    </section>
  );
};

export default ServicesCTA;
