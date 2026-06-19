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

const timelineItems: {
  time: string;
  title: string;
  score: string;
  status: string;
  description: string;
  cta: string;
  image: string;
  imageLeft: boolean;
  icon: IconName;
}[] = [
  {
    time: "08:00 AM",
    title: "Wake Up",
    score: "Sleep Score: 94",
    status: "• Good",
    description:
      "SKY analyzes your sleep, recovery and readiness, so you start the day informed.",
    cta: "VIEW SLEEP SCORE",
    image: assets.timeline[0],
    imageLeft: true,
    icon: "sunHigh",
  },
  {
    time: "10:00 AM",
    title: "Morning Insight",
    score: "Insight Score: 92",
    status: "• Good",
    description:
      "AI creates personalized recommendations based on your body's needs.",
    cta: "VIEW READINESS",
    image: assets.timeline[1],
    imageLeft: false,
    icon: "waveSaw",
  },
  {
    time: "01:00 PM",
    title: "Food Scan",
    score: "Nutrition Score: 94",
    status: "• Good",
    description:
      "Scan your food and get instant nutrition insights on meals and drinks.",
    cta: "SCAN YOUR MEAL",
    image: assets.timeline[2],
    imageLeft: true,
    icon: "foodApple",
  },
  {
    time: "05:00 PM",
    title: "Stay Active",
    score: "Activity Score: 92",
    status: "• Good",
    description: "Track your activity, manage stress and improve recovery.",
    cta: "VIEW ACTIVITY",
    image: assets.timeline[3],
    imageLeft: false,
    icon: "personRun",
  },
  {
    time: "07:00 PM",
    title: "Expert Guidance",
    score: "Talk to an Expert",
    status: "",
    description: "Get advice from health experts to take the right steps.",
    cta: "TALK TO EXPERT",
    image: assets.timeline[4],
    imageLeft: true,
    icon: "userRounded",
  },
  {
    time: "10:00 PM",
    title: "Rest & Recover",
    score: "Recovery Score: 92",
    status: "• Good",
    description:
      "End the day with better sleep insights and recovery analysis.",
    cta: "PREPARE FOR SLEEP",
    image: assets.timeline[5],
    imageLeft: false,
    icon: "moonSleep",
  },
];

const timelineGaps = [86, 38, 47, 38, 29, 38];

function TimelineCard({ item }: { item: (typeof timelineItems)[number] }) {
  return (
    <div className="flex items-start gap-[29px]">
      <div className="flex w-[106px] shrink-0 flex-col items-center">
        <span className="flex h-[47px] w-full items-center justify-center rounded-full border border-sky-callout/25 bg-[#00040d] text-[14px] text-white">
          {item.time}
        </span>
        <span className="mt-[27px] flex h-[63px] w-[63px] items-center justify-center rounded-full border border-sky-callout/50 bg-[#00040d]">
          <Icon name={item.icon} size={32} className="object-contain" />
        </span>
      </div>
      <article className="h-[295px] w-[1151px] overflow-hidden rounded-[16px] border border-white/10 bg-[rgba(5,8,13,0.5)]">
        <div
          className={`grid h-full grid-cols-2 ${item.imageLeft ? "" : "[&>*:first-child]:order-2"}`}
        >
          <div className="relative min-h-[295px]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              unoptimized
              className="object-cover"
              sizes="564px"
            />
          </div>
          <div className="flex flex-col justify-center px-10 py-8">
            <h3 className="text-[40px] font-medium text-white">{item.title}</h3>
            <p className="mt-4 max-w-[443px] text-[16px] leading-relaxed text-white/50">
              {item.description}
            </p>
            {item.status ? (
              <p className="mt-4 text-[16px] text-white">
                {item.score}{" "}
                <span className="text-[#28c972]">{item.status}</span>
              </p>
            ) : (
              <p className="mt-4 text-[16px] text-white">{item.score}</p>
            )}
            <button
              type="button"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-[#0b0c10] px-6 py-3 text-[14px] text-white"
            >
              {item.cta}
              {item.title === "Expert Guidance" && (
                <Icon name="arrowRight" size={16} className="object-contain" />
              )}
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export function DayWithSkySection() {
  return (
    <SectionShell className="bg-gradient-to-t from-[#00010b] to-[#000004]">
      <Container className="py-16 xl:hidden">
        <Eyebrow>A DAY IN YOUR LIFE WITH SKY</Eyebrow>
        <h2 className="mt-4 text-4xl text-white">
          A Day with <GradientText>SKY</GradientText>
        </h2>
      </Container>

      <DesktopCanvas height={2350}>
        <div className="absolute left-[114px] top-[69px] h-[1768px] w-px bg-sky-primary/30" />

        <div className="relative flex flex-col items-center pt-[69px]">
          <p className="text-[22px] font-bold uppercase tracking-[0.44px] text-sky-primary">
            A DAY IN YOUR LIFE WITH SKY
          </p>
          <h2 className="mt-4 text-[64px] leading-[57px] tracking-[1.28px] text-white">
            A Day with <GradientText>SKY</GradientText>
          </h2>
          <p className="mt-5 w-[857px] text-center text-[24px] tracking-[0.48px] text-[rgba(225,253,255,0.5)]">
            From waking up to winding down, SKY is with you every step of the way.
          </p>

          <div className="mt-[86px] flex w-full flex-col pl-[58px]">
            {timelineItems.map((item, index) => (
              <div
                key={item.title}
                style={{ marginTop: index === 0 ? 0 : timelineGaps[index] }}
              >
                <TimelineCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </DesktopCanvas>
    </SectionShell>
  );
}
