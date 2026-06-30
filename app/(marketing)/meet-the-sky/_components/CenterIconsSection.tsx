import Image from "next/image";

import { SectionShell } from "@/components/ui/SectionShell";

export function CenterIconsSection() {
  return (
    <SectionShell className="bg-white py-1 hidden md:block">
      <div className="flex justify-center">
        <Image
          src="/images/meet-sky/center_icon.png"
          alt="Sky Ring"
          width={1000}
          height={100}
          className="h-[300px] w-full max-w-5xl object-contain"
          priority
        />
      </div>
    </SectionShell>
  );
}
