import Image from "next/image";
import { SectionShell } from "@/components/ui/SectionShell";

export function SleepInsightsSection() {
  return (
    <SectionShell className="full-bleed overflow-hidden bg-white p-0">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="bg-[#F8FAFC] px-6 py-12 md:px-10 lg:px-16 lg:py-20">
          <h2 className="text-3xl font-bold text-[#0C2340] lg:text-5xl">
            Advanced Sleep Monitoring
          </h2>

          <p className="mt-4 max-w-md text-[#4B5563]">
            Understand your sleep, improve your recovery
          </p>

          {/* CARDS */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* CARD 1 - Sleep Score */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-[#0C2340]">Sleep Score</p>

              <div className="mt-4 flex flex-col items-center">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#22C55E]">
                  <div className="text-xl font-bold text-[#22C55E]">85</div>
                </div>

                <p className="mt-2 text-xs text-gray-400">/100</p>
                <p className="mt-1 text-sm font-semibold text-[#22C55E]">
                  GOOD
                </p>
              </div>
            </div>

            {/* CARD 2 - Deep Sleep */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-[#0C2340]">Deep Sleep</p>

              <p className="mt-3 text-lg font-semibold text-[#1E3A8A]">
                2h 20m
              </p>

              <div className="mt-3 h-2 w-full rounded-full bg-gray-200">
                <div className="h-2 w-[35%] rounded-full bg-[#1E3A8A]" />
              </div>

              <p className="mt-2 text-xs text-gray-500">35% of total sleep</p>
            </div>

            {/* CARD 3 - Recovery */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-[#0C2340]">Recovery</p>

              <p className="mt-3 text-lg font-bold text-[#1E3A8A]">86%</p>

              <p className="text-sm font-semibold text-[#22C55E]">Optimal</p>

              {/* mini bar chart */}
              <div className="mt-4 flex items-end gap-1">
                <div className="h-3 w-2 rounded bg-[#22C55E]/30" />
                <div className="h-5 w-2 rounded bg-[#22C55E]/40" />
                <div className="h-7 w-2 rounded bg-[#22C55E]/60" />
                <div className="h-10 w-2 rounded bg-[#22C55E]" />
              </div>
            </div>

            {/* CARD 4 - Sleep Stages */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-[#0C2340]">Sleep Stages</p>

              <div className="mt-3 space-y-2 text-sm">
                <p className="flex justify-between">
                  <span className="text-gray-500">Awake</span>
                  <span className="text-[#0C2340]">10m</span>
                </p>

                <p className="flex justify-between">
                  <span className="text-[#7C3AED]">REM</span>
                  <span className="text-[#0C2340]">1h 30m</span>
                </p>

                <p className="flex justify-between">
                  <span className="text-[#1E3A8A]">Light</span>
                  <span className="text-[#0C2340]">4h 20m</span>
                </p>

                <p className="flex justify-between">
                  <span className="text-[#22C55E]">Deep</span>
                  <span className="text-[#0C2340]">2h 20m</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative h-[420px] lg:h-full">
          <Image
            src="/images/meet-sky/sleep_insight.png"
            alt="Sleep Insights"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </SectionShell>
  );
}
