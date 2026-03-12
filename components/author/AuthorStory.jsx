import QuoteBlock from "@/components/ui/QuoteBlock";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/content/site-content";

export default function AuthorStory() {
  const { story } = siteContent.author;

  return (
    <section className="section-light">
      <div className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-14">
          <Reveal>
            <SectionHeading
              description={story.description}
              eyebrow={story.eyebrow}
              title={story.title}
            />
            <div className="mt-8 space-y-4">
              {siteContent.authorProfile.focus.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-gold-300/35 bg-sand-50/70 px-5 py-4 text-base leading-8 text-soot-800"
                >
                  {point}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4">
            {story.sections.map((section, index) => (
              <Reveal
                key={section.title}
                delay={index * 0.06}
                variant="slide-right"
              >
                <div className="rounded-2xl border border-gold-300/35 bg-sand-50/65 px-5 py-6 sm:px-6">
                  <p className="font-heading text-2xl text-soot-950">
                    {section.title}
                  </p>
                  <p className="mt-3 text-base leading-8 text-soot-700">
                    {section.description}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.18}>
              <QuoteBlock quote={story.quote} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
