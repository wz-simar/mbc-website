import Image from "next/image";

import {
  Container,
  GradientText,
  SectionShell,
} from "@/components/ui/SectionShell";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";

import { BlueButton } from "./BlueButton";
import { OutlineButton } from "./OutlineButton";

const FEATURE_BAR: { label: string; icon: IconName }[] = [
  { label: "Smart Tracking", icon: "scanner" },
  { label: "AI Insights", icon: "brain" },
  { label: "Natural Guidance", icon: "leaf" },
];

export function HeroSection() {
  return (
    <SectionShell
      id="hero"
      className="full-bleed relative overflow-hidden bg-white"
    >
      <div className="absolute inset-y-0 right-0 hidden w-[58%] max-w-[820px] lg:block">
        <Image
          src="/images/discover-our-approach/hero/hero_two.jpeg"
          alt="Woman reviewing AI health insights on her phone"
          fill
          className="object-contain object-right"
          priority
          sizes="58vw"
        />
        {/* <div
          className='pointer-events-none absolute inset-y-0 left-0 w-[38%] max-w-96 bg-gradient-to-r from-white to-transparent'
          aria-hidden
          
        /> */}
      </div>

      <Container className="relative grid min-h-[520px] items-center py-10 md:min-h-[580px] md:py-14 lg:min-h-[640px] lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-16 lg:py-20">
        <div className="relative z-10 flex max-w-xl flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#026D31]/10 px-4 py-2">
            <Icon name="star" size={16} />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#026D31]">
              ANCIENT WISDOM • MODERN SCIENCE
            </span>
          </div>

          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[52px]">
              Reconnect With Your Body.{" "}
              <GradientText variant="insights" className="font-bold">
                Return to Natural Balance.
              </GradientText>
            </h1>
          </div>

          <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
            ByBimari is a complete wellness ecosystem designed to help you
            restore balance and build a healthier life naturally.
          </p>

          <div className="flex flex-wrap gap-4">
            <BlueButton className="rounded-lg">Start Your Journey</BlueButton>
          </div>
        </div>

        <div className="relative mt-8 w-full lg:hidden">
          <Image
            src="/images/discover-our-approach/hero/hero_two.jpeg"
            alt="Discover our approach hero illustration"
            width={679}
            height={702}
            className="h-auto w-full"
            priority
            sizes="100vw"
          />
        </div>
      </Container>
    </SectionShell>
  );
}
