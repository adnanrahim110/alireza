import { siteContent } from "@/content/site-content";
import HomeHero from "@/components/home/HomeHero";
import AuthorIntro from "@/components/home/AuthorIntro";
import BookIntro from "@/components/home/BookIntro";
import CTASection from "@/components/ui/CTASection";
import ContactSection from "@/components/ui/ContactSection";
import TestimonialRail from "@/components/ui/TestimonialRail";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AuthorIntro />
      <BookIntro />
      <TestimonialRail
        heading={siteContent.home.testimonialHeading}
        testimonials={siteContent.testimonials}
      />
      <CTASection {...siteContent.home.cta} />
      <ContactSection
        compact
        contact={siteContent.contact}
        heading={siteContent.home.contactSection}
      />
    </>
  );
}
