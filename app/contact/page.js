import { buildMetadata } from "@/content/site-content";
import ContactPage from "@/components/contact/ContactPage";

export const metadata = buildMetadata("contact");

export default function Contact() {
  return <ContactPage />;
}
