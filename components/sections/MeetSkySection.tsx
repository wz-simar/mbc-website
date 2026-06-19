import { assets } from "@/lib/assets";
import {
  Container,
  DesktopCanvas,
  Eyebrow,
  GradientText,
  SectionShell,
} from "@/components/ui/SectionShell";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";

type Callout = {
  label: string;
  icon: IconName;
  left: number;
  top: number;
  width: number;
};

const callouts: Callout[] = [
  { label: "Sleep", icon: "powerSleep", left: 182, top: 362, width: 188 },
  { label: "Stress", icon: "stress", left: 1060, top: 356, width: 188 },
  { label: "Recovery", icon: "leafFill", left: 118, top: 535, width: 188 },
  { label: "SpO2", icon: "oxygen", left: 1124, top: 529, width: 188 },
  { label: "Heart Health", icon: "heartbeat", left: 161, top: 708, width: 239 },
  { label: "Activity", icon: "running", left: 1030, top: 702, width: 188 },
];

const specs: {
  value: string;
  label: string;
  icon: IconName;
}[] = [
  { value: "20+", label: "Health Metrics", icon: "wave" },
  { value: "7 Day", label: "Battery Life", icon: "battery" },
  { value: "5 ATM", label: "Water Resistant", icon: "waterdrop" },
  { value: "Titanium", label: "Premium Build", icon: "premium" },
];

function CalloutPill({ item }: { item: Callout }) {
  return (
    <div
      className="absolute flex h-[83px] items-center justify-center gap-3 rounded-[50px] border border-[rgba(77,138,255,0.5)] bg-[#000719] px-5"
      style={{ left: item.left, top: item.top, width: item.width }}
    >
      <Icon name={item.icon} size={30} className="shrink-0 object-contain" />
      <p className="whitespace-nowrap text-[24px] font-bold leading-none tracking-[0.48px] text-white">
        {item.label}
      </p>
    </div>
  );
}

function SpecItem({ spec }: { spec: (typeof specs)[number] }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center px-2">
      <Icon name={spec.icon} size={50} className="object-contain" />
      <p className="mt-5 text-[40px] leading-none tracking-[0.8px] text-white">
        {spec.value}
      </p>
      <p className="mt-2 text-center text-[20px] leading-snug tracking-[0.4px] text-white/50">
        {spec.label}
      </p>
    </div>
  );
}

export function MeetSkySection() {
  return (
    <SectionShell className="bg-[#000006]">
      <Image
        src={assets.meetSkyBackground}
        alt=""
        fill
        unoptimized
        className="object-cover opacity-100"
        sizes="100vw"
      />

      <Container className="relative z-10 py-16 xl:hidden">
        <div className="text-center">
          <Eyebrow>MEET SKY</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold text-white">
            Small Ring. Powerful <GradientText variant="insights">Insights</GradientText>
          </h2>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {callouts.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-sky-callout/50 bg-[#000719] px-4 py-2 text-sm font-semibold text-white"
            >
              <Icon name={item.icon} size={20} />
              {item.label}
            </span>
          ))}
        </div>
      </Container>

      <DesktopCanvas height={1200} className="z-10">
        <div className="flex h-full flex-col">
          <div className="relative mx-auto min-h-0 w-full max-w-[1440px] flex-1">
            <Image
              src={assets.meetSkyBackground}
              alt=""
              width={1760}
              height={1173}
              unoptimized
              className="absolute left-1/2 top-[72px] -translate-x-1/2 object-contain"
              style={{ width: 1760, height: 1173 }}
              sizes="1760px"
            />
            {callouts.map((item) => (
              <CalloutPill key={item.label} item={item} />
            ))}

            <div className="relative z-10 flex flex-col items-center pt-5 text-center">
              <p className="text-[22px] font-bold uppercase tracking-[0.44px] text-sky-primary">
                MEET SKY
              </p>
              <h2 className="mt-[15px] w-[939px] text-[64px] font-semibold leading-[70px] tracking-[1.28px] text-white">
                Small Ring.
                <br />
                Powerful
                <GradientText variant="insights"> Insights</GradientText>
              </h2>
              <div className="mt-[25px] text-[24px] leading-[26px] tracking-[0.48px] text-white/50">
                <p>Advanced sensors. Intelligent insights.</p>
                <p>A deeper understanding of you, every day.</p>
              </div>
            </div>
          </div>

          <div className="mx-auto mb-[62px] flex min-h-[210px] w-full max-w-[1262px] shrink-0 items-center rounded-[20px] border border-[#4b5563] bg-[rgba(0,7,25,0.5)] px-8 py-10 backdrop-blur-[9px]">
            {specs.map((spec) => (
              <SpecItem key={spec.label} spec={spec} />
            ))}
          </div>
        </div>
      </DesktopCanvas>
    </SectionShell>
  );
}
