import Hero from "@/components/Hero";
import ServicesOverview from "@/components/services/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/about/HowItWorks";

const HomePage = () => {
  return (
    <main className="w-full">
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorks />
    </main>
  );
};

export default HomePage;