import { Check } from "lucide-react";
import Image from "next/image";

import { SectionShell } from "@/components/ui/SectionShell";

const features = [
  "Light Weight",
  "Skin Friendly",
  "Comfort All Day",
  "Elegant Design",
];

export function ComfortSection() {
  return (
    <SectionShell className="full-bleed overflow-hidden bg-white py-0">
      <div className="grid w-full grid-cols-1 lg:grid-cols-[1fr_400px_1fr]">
        {/* Left Image */}
        <div className="relative h-[320px] lg:h-[440px]">
          <Image
            src="/images/meet-sky/comfort_one.png"
            alt="Comfort"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex items-center justify-center bg-white px-8 py-10 lg:px-8 lg:py-0">
          <div className="w-full max-w-[300px]">
            <h2 className="text-3xl font-bold leading-tight text-[#0C2340] lg:text-[42px]">
              Comfort meets
              <br />
              elegance
            </h2>

            <div className="mt-8 space-y-5">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check
                    className="h-5 w-5 shrink-0 text-[#22C55E]"
                    strokeWidth={3}
                  />

                  <span className="text-lg font-medium text-[#4B5563]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[320px] lg:h-[440px]">
          <Image
            src="/images/meet-sky/comfort_two.png"
            alt="Elegance"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </SectionShell>
  );
}
