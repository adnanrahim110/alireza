import { cn } from "@/lib/utils";
import Link from "next/link";

const variantClasses = {
  solid:
    "border-transparent text-sand-50 shadow-[0_14px_30px_rgba(73,33,8,0.14)]",
  outline: "bg-sand-50/70 backdrop-blur-sm",
  ghost: "border-transparent bg-transparent",
};

const toneClasses = {
  copper: {
    solid: "bg-copper-600 hover:bg-copper-500",
    outline: "text-copper-700 hover:border-copper-500 hover:bg-copper-100/90",
    ghost: "text-copper-700 hover:bg-copper-100/80",
  },
  gold: {
    solid: "bg-gold-500 text-soot-900 hover:bg-gold-400",
    outline: "text-gold-700 hover:border-gold-500 hover:bg-gold-100/90",
    ghost: "text-gold-700 hover:bg-gold-100/80",
  },
  soot: {
    solid: "bg-soot-800 hover:bg-soot-700",
    outline: "text-soot-800 hover:border-soot-500 hover:bg-soot-100/80",
    ghost: "text-soot-800 hover:bg-soot-100/80",
  },
};

const sizeClasses = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:h-12 sm:px-6",
  lg: "h-12 px-6 text-sm sm:h-[3.25rem] sm:px-7 sm:text-[0.98rem]",
};

function sharedClassName({ variant, tone, size, glow, className }) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full border font-medium tracking-[0.01em] transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50",
    variantClasses[variant],
    toneClasses[tone]?.[variant],
    sizeClasses[size],
    glow &&
      variant === "solid" &&
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
  glow = false,
  className,
  ...props
}) {
  const classes = sharedClassName({ variant, tone, size, glow, className });

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
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
