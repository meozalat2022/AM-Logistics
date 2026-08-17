import CTAForm from "@/components/CTAForm";
export const metadata = {
  title: "Request a Shipment Quote",
  description:
    "Request a competitive shipping quote from AM Logistics for ocean freight, air freight, inland transportation, customs clearance, or import services.",
};
const GetQuotePage = () => {
  return (
    <main>
      <CTAForm />
    </main>
  );
};

export default GetQuotePage;