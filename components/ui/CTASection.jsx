import Button from "@/components/ui/Button";
import Glow from "@/components/ui/Glow";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CTASection({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}) {
  return (
    <section className="section-dark relative overflow-hidden">
      <Glow color="gold" size="28rem" className="-left-24 top-0 opacity-40" />
      <Glow
        color="copper"
        size="22rem"
        className="-right-16 bottom-0 opacity-30"
      />

      <div className="section-shell relative z-10 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <SectionHeading
              description={description}
              eyebrow={eyebrow}
              title={title}
              dark
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              {primaryAction ? (
                <Button href={primaryAction.href} size="lg" tone="gold" glow>
                  {primaryAction.label}
                </Button>
              ) : null}
              {secondaryAction ? (
                <Button
                  href={secondaryAction.href}
                  size="lg"
                  variant="ghost"
                  className="text-sand-200/80 border-sand-200/15 hover:bg-sand-100/8 hover:text-sand-50"
                >
                  {secondaryAction.label}
                </Button>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
