import Button from "@/components/ui/Button";
import Glow from "@/components/ui/Glow";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/content/site-content";
import { Feather, LibraryBig, Mountain } from "lucide-react";

const icons = [Feather, LibraryBig, Mountain];

export default function AuthorIntro() {
  const { authorIntro } = siteContent.home;

  return (
    <section className="section-dark relative overflow-hidden">
      <Glow
        color="copper"
        size="22rem"
        className="-left-20 top-12 opacity-30"
      />

      <div className="section-shell relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <Reveal>
            <SectionHeading
              description={authorIntro.description}
              eyebrow={authorIntro.eyebrow}
              title={authorIntro.title}
              dark
            />
            <p className="mt-6 text-base leading-8 text-sand-200/70">
              {siteContent.authorProfile.summary}
            </p>
            <div className="mt-7">
              <Button
                href={authorIntro.action.href}
                variant="ghost"
                className="text-sand-200/80 border border-sand-200/15 hover:bg-sand-100/8 hover:text-sand-50"
              >
                {authorIntro.action.label}
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {authorIntro.pillars.map((pillar, index) => {
              const Icon = icons[index];

              return (
                <Reveal key={pillar.title} delay={index * 0.06}>
                  <div className="rounded-2xl border border-sand-100/8 bg-soot-900/50 px-5 py-6 backdrop-blur-sm sm:px-6">
                    <IconBadge
                      icon={Icon}
                      label={pillar.title}
                      tone="copper-dark"
                    />
                    <p className="mt-4 text-base leading-8 text-sand-200/70">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
