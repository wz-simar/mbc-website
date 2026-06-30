import Image from "next/image";
import { SectionShell } from "@/components/ui/SectionShell";

export function TwoImageSection() {
  return (
    <SectionShell className="full-bleed overflow-hidden bg-white p-0">
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {/* Image 1 */}
        <div className="relative h-[220px] md:h-[520px] lg:h-[400px]">
          <Image
            src="/images/meet-sky/first.png"
            alt="Image One"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Image 2 */}
        <div className="relative h-[220px] md:h-[520px] lg:h-[400px] mt-0 md:mt-4">
          <Image
            src="/images/meet-sky/second.png"
            alt="Image Two"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </SectionShell>
  );
}
