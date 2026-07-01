import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { BarChart3, Check, Compass, Heart, UserRound } from "lucide-react";

import { Container, SectionShell } from "@/components/ui/SectionShell";
import { Icon } from "@/components/ui/Icon";

type CardVisualType = "ring" | "ai" | "experts" | "support";

type CardTheme = {
  bg: string;
  number: string;
  heading: string;
  button: string;
  buttonHover: string;
};

type JourneyCard = {
  number: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  visual: CardVisualType;
  theme: CardTheme;
  arrow?: boolean;
};

const CARDS: JourneyCard[] = [
  {
    number: "01",
    title: "Discover SKY",
    description:
      "Our smart ring tracks what matters most so you can understand your body better.",
    cta: "Discover SKY",
    href: "/meet-the-sky",
    visual: "ring",
    theme: {
      bg: "#eef5ff",
      number: "#0056d2",
      heading: "#0c2340",
      button: "#0056d2",
      buttonHover: "#0044a8",
    },
    arrow: true,
  },
  {
    number: "02",
    title: "AI Powered Insights",
    description:
      "AI turns your data into clear insights and personalized action plans.",
    cta: "See Insights",
    href: "/ai-insights",
    visual: "ai",
    theme: {
      bg: "#e8fbfb",
      number: "#06b6d4",
      heading: "#0891b2",
      button: "#0c2340",
      buttonHover: "#001a5c",
    },
    arrow: true,
  },
  {
    number: "03",
    title: "Natural Health Experts",
    description:
      "Get Daily Guidance from our experienced natural health experts (Ayurvedic + Naturopathy + Yoga + Lifestyle & Wellness)",
    cta: "Meet Experts",
    href: "/health-experts",
    visual: "experts",
    theme: {
      bg: "#f3f0ff",
      number: "#22c55e",
      heading: "#16a34a",
      button: "#22c55e",
      buttonHover: "#16a34a",
    },
    arrow: true,
  },
  {
    number: "04",
    title: "Daily Guidance & Accountability",
    description:
      "Real transformation requires more than recommendations - it requires consistent support.",
    cta: "Our Approach",
    href: "/discover-our-approach",
    visual: "support",
    theme: {
      bg: "#ecfdf5",
      number: "#0d9488",
      heading: "#0f766e",
      button: "#0c2340",
      buttonHover: "#001a5c",
    },
    arrow: false,
  },
];

const RING_FEATURES = [
  "Sleep",
  "Recovery",
  "Stress",
  "Activity",
  "And more...",
] as const;

const SUPPORT_ITEMS = [
  { label: "Daily Guidance", icon: Compass },
  { label: "Track Progress", icon: BarChart3 },
  { label: "Stay Accountable", icon: UserRound },
  { label: "Build Healthy Habits", icon: Heart },
] as const;

function RingVisual() {
  return (
    <div className="flex h-full flex-col">
      {/* Rings */}
      <div className="relative mx-auto h-30 w-full">
        <Image
          src="/images/sky/cta-ring.png"
          alt=""
          width={324}
          height={334}
          className="absolute left-[0%] top-2 w-[76%] object-contain drop-shadow-md brightness-90 contrast-125"
        />

        <Image
          src="/images/sky/cta-ring.png"
          alt=""
          width={324}
          height={334}
          className="absolute right-[0%] top-0 w-[76%] object-contain drop-shadow-lg hue-rotate-[35deg] saturate-150"
        />
      </div>

      {/* Features */}
      <ul className="mt-8 sm:mt-4 grid grid-cols-2 gap-x-5 gap-y-3">
        {RING_FEATURES.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0056d2]/10">
              <Check className="size-3 stroke-[3] text-[#0056d2]" />
            </span>

            <span className="text-sm font-medium text-[#334155]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AiInsightsVisual() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
      <p className="text-xs font-medium text-[#64748b]">Insights for You</p>
      <p className="mt-1 text-sm font-semibold leading-snug text-[#0c2340]">
        You slept better last night
      </p>

      <div className="mt-3 flex h-30 items-end gap-1.5">
        {[38, 52, 44, 68, 58, 72, 64].map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-sm bg-[#0056d2]/80"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      {/* <div className="mt-3 rounded-xl bg-[#f8fafc] px-3 py-2.5">
        <p className="text-xs font-medium text-[#475569]">Stress is improving</p>
        <svg viewBox="0 0 120 28" className="mt-1.5 h-7 w-full" aria-hidden>
          <polyline
            fill="none"
            stroke="#22c55e"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="0,22 18,20 36,18 54,14 72,12 90,8 108,6 120,4"
          />
        </svg>
      </div> */}
    </div>
  );
}

function ExpertsVisual() {
  const experts = [
    "/images/sky/expert-secondary-0.png",
    "/images/sky/expert-secondary-1.png",
    "/images/sky/expert-secondary-2.png",
    "/images/sky/expert-featured.png",
  ] as const;

  return (
    <div className="mx-auto grid w-full max-w-[220px] grid-cols-2 gap-3">
      {experts.map((src) => (
        <div
          key={src}
          className="relative aspect-square overflow-hidden rounded-full ring-2 ring-white shadow-md"
        >
          <Image src={src} alt="" fill className="object-cover" sizes="85px" />
        </div>
      ))}
    </div>
  );
}

function SupportVisual() {
  return (
    <ul className="flex flex-col gap-3">
      {SUPPORT_ITEMS.map(({ label, icon: ItemIcon }) => (
        <li key={label} className="flex items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0d9488]/12 ring-1 ring-[#0d9488]/20">
            <ItemIcon className="size-4 stroke-[2] text-[#0d9488]" />
          </span>
          <span className="text-sm font-medium text-[#334155]">{label}</span>
        </li>
      ))}
    </ul>
  );
}

function CardVisual({ type }: { type: CardVisualType }) {
  switch (type) {
    case "ring":
      return <RingVisual />;
    case "ai":
      return <AiInsightsVisual />;
    case "experts":
      return <ExpertsVisual />;
    case "support":
      return <SupportVisual />;
  }
}

function CardButton({
  href,
  label,
  theme,
  arrow = true,
}: {
  href: string;
  label: string;
  theme: CardTheme;
  arrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--btn-bg)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--btn-hover)] md:text-base"
      style={
        {
          "--btn-bg": theme.button,
          "--btn-hover": theme.buttonHover,
        } as CSSProperties
      }
    >
      {label}
      {arrow ? (
        <Icon name="arrow-right" size={16} className="brightness-0 invert" />
      ) : null}
    </Link>
  );
}

export function JourneyCardsSection() {
  return (
    <SectionShell
      id="journey"
      className="full-bleed bg-[#f7faff] py-16 md:py-24"
    >
      <Container>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {CARDS.map((card) => (
            <article
              key={card.number}
              className="flex flex-col rounded-3xl p-8"
              style={{ backgroundColor: card.theme.bg }}
            >
              <span
                className="text-2xl font-bold"
                style={{ color: card.theme.number }}
              >
                {card.number}
              </span>

              <h3
                className="mt-3 text-xl font-bold leading-snug"
                style={{ color: card.theme.heading }}
              >
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#64748b] md:text-[15px]">
                {card.description}
              </p>

              <div className="my-6 min-h-[180px] flex-1">
                <CardVisual type={card.visual} />
              </div>

              <CardButton
                href={card.href}
                label={card.cta}
                theme={card.theme}
                arrow={card.arrow}
              />
            </article>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
