import { siteContent } from "@/content/site-content";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/ui/ContactSection";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection
        contact={siteContent.contact}
        heading={siteContent.contactPage.section}
      />
    </>
  );
}
