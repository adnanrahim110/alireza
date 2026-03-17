import AuthorIntro from "@/components/home/AuthorIntro";
import BookIntro from "@/components/home/BookIntro";
import HomeHero from "@/components/home/HomeHero";
import ContactSection from "@/components/ui/ContactSection";
import TestimonialRail from "@/components/ui/TestimonialRail";
import { siteContent } from "@/content/site-content";

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
      <ContactSection
        compact
        contact={siteContent.contact}
        heading={siteContent.home.contactSection}
      />
    </>
  );
}
