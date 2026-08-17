import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import ServiceDetails from "@/components/services/ServiceDetails";
import ServicesWhyUs from "@/components/services/ServicesWhyUs";
import ServicesCTA from "@/components/services/ServicesCTA";


export const metadata = {
  title: "Logistics Services",
  description:
  "AM Logistics provides ocean freight, air freight, inland transportation, customs clearance, and importer of record services.",
};
const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <ServiceDetails />
      <ServicesWhyUs />
      {/* <ServicesCTA /> */}
    </>
  );
};

export default Services;