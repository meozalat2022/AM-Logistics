import CareersHero from "@/components/careers/CareersHero";
import WhyWorkWithUs from "@/components/careers/WhyWorkWithUs";
import OpenPositions from "@/components/careers/OpenPositions";
import CareersForm from "@/components/careers/CareersForm";
export const metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at AM Logistics and join our growing logistics team.",
};
export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <WhyWorkWithUs />
      <OpenPositions />
      <CareersForm />
    </main>
  );
}
