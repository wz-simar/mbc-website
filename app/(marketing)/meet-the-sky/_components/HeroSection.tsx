import { Activity, Clock3, Heart, Moon, Zap } from "lucide-react";
import Image from "next/image";

import { Container, SectionShell } from "@/components/ui/SectionShell";
import { BlueButton } from "../../ai-insights/_components/BlueButton";
import { SectionBadge } from "../../_components/landing/SectionBadge";

const features = [
  { icon: Clock3, label: "24x7 Monitoring" },
  { icon: Heart, label: "Stress" },
  { icon: Zap, label: "Activity" },
  { icon: Moon, label: "Sleep" },
  { icon: Activity, label: "Recovery" },
];

function FeatureChip({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex w-full items-center">
      {/* Icon Box */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-[#D6E5EE] bg-[#6AD1CE]">
        <Icon className="h-5 w-5 text-white" />
      </div>

      {/* Text */}
      <div className="-ml-1 flex h-12 flex-1 items-center rounded-r-full border border-l-0 border-[#D6E5EE] bg-white px-5">
        <span className="text-sm font-medium text-[#0C2340]">{label}</span>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <SectionShell
      id="hero"
      className="full-bleed relative overflow-hidden bg-white md:min-h-[702px]"
    >
      {/* Desktop Background */}
      <Image
        src="/images/meet-sky/meet_hero.png"
        alt=""
        fill
        priority
        className="hidden object-cover object-top md:block"
      />

      <Container className="relative z-10 pt-12 pb-0 md:grid md:min-h-[702px] md:grid-cols-[minmax(0,520px)_1fr] md:items-center md:py-20">
        <div className="flex flex-col gap-6 md:gap-8">
          <div>
            <SectionBadge className="border-sky-primary/25 bg-[#EEF6FF] text-xs text-[#0C2340] shadow-none">
              ALWAYS HELPS YOU ACHIEVE BETTER HEALTH
            </SectionBadge>
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#0C2340] md:text-5xl lg:text-[56px]">
            Meet Sky Ring
          </h1>

          <p className="max-w-[450px] text-base leading-7 text-[#3D5166]">
            The Sky provides AI health insights, with monthly
            <br className="hidden md:block" /> and weekly health reports to help
            you track and understands
            <br className="hidden md:block" /> health trends. Keep challenging
            yourself and aim for better
            <br className="hidden md:block" /> health, all at your fingertips.
          </p>

          <div className="grid max-w-[420px] grid-cols-2 gap-x-5 gap-y-4">
            {features.map(({ icon, label }) => (
              <FeatureChip key={label} icon={icon} label={label} />
            ))}
          </div>

          <div>
            <BlueButton className="rounded-lg">Start Your Journey</BlueButton>
          </div>
        </div>
      </Container>

      {/* Mobile Image */}
      <div className="relative h-[600px] w-full md:hidden">
        <Image
          src="/images/meet-sky/meet_hero_mobile.png"
          alt="Meet Sky Ring"
          fill
          priority
          className="object-cover object-bottom"
        />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
      </div>
    </SectionShell>
  );
}
