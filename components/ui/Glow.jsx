import { cn } from "@/lib/utils";

const colorMap = {
  copper: "rgba(216, 94, 20, 0.15)",
  gold: "rgba(207, 174, 64, 0.18)",
  sand: "rgba(248, 233, 165, 0.12)",
};

export default function Glow({
  color = "gold",
  size = "24rem",
  className,
  style,
}) {
  const fill = colorMap[color] || colorMap.gold;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${fill}, transparent 70%)`,
        filter: "blur(60px)",
        ...style,
      }}
    />
  );
}
