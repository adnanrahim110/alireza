import { cn } from "@/lib/utils";

export default function TexturedCard({
  as: Component = "div",
  dark = false,
  className,
  children,
}) {
  return (
    <Component
      className={cn(dark ? "paper-panel-dark" : "paper-panel", className)}
    >
      {children}
    </Component>
  );
}
