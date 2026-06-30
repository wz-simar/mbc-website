import Image from "next/image";
import { Check } from "lucide-react";

import { Container, SectionShell } from "@/components/ui/SectionShell";

const CHECKLIST = [
  "Interconnected health modules that 'speak' to each other.",
  "A self-correcting system that adjusts based on your real-time state.",
] as const;

const Sixth = () => {
  return (
    <SectionShell className="bg-[#F2F9FD] py-10 md:py-16">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:aspect-[5/4]">
            <Image
              src="/images/discover-our-approach-new/sixth_two.jpeg"
              alt="Lush green wellness landscape representing a connected health ecosystem"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold leading-tight text-[#0B1C30] md:text-4xl">
              A Wellness Ecosystem
            </h2>

            <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                In nature, synergy creates resilience. We believe your health
                should work the same way—every signal connected, every insight
                actionable.
              </p>
              <p>
                ByBimari builds a true wellness ecosystem by connecting your
                sleep, stress, recovery, nutrition, and movement into one
                unified view.
              </p>
            </div>

            <ul className="mt-1 flex flex-col gap-4">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#026D31]">
                    <Check className="size-3.5 stroke-[3] text-white" />
                  </span>
                  <span className="text-sm leading-relaxed text-[#0B1C30]/85 md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
};

export default Sixth;
