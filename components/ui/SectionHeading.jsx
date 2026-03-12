import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={dark ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "font-heading text-[2rem] leading-[1.12] sm:text-[2.55rem] lg:text-[3.25rem]",
          dark ? "text-sand-50" : "text-soot-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-[1rem] leading-8 sm:text-[1.06rem]",
            dark ? "text-sand-200/65" : "text-soot-600",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
