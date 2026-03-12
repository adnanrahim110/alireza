import {
  BriefcaseBusiness,
  Clock3,
  Mail,
  MapPinned,
  Phone,
} from "lucide-react";
import TexturedCard from "@/components/ui/TexturedCard";

const icons = {
  email: Mail,
  briefcase: BriefcaseBusiness,
  clock: Clock3,
  map: MapPinned,
  phone: Phone,
};

export default function ContactMethods({ methods, compact = false }) {
  return (
    <div
      className={
        compact ? "grid gap-4 md:grid-cols-2 xl:grid-cols-3" : "grid gap-4 sm:grid-cols-2"
      }
    >
      {methods.map((method) => {
        const Icon = icons[method.kind] ?? Mail;

        return (
          <TexturedCard
            key={method.label}
            className="flex h-full flex-col gap-4 px-5 py-5 sm:px-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-[1rem] bg-gold-100 text-gold-700">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-soot-500">
                {method.label}
              </p>
              {method.href ? (
                <a
                  className="mt-2 block text-[0.98rem] leading-7 text-soot-900 transition hover:text-copper-700"
                  href={method.href}
                >
                  {method.value}
                </a>
              ) : (
                <p className="mt-2 text-[0.98rem] leading-7 text-soot-800">
                  {method.value}
                </p>
              )}
            </div>
            {method.placeholder ? (
              <p className="mt-auto text-[10px] uppercase tracking-[0.14em] text-copper-700">
                Placeholder detail
              </p>
            ) : null}
          </TexturedCard>
        );
      })}
    </div>
  );
}
