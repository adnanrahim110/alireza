import QuoteBlock from "@/components/ui/QuoteBlock";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/content/site-content";

export default function BookDetails() {
  const { details } = siteContent.book;

  return (
    <section className="section-light">
      <div className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <Reveal>
            <SectionHeading
              description={details.description}
              eyebrow={details.eyebrow}
              title={details.title}
            />
            <div className="mt-7 flex flex-wrap gap-2">
              {details.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gold-300/45 bg-gold-100/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-soot-800"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-7 space-y-5">
              {siteContent.bookProfile.details.map((detail) => (
                <p key={detail} className="text-base leading-8 text-soot-700">
                  {detail}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4">
            {details.sections.map((section, index) => (
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
              <QuoteBlock quote={details.pullQuote} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
