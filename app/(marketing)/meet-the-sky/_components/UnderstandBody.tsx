import Image from "next/image";
import { SectionShell } from "@/components/ui/SectionShell";

export function UnderstandBody() {
  return (
    <SectionShell className="full-bleed overflow-hidden bg-white p-0">
      <div className="relative w-full">
        {/* Desktop Image */}
        <Image
          src="/images/meet-sky/understand.png"
          alt="Understand Body"
          width={2000}
          height={900}
          priority
          className="hidden h-auto w-full object-cover md:block"
        />

        {/* Mobile Image */}
        <Image
          src="/images/meet-sky/understand_mobile.png"
          alt="Understand Body Mobile"
          width={1200}
          height={1200}
          priority
          className="h-auto w-full object-cover md:hidden"
        />
      </div>
    </SectionShell>
  );
}
