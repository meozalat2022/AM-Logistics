import React from "react";
export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of AM Logistics services and website.",
};
const TermsPage = () => {
  function Section({ title, children }) {
    return (
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{children}</p>
      </section>
    );
  }
  return (
    <main className="bg-white pt-32 pb-20 ml-4">
      <h1 className="mb-4 text-4xl font-bold">
  Terms & Conditions
</h1>

      {/* Section */}
      <Section title="1. Introduction">
        These Terms and Conditions govern the use of our international freight,
        logistics, customs clearance and transportation services. By requesting
        a quotation, booking a shipment, or using our website, you agree to
        these terms.
      </Section>

      <Section title="2. Scope of Services">
        We provide ocean freight, air freight, inland transportation, customs
        clearance, and import services. All services are subject to availability
        and regulatory compliance in origin and destination countries.
      </Section>

      <Section title="3. Quotations & Pricing">
        All quotations are valid for a limited time and may change due to
        carrier rates, fuel surcharges, currency fluctuations, customs duties,
        or regulatory changes.
      </Section>

      <Section title="4. Customer Responsibilities">
        Customers must provide accurate shipment details and ensure cargo
        complies with international shipping laws and regulations.
      </Section>

      <Section title="5. Customs & Duties">
        Import duties, taxes, inspections, and customs fees are the
        responsibility of the cargo owner unless explicitly agreed otherwise in
        writing.
      </Section>

      <Section title="6. Limitation of Liability">
        We are not liable for delays caused by customs inspections, port
        congestion, weather, carrier delays, or force majeure events.
      </Section>

      <Section title="7. Insurance">
        Cargo insurance is optional unless specifically requested. We strongly
        recommend insuring all shipments.
      </Section>

      <Section title="8. Payment Terms">
        Services may require advance payment unless credit terms are agreed in
        writing.
      </Section>

      <Section title="9. Governing Law">
        These terms are governed by applicable international trade and
        transportation regulations.
      </Section>

      <Section title="10. Contact Information">
        For questions regarding these Terms & Conditions, please contact us via
        the Contact Us page.
      </Section>
    </main>
  );
};

export default TermsPage;
