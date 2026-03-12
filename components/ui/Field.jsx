import { cn } from "@/lib/utils";

export default function Field({ label, error, className, ...props }) {
  return (
    <label className={cn("flex flex-col gap-2", className)}>
      <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-soot-700">
        {label}
      </span>
      <input
        className={cn(
          "h-12 rounded-[1.2rem] border border-stone-300/70 bg-sand-50/90 px-4 text-[0.98rem] text-soot-900 outline-none transition placeholder:text-stone-500 focus:border-copper-500 focus:ring-2 focus:ring-copper-300/30",
          error && "border-copper-600 ring-2 ring-copper-200/60"
        )}
        {...props}
      />
      {error ? <span className="text-sm text-copper-800">{error}</span> : null}
    </label>
  );
}
