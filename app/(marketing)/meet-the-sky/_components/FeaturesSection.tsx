import { BatteryFull, Droplets } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";

export function FeaturesSection() {
  return (
    <SectionShell className="hidden bg-[#F8FAFC] py-16 md:block">
      <div className="mx-auto flex justify-center max-w-9xl flex-wrap gap-6 px-6">
        {/* CARD 1 */}
        <div className="w-[320px] rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <BatteryFull className="h-6 w-6 text-[#22C55E]" />

            <div>
              <h3 className="text-lg font-semibold text-[#0C2340]">
                7-Day Battery Life
              </h3>

              <p className="mt-2 text-sm text-[#6B7280]">
                Long-lasting power for <br />
                uninterrupted wellness.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="w-[320px] rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
              <Droplets className="h-5 w-5 text-[#3B82F6]" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0C2340]">
                5 ATM WaterProof
              </h3>

              <p className="mt-2 text-sm text-[#6B7280]">
                Wear it in the shower, swim or sweat without any worry.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3 (CONTENT WIDTH) */}
        <div className="w-auto rounded-2xl bg-white p-6 shadow-sm">
          <div className="space-y-4 text-sm text-[#374151]">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-[#0C2340]">
                More Color Options:
              </span>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-gray-400" />
                Silver
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                Gold
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#2D2D2D]" />
                Charcoal Black
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-center gap-2">
              <span className="font-medium text-[#0C2340]">
                Total 9 Sizes Options:
              </span>

              <span>Size 6 - 14</span>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
