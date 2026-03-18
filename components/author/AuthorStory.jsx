import QuoteBlock from "@/components/ui/QuoteBlock";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/content/site-content";
import Image from "next/image";

export default function AuthorStory() {
  const { story } = siteContent.author;
  const portrait = siteContent.assets.authorPortrait;
  const { authorProfile } = siteContent;

  return (
    <section className="section-light">
      <div className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[auto_25%] lg:items-center lg:gap-12">
          <Reveal>
            <SectionHeading
              description={story.description}
              eyebrow={story.eyebrow}
              title={story.title}
            />
          </Reveal>

          <Reveal delay={0.06} variant="scale" className="h-full">
            <div className="relative h-full w-full overflow-hidden rounded-[1.3rem] border border-gold-300/45 bg-gold-100">
              <Image
                alt={portrait.alt}
                className="object-cover object-top"
                fill
                sizes="(min-width: 1024px) 11rem, (min-width: 640px) 11rem, 68vw"
                src={portrait.src}
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-12">
          <Reveal>
            <p className="eyebrow">Author Lens</p>
          </Reveal>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {authorProfile.focus.map((point, index) => (
              <Reveal key={point} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-gold-300/35 bg-sand-50/72 px-5 py-5 text-[0.96rem] leading-8 text-soot-800 shadow-[0_14px_36px_rgba(82,36,9,0.05)]">
                  {point}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Reveal>
            <p className="eyebrow">Story Foundations</p>
          </Reveal>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {story.sections.map((section, index) => (
              <Reveal
                key={section.title}
                delay={index * 0.06}
                variant="slide-right"
              >
                <div className="h-full rounded-2xl border border-gold-300/35 bg-white/55 px-5 py-6 shadow-[0_14px_36px_rgba(82,36,9,0.05)] sm:px-6">
                  <p className="font-heading text-2xl leading-tight text-soot-950">
                    {section.title}
                  </p>
                  <p className="mt-3 text-base leading-8 text-soot-700">
                    {section.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.24}>
          <QuoteBlock className="mx-auto mt-10 max-w-4xl" quote={story.quote} />
        </Reveal>
      </div>
    </section>
  );
}
