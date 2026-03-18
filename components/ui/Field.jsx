import { cn } from "@/lib/utils";

export default function Field({ label, error, className, ...props }) {
  return (
    <label className={cn("flex flex-col gap-1.5 sm:gap-2", className)}>
      <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-soot-700">
        {label}
      </span>
      <input
        className={cn(
          "h-12 rounded-[1.2rem] border border-stone-300/70 bg-sand-50/90 px-4 text-[0.95rem] text-soot-900 outline-none transition placeholder:text-stone-400 focus-visible:border-copper-500 focus-visible:ring-2 focus-visible:ring-copper-400/40 focus-visible:ring-offset-1 focus-visible:ring-offset-sand-50 sm:text-[0.98rem]",
          error && "border-copper-600 ring-2 ring-copper-200/60",
        )}
        {...props}
      />
      {error ? (
        <span className="text-[0.82rem] leading-5 text-copper-800">{error}</span>
      ) : null}
    </label>
  );
}
