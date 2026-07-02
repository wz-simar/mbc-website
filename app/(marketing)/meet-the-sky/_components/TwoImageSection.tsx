import Image from "next/image";
import { SectionShell } from "@/components/ui/SectionShell";

export function TwoImageSection() {
  return (
    <SectionShell className="full-bleed overflow-hidden bg-white p-0">
      <div className="mx-auto flex w-full max-w-5xl justify-center px-6 py-8 md:py-12">
        <div className="relative h-[240px] w-full md:h-[520px] lg:h-[440px]">
          <Image
            src="/images/meet-sky/first.png"
            alt="Meet SKY"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </SectionShell>
  );
}
