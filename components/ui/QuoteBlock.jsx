import { cn } from "@/lib/utils";

export default function QuoteBlock({ quote, variant = "card", className }) {
  if (variant === "cinematic") {
    return (
      <blockquote className={cn("text-center", className)}>
        <p className="mx-auto max-w-2xl font-heading text-[1.6rem] leading-[1.25] text-gold-200/80 sm:text-[2rem] lg:text-[2.4rem]">
          <span className="text-gold-400/50">&mdash;&ensp;</span>
          {quote}
          <span className="text-gold-400/50">&ensp;&mdash;</span>
        </p>
      </blockquote>
    );
  }

  return (
    <blockquote
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-gold-300/40 bg-gradient-to-br from-gold-100/72 via-sand-50 to-sand-50 px-5 py-6 text-[0.95rem] leading-7 text-soot-800 shadow-[0_18px_45px_rgba(104,57,17,0.08)] sm:px-8 sm:py-9 sm:text-[1.02rem] sm:leading-8",
        className,
      )}
    >
      <span className="absolute left-6 top-4 font-heading text-5xl leading-none text-gold-400/55">
        &ldquo;
      </span>
      <p className="relative pl-5">{quote}</p>
    </blockquote>
  );
}
