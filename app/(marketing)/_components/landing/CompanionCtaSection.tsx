import Image from "next/image";

import { Container, SectionShell } from "@/components/ui/SectionShell";

import { HomeButton } from "./HomeButton";

export function CompanionCtaSection() {
  return (
    <SectionShell
      id="companion-cta"
      className="full-bleed relative overflow-hidden bg-gradient-to-r from-[#eef6ff] via-[#f5f9ff] to-[#fafcff]"
    >
      <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
        <Image
          src="/images/discover-our-approach/four/four.png"
          alt="Woman smiling in a wellness conversation"
          fill
          className="object-cover object-center"
          sizes="52vw"
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#eef6ff] via-[#eef6ff]/70 to-transparent"
          aria-hidden
        />
      </div>

      <Container className="relative grid min-h-[420px] items-center py-14 md:min-h-[480px] md:py-20 lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-16">
        <div className="relative z-10 flex flex-col gap-5 md:gap-6">
          <h2 className="text-3xl font-bold leading-tight text-[#0c2340] md:text-4xl lg:text-[42px]">
            We Are Your Companion{" "}
            <span className="text-sky-primary">In Your Wellness</span> Journey
          </h2>
          <p className="max-w-xl text-base text-muted-foreground md:text-lg">
            Supporting your journey to better health through smart tracking,
            natural wisdom, expert guidance, and continuous support.
          </p>
          <p className="max-w-xl text-base text-sky-primary md:text-lg">
            &ldquo;We believe better health happens when modern intelligence
            meets ancient wisdom.&rdquo;
          </p>
          <div>
            <HomeButton variant="sky">Begin Your Journey</HomeButton>
          </div>
        </div>

        <div className="relative mt-8 aspect-[4/3] w-full lg:hidden">
          <Image
            src="/images/discover-our-approach/four/four.png"
            alt="Woman smiling in a wellness conversation"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </Container>
    </SectionShell>
  );
}
