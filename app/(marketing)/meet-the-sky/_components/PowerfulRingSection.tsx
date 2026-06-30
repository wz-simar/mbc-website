import Image from "next/image";

import { SectionShell } from "@/components/ui/SectionShell";

export function PowerfulRingSection() {
  return (
    <SectionShell className="full-bleed overflow-hidden bg-white py-0">
      <div className="relative w-screen">
        <Image
          src="/images/meet-sky/powerful.png"
          alt="Small Ring Powerful Insights"
          width={2000}
          height={800}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </SectionShell>
  );
}
