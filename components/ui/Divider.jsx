import { cn } from "@/lib/utils";

export default function Divider({ className }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "mx-auto h-px w-full max-w-[1320px] px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      <div className="h-full bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />
    </div>
  );
}
