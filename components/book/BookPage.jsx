import { siteContent } from "@/content/site-content";
import BookDetails from "@/components/book/BookDetails";
import BookHero from "@/components/book/BookHero";
import ContactSection from "@/components/ui/ContactSection";
import TestimonialRail from "@/components/ui/TestimonialRail";

export default function BookPage() {
  return (
    <>
      <BookHero />
      <BookDetails />
      <TestimonialRail
        heading={siteContent.book.testimonialHeading}
        testimonials={siteContent.testimonials}
      />
      <ContactSection
        contact={siteContent.contact}
        heading={siteContent.book.contactSection}
      />
    </>
  );
}
