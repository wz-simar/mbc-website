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

const metrics = [
  { label: "Sleep Score", value: "84", status: "Good", color: "text-[#62ebbb]" },
  { label: "Recovery", value: "92", status: "Optimal", color: "text-[#62ebbb]" },
  { label: "Stress", value: "21", status: "Low", color: "text-[#225b88]" },
  { label: "Readiness", value: "87", status: "Ready", color: "text-[#32f2b6]" },
];

const sideCards: {
  title: string;
  body: string;
  icon: IconName;
}[] = [
  {
    title: "AI Insight",
    body: "Your sleep quality improved by 12% compared to yesterday.",
    icon: "powerSleep",
  },
  {
    title: "Expert Advice",
    body: "Your sleep quality improved by 12% compared to yesterday.",
    icon: "personArmsUp",
  },
  {
    title: "Daily Reminder",
    body: "Your sleep quality improved by 12% compared to yesterday.",
    icon: "bell",
  },
];

const barHeights = [
  [40, 55, 48, 70, 62, 80],
  [50, 60, 55, 75, 65, 85],
  [30, 35, 28, 40, 32, 38],
  [45, 58, 52, 68, 60, 78],
];

function MetricCard({
  metric,
  barIndex,
}: {
  metric: (typeof metrics)[number];
  barIndex: number;
}) {
  return (
    <div className="flex h-[193px] w-[145px] flex-col rounded-[16px] border border-white/10 bg-[rgba(5,11,25,0.5)] p-[14px]">
      <p className="text-[16px] font-medium tracking-[0.32px] text-white/50">
        {metric.label}
      </p>
      <p className="mt-[19px] text-[32px] font-bold tracking-[0.65px] text-white">
        {metric.value}
      </p>
      <p
        className={`mt-3 text-[16px] font-medium tracking-[0.32px] ${metric.color}`}
      >
        {metric.status}
      </p>
      <div className="mt-auto flex h-[40px] items-end gap-[3px]">
        {barHeights[barIndex].map((height, index) => (
          <span
            key={`${metric.label}-${index}`}
            className="w-[6px] rounded-sm bg-sky-primary/70"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function SideCard({ card }: { card: (typeof sideCards)[number] }) {
  return (
    <div className="flex h-[130px] w-[302px] gap-4 rounded-[16px] border border-white/10 bg-[rgba(5,11,25,0.5)] px-[17px] py-[21px]">
      <div className="flex size-[64px] shrink-0 items-center justify-center self-center rounded-full bg-sky-primary/20">
        <Icon name={card.icon} size={38} className="object-contain" />
      </div>
      <div>
        <h3 className="text-[20px] font-bold text-white">{card.title}</h3>
        <p className="mt-1 w-[197px] text-[17.659px] leading-normal text-white/50">
          {card.body}
        </p>
      </div>
    </div>
  );
}

export function AppDashboardSection() {
  return (
    <SectionShell className="bg-[#000004]">
      <Image
        src={assets.dashboardBackground}
        alt=""
        fill
        unoptimized
        className="object-cover object-[48%_45%] xl:hidden"
        sizes="100vw"
      />

      <Container className="relative z-10 py-16 xl:hidden">
        <Eyebrow>REAL TIME INSIGHTS</Eyebrow>
        <h2 className="mt-4 text-4xl text-white">
          Understand your Body Like <GradientText>Never Before</GradientText>
        </h2>
      </Container>

      <Image
        src={assets.dashboardBackground}
        alt=""
        fill
        unoptimized
        className="absolute inset-0 hidden object-cover object-[48%_45%] xl:block"
        sizes="100vw"
      />

      <DesktopCanvas height={852} className="relative z-10">
        <div className="flex h-full pr-[10px] pl-[75px]">
          <div className="flex w-[586px] flex-col">
            <div className="pt-[106px]">
              <p className="text-[22px] font-bold uppercase tracking-[0.44px] text-sky-primary">
                REAL TIME INSIGHTS
              </p>
              <h2 className="mt-4 w-[568px] text-[48px] leading-[57px] tracking-[0.96px] text-white">
                Understand your Body
                <br />
                Like <GradientText>Never Before</GradientText>
              </h2>
            </div>
            <div className="mt-[136px] flex gap-[11px]">
              {metrics.map((metric, index) => (
                <MetricCard key={metric.label} metric={metric} barIndex={index} />
              ))}
            </div>
            <p className="mt-auto pb-[32px] w-[547px] text-[20px] leading-[26px] tracking-[0.4px] text-[rgba(225,253,255,0.5)]">
              Advanced tracking and AI intelligence give you clarity on what your
              body needs, when it needs it.
            </p>
          </div>

          <div className="flex flex-1 items-end justify-center pb-[65px]">
            <Image
              src={assets.phoneMockup}
              alt="SKY app dashboard"
              width={429}
              height={286}
              unoptimized
              className="object-contain"
              style={{ width: 429, height: 286 }}
            />
          </div>

          <div className="flex w-[302px] flex-col gap-[17px] pt-[188px]">
            {sideCards.map((card) => (
              <SideCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </DesktopCanvas>
    </SectionShell>
  );
}
