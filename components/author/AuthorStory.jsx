import QuoteBlock from "@/components/ui/QuoteBlock";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/content/site-content";
import Image from "next/image";

export default function AuthorStory() {
  const { story } = siteContent.author;
  const portrait = siteContent.assets.authorPortrait;

  return (
    <section className="section-light">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-14">
          <Reveal>
            <SectionHeading
              description={story.description}
              eyebrow={story.eyebrow}
              title={story.title}
            />

            <Reveal delay={0.06} variant="scale">
              <div className="relative mt-6 aspect-3/4 max-h-[60vh] overflow-hidden rounded-[1.75rem] border border-gold-300/50 bg-gold-100 shadow-[0_24px_60px_rgba(82,36,9,0.1)] sm:mt-8 md:max-h-none">
                <Image
                  alt={portrait.alt}
                  className="object-cover object-top"
                  fill
                  sizes="(min-width: 1024px) 38vw, (min-width: 768px) 45vw, 100vw"
                  src={portrait.src}
                />
              </div>
            </Reveal>
          </Reveal>

          <div className="grid gap-3 sm:gap-4">
            {story.sections.map((section, index) => (
              <Reveal
                key={section.title}
                delay={index * 0.06}
                variant="slide-right"
              >
                <div className="rounded-2xl border border-gold-300/35 bg-sand-50/65 px-4 py-5 transition-colors duration-300 hover:border-gold-300/55 hover:bg-sand-50/85 sm:px-6 sm:py-6">
                  <p className="font-heading text-xl md:text-[22px] text-soot-950 sm:text-xl font-bold">
                    {section.title}
                  </p>
                  <p className="mt-2.5 font-light text-[0.92rem] leading-6 text-soot-900 sm:mt-1">
                    {section.description}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.18}>
              <QuoteBlock quote={story.quote} />
            </Reveal>

            <div className="pt-10 border-t border-sand-200 space-y-3 sm:mt-8 sm:space-y-4">
              {siteContent.authorProfile.focus.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-gold-300/35 bg-sand-50/70 px-4 py-3.5 text-[0.92rem] leading-7 text-soot-800 transition-colors duration-300 hover:border-gold-300/55 hover:bg-sand-50/90 sm:px-5 sm:py-4 sm:text-base sm:leading-8"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
