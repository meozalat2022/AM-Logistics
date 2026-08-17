import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
export const metadata = {
  title: "Contact AM Logistics",
  description:
    "Contact AM Logistics for freight forwarding, shipping, customs clearance, and logistics inquiries.",
};
const ContactPage = () => {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </main>
  );
};

export default ContactPage;