import { siteContent } from "@/content/site-content";
import AuthorHero from "@/components/author/AuthorHero";
import AuthorStory from "@/components/author/AuthorStory";
import CTASection from "@/components/ui/CTASection";
import ContactSection from "@/components/ui/ContactSection";
import TestimonialRail from "@/components/ui/TestimonialRail";

export default function AuthorPage() {
  return (
    <>
      <AuthorHero />
      <AuthorStory />
      <CTASection {...siteContent.author.cta} />
      <TestimonialRail
        heading={siteContent.author.testimonialHeading}
        testimonials={siteContent.testimonials}
      />
      <ContactSection
        contact={siteContent.contact}
        heading={siteContent.author.contactSection}
      />
    </>
  );
}
