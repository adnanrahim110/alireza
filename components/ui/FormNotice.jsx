import { AlertCircle, BadgeAlert, CircleCheckBig } from "lucide-react";
import { cn } from "@/lib/utils";

const toneMap = {
  info: {
    icon: AlertCircle,
    className: "border-stone-300/60 bg-stone-100/70 text-stone-800",
  },
  warning: {
    icon: BadgeAlert,
    className: "border-copper-300/60 bg-copper-100/75 text-copper-900",
  },
  success: {
    icon: CircleCheckBig,
    className: "border-gold-300/60 bg-gold-100/75 text-soot-900",
  },
};

export default function FormNotice({ tone = "info", children, className }) {
  const config = toneMap[tone];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm leading-7",
        config.className,
        className
      )}
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0" />
      <div>{children}</div>
    </div>
  );
}
