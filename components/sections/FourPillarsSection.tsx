import {
  Container,
  DesktopCanvas,
  Eyebrow,
  GradientText,
  SectionShell,
} from "@/components/ui/SectionShell";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { assets } from "@/lib/assets";
import type { IconName } from "@/lib/icons";

type Pillar = {
  number: string;
  title: string;
  numberColor: string;
  borderColor: string;
  bg: string;
  bgColor: string;
  iconCircle: string;
  image: string;
  icon: IconName;
  description: string[];
  fadeImage?: boolean;
  iconSize: number;
};

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Awareness",
    numberColor: "text-sky-primary",
    borderColor: "border-[#1e3659]",
    bg: "bg-[#00040b]",
    bgColor: "#00040b",
    iconCircle: assets.iconCircleBlue,
    image: assets.pillars.awareness,
    icon: "circleDashed",
    description: [
      "SKY Ring tracks your sleep,",
      "recovery, stress and more",
      "to create awareness.",
    ],
    iconSize: 48,
  },
  {
    number: "02",
    title: "Understanding",
    numberColor: "text-sky-primary",
    borderColor: "border-[#1e3659]",
    bg: "bg-[#000207]",
    bgColor: "#000207",
    iconCircle: assets.iconCircleBlue,
    image: assets.pillars.understanding,
    icon: "brain",
    description: [
      "AI turns your data into",
      "meaningful insights and",
      "actionable plans.",
    ],
    fadeImage: true,
    iconSize: 40,
  },
  {
    number: "03",
    title: "Guidance",
    numberColor: "text-[#28c972]",
    borderColor: "border-[#0f2421]",
    bg: "bg-[#000208]",
    bgColor: "#000208",
    iconCircle: assets.iconCircleGreen,
    image: assets.pillars.guidance,
    icon: "leaf",
    description: [
      "Natural health experts guide",
      "you with ancient wisdom and",
      "holistic practices.",
    ],
    fadeImage: true,
    iconSize: 42,
  },
  {
    number: "04",
    title: "Consistency",
    numberColor: "text-[#d2741c]",
    borderColor: "border-[#0f2421]",
    bg: "bg-[#01070d]",
    bgColor: "#01070d",
    iconCircle: assets.iconCircleOrange,
    image: assets.pillars.consistency,
    icon: "community",
    description: [
      "Daily check-ins, reminders and",
      "personalised routines keep you",
      "on track every day.",
    ],
    fadeImage: true,
    iconSize: 48,
  },
];

function PillarCardContent({ pillar }: { pillar: Pillar }) {
  return (
    <div className="relative z-20 flex flex-col items-center px-6 pt-6">
      <p
        className={`self-start text-[20px] font-bold ${pillar.numberColor}`}
      >
        {pillar.number}
      </p>
      <div className="relative mt-[3px] size-[105px]">
        <img
          src={pillar.iconCircle}
          alt=""
          width={105}
          height={105}
          className="absolute left-1/2 top-1/2 size-[105px] -translate-x-1/2 -translate-y-1/2 object-contain"
        />
        <Icon
          name={pillar.icon}
          size={pillar.iconSize}
          className="absolute left-1/2 top-[calc(50%+2.5px)] block -translate-x-1/2 -translate-y-1/2 object-contain"
        />
      </div>
      <h3 className="mt-[20px] text-[25px] text-white">{pillar.title}</h3>
      <div className="mt-[22px] h-px w-[34px] bg-white/20" />
      <div className="mt-6 whitespace-nowrap text-center text-[17.659px] leading-normal text-white/50">
        {pillar.description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

function PillarCardImage({ pillar }: { pillar: Pillar }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-0 h-[304px] overflow-hidden">
      <Image
        src={pillar.image}
        alt=""
        fill
        unoptimized
        className="object-cover object-bottom"
        sizes="300px"
      />
      {pillar.fadeImage && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[152px]"
          style={{
            background: `linear-gradient(to bottom, ${pillar.bgColor} 0%, ${pillar.bgColor} 35%, transparent 100%)`,
          }}
        />
      )}
    </div>
  );
}

function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <article
      className={`relative h-[559px] w-[300px] overflow-hidden rounded-[25px] border ${pillar.borderColor} ${pillar.bg}`}
    >
      <PillarCardImage pillar={pillar} />
      <PillarCardContent pillar={pillar} />
    </article>
  );
}

export function FourPillarsSection() {
  return (
    <SectionShell className="bg-[#000006]">
      <Container className="py-16 xl:hidden">
        <div className="text-center">
          <Eyebrow>ONE ECOSYSTEM | FOUR PILLARS</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-[939px] text-4xl font-semibold leading-tight tracking-[1.28px] text-white md:text-[64px] md:leading-[70px]">
            <GradientText>Awareness.</GradientText> Understanding.
            <br />
            <GradientText>Guidance.</GradientText> Consistency
          </h2>
          <p className="mx-auto mt-6 max-w-[712px] text-lg text-white/50 md:text-[24px] md:leading-[26px]">
            A complete ecosystem that listens, understands and guides you every
            step of the way.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.number} pillar={pillar} />
          ))}
        </div>
      </Container>

      <DesktopCanvas height={1024}>
        <div className="flex h-full flex-col">
          <div className="h-px w-full bg-white/10" />
          <div className="flex flex-col items-center pt-[56px] text-center">
            <p className="whitespace-pre text-[22px] font-bold uppercase tracking-[0.44px] text-sky-primary">
              ONE ECOSYSTEM |  FOUR PILLARS
            </p>
            <h2 className="mt-[30px] w-[939px] text-[64px] leading-[70px] tracking-[1.28px] text-white">
              <GradientText>Awareness.</GradientText>{" "}
              <span className="font-normal">Understanding.</span>
              <br />
              <GradientText>Guidance.</GradientText>{" "}
              <span className="font-normal">Consistency</span>
            </h2>
            <div className="mt-[33px] text-[24px] leading-[26px] tracking-[0.48px] text-white/50">
              <p>A complete ecosystem that listens, understands and guides</p>
              <p>you every step of the way.</p>
            </div>
          </div>
          <div className="mt-[40px] flex justify-center gap-[17px] px-[95px]">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.number} pillar={pillar} />
            ))}
          </div>
        </div>
      </DesktopCanvas>
    </SectionShell>
  );
}
