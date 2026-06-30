import Image from "next/image";
import { SectionShell } from "@/components/ui/SectionShell";

const images = [
  "/images/meet-sky/service_one.png",
  "/images/meet-sky/service_two.png",
  "/images/meet-sky/service_three.png",
  "/images/meet-sky/service_four.png",
];

export function ServiceSection() {
  return (
    <SectionShell className="full-bleed overflow-hidden bg-[#ebf5ff] py-10">
      {/* Desktop */}
      <div className="hidden w-full grid-cols-4 gap-6 px-6 md:grid lg:px-16">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`service-${i + 1}`}
            width={600}
            height={600}
            className="h-auto w-full object-contain"
          />
        ))}
      </div>

      {/* Mobile */}
      <div className="flex gap-4 flex-col items-center px-4 md:hidden">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`service-${i + 1}`}
            width={600}
            height={600}
            className="h-auto w-full flex-shrink-0 object-contain"
          />
        ))}
      </div>
    </SectionShell>
  );
}
