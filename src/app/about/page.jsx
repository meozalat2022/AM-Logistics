import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import MissionVision from "@/components/about/MissionVision";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import HowWeWork from "@/components/about/HowWeWork";
export const metadata = {
  title: "About AM Logistics",
  description:
    "Learn about AM Logistics and our approach to international freight forwarding and logistics.",
};
const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <WhyChooseUs />
      <HowWeWork />
    </main>
  );
};

export default AboutPage;