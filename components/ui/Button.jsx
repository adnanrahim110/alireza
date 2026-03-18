import { cn } from "@/lib/utils";
import Link from "next/link";

const DEFAULT_VARIANT = "solid";
const DEFAULT_TONE = "copper";
const DEFAULT_SIZE = "md";

/* ——— Base classes shared by every button ——— */
const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full border font-medium tracking-[0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

/* ——— Variant base classes (mode-independent) ——— */
const variantBase = {
  solid: "border-transparent shadow-[0_14px_30px_rgba(73,33,8,0.14)]",
  outline: "bg-transparent",
  ghost: "border-transparent bg-transparent",
};

/* ——— Tone × Variant × Mode (light / dark) ——— */
const toneClasses = {
  copper: {
    solid: {
      light:
        "bg-copper-600 text-sand-50 hover:bg-copper-500 active:bg-copper-700 focus-visible:ring-copper-500/50 focus-visible:ring-offset-sand-50",
      dark: "bg-copper-600 text-sand-50 hover:bg-copper-500 active:bg-copper-700 focus-visible:ring-copper-400/50 focus-visible:ring-offset-soot-950",
    },
    outline: {
      light:
        "border-copper-400/60 text-copper-700 hover:bg-copper-50 hover:border-copper-500 active:bg-copper-100/80 focus-visible:ring-copper-500/50 focus-visible:ring-offset-sand-50",
      dark: "border-copper-500/30 text-copper-300 hover:bg-copper-500/10 hover:border-copper-400/50 hover:text-copper-200 active:bg-copper-500/15 focus-visible:ring-copper-400/50 focus-visible:ring-offset-soot-950",
    },
    ghost: {
      light:
        "text-copper-700 hover:bg-copper-100/60 active:bg-copper-100 focus-visible:ring-copper-500/50 focus-visible:ring-offset-sand-50",
      dark: "text-copper-300/80 hover:bg-copper-500/10 hover:text-copper-200 active:bg-copper-500/15 focus-visible:ring-copper-400/50 focus-visible:ring-offset-soot-950",
    },
  },
  gold: {
    solid: {
      light:
        "bg-gold-500 text-soot-900 hover:bg-gold-400 active:bg-gold-600 focus-visible:ring-gold-500/50 focus-visible:ring-offset-sand-50",
      dark: "bg-gold-500 text-soot-900 hover:bg-gold-400 active:bg-gold-600 focus-visible:ring-gold-400/50 focus-visible:ring-offset-soot-950",
    },
    outline: {
      light:
        "border-gold-400/60 text-gold-700 hover:bg-gold-50 hover:border-gold-500 active:bg-gold-100/80 focus-visible:ring-gold-500/50 focus-visible:ring-offset-sand-50",
      dark: "border-gold-400/30 text-gold-300 hover:bg-gold-500/10 hover:border-gold-400/50 hover:text-gold-200 active:bg-gold-500/15 focus-visible:ring-gold-400/50 focus-visible:ring-offset-soot-950",
    },
    ghost: {
      light:
        "text-gold-700 hover:bg-gold-100/60 active:bg-gold-100 focus-visible:ring-gold-500/50 focus-visible:ring-offset-sand-50",
      dark: "text-gold-300/80 hover:bg-gold-500/10 hover:text-gold-200 active:bg-gold-500/15 focus-visible:ring-gold-400/50 focus-visible:ring-offset-soot-950",
    },
  },
  soot: {
    solid: {
      light:
        "bg-soot-800 text-sand-50 hover:bg-soot-700 active:bg-soot-900 focus-visible:ring-soot-500/45 focus-visible:ring-offset-sand-50",
      dark: "bg-soot-700 text-sand-50 hover:bg-soot-600 active:bg-soot-800 focus-visible:ring-soot-400/45 focus-visible:ring-offset-soot-950",
    },
    outline: {
      light:
        "border-soot-300/60 text-soot-700 hover:bg-soot-50 hover:border-soot-400 active:bg-soot-100/80 focus-visible:ring-soot-500/45 focus-visible:ring-offset-sand-50",
      dark: "border-sand-200/20 text-sand-200/80 hover:bg-sand-100/8 hover:border-sand-200/30 hover:text-sand-50 active:bg-sand-100/12 focus-visible:ring-sand-300/30 focus-visible:ring-offset-soot-950",
    },
    ghost: {
      light:
        "text-soot-700 hover:bg-soot-100/60 active:bg-soot-100 focus-visible:ring-soot-500/45 focus-visible:ring-offset-sand-50",
      dark: "text-sand-200/70 hover:bg-sand-100/6 hover:text-sand-50 active:bg-sand-100/10 focus-visible:ring-sand-300/30 focus-visible:ring-offset-soot-950",
    },
  },
};

const sizeClasses = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:h-12 sm:px-6",
  lg: "h-12 px-6 text-sm sm:h-[3.25rem] sm:px-7 sm:text-[0.98rem]",
};

function resolveClasses({ variant, tone, size, dark, glow, className }) {
  const v = variantBase[variant] ? variant : DEFAULT_VARIANT;
  const t = toneClasses[tone] ? tone : DEFAULT_TONE;
  const s = sizeClasses[size] ? size : DEFAULT_SIZE;
  const mode = dark ? "dark" : "light";

  return cn(
    baseClasses,
    "hover:scale-[1.02] active:scale-[0.97]",
    variantBase[v],
    toneClasses[t][v][mode],
    sizeClasses[s],
    glow &&
      v === "solid" &&
      "shadow-[0_0_32px_rgba(207,174,64,0.28)] hover:shadow-[0_0_42px_rgba(207,174,64,0.38)]",
    className,
  );
}

export default function Button({
  children,
  href,
  variant = "solid",
  tone = "copper",
  size = "md",
  dark = false,
  glow = false,
  className,
  ...props
}) {
  const classes = resolveClasses({ variant, tone, size, dark, glow, className });

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          className={classes}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link className={classes} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={props.type ?? "button"} {...props}>
      {children}
    </button>
  );
}
