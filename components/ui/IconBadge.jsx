import { cn } from "@/lib/utils";

const toneStyles = {
  copper: "bg-copper-100 text-copper-700",
  gold: "bg-gold-100 text-gold-700",
  soot: "bg-soot-100 text-soot-700",
  "copper-dark": "bg-copper-900/50 text-copper-300",
  "gold-dark": "bg-gold-900/50 text-gold-300",
  "soot-dark": "bg-soot-800/60 text-sand-200",
};

export default function IconBadge({
  icon: Icon,
  label,
  className,
  tone = "copper",
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]",
        toneStyles[tone] || toneStyles.copper,
        className,
      )}
    >
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      <span>{label}</span>
    </div>
  );
}
