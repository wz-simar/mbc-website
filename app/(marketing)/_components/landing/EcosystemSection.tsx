import { Container, SectionShell } from "@/components/ui/SectionShell";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";
import { MoveDown } from "lucide-react";

import { SectionBadge } from "./SectionBadge";

type Pillar = {
  title: string;
  subtitle?: string;
  description: string;
  titleColor: string;
  side: "left" | "right";
  icon: IconName;
  angle: number;
};

const PILLARS: Pillar[] = [
  {
    title: "Our Health Ring — SKY",
    description:
      "Understand what your body is telling you through smart tracking of your sleep, recovery, stress, activity and other important wellness indicators.",
    titleColor: "#0056d2",
    side: "left",
    icon: "scanner",
    angle: (7 * Math.PI) / 6,
  },
  {
    title: "AI Powered Insights",
    description:
      "AI analyzes your data, finds meaningful patterns and gives actionable plans.",
    titleColor: "#40abff",
    side: "right",
    icon: "brain",
    angle: -Math.PI / 6,
  },
  {
    title: "Health Experts",
    subtitle: "(Ayurveda + Naturopathy + Yoga + Lifestyle & Wellness)",
    description:
      // "Daily guidance from our natural health experts who help you understand your body's signals and support you in making sustainable lifestyle changes through natural and holistic approaches.",
      "Guidance from natural health experts to help you understand your body's signal and support you in making sustainable lifestyle changes",
    titleColor: "#0891b2",
    side: "left",
    icon: "flower-lotus-duotone",
    angle: (5 * Math.PI) / 6,
  },
  {
    title: "Accountability & Support",
    description:
      "Daily guidance, motivation and support to help you stay consistent and achieve results.",
    titleColor: "#0891b2",
    side: "right",
    icon: "community",
    angle: Math.PI / 6,
  },
];

const DIAGRAM_SIZE = 420;
const RING_RADIUS = 158;
const DIAGRAM_HEIGHT = DIAGRAM_SIZE + 48;
const CX = DIAGRAM_SIZE / 2;
const CY = DIAGRAM_SIZE / 2;

const DIAGRAM_WIDTH = 420;
const LAYOUT_MAX_WIDTH = 960;
const ICON_BUBBLE_RADIUS = 35;
const HORIZONTAL_CARD_GAP = 40;
const ICON_CARD_GAP = 4;

function getRingNodeTopPercent(angle: number) {
  const y = CY + RING_RADIUS * Math.sin(angle);
  return (y / DIAGRAM_SIZE) * 100;
}

function getIconLayoutLeftPercent(angle: number) {
  const x = CX + RING_RADIUS * Math.cos(angle);
  const diagramOffset = (LAYOUT_MAX_WIDTH - DIAGRAM_WIDTH) / 2;
  const iconX = diagramOffset + (x / DIAGRAM_SIZE) * DIAGRAM_WIDTH;

  return (iconX / LAYOUT_MAX_WIDTH) * 100;
}

function getRingNodePosition(angle: number) {
  const x = CX + RING_RADIUS * Math.cos(angle);

  return {
    left: `${(x / DIAGRAM_SIZE) * 100}%`,
    top: `${getRingNodeTopPercent(angle)}%`,
  };
}

function getPillarCardStyle(pillar: Pillar) {
  const topPercent = getRingNodeTopPercent(pillar.angle);
  const leftPercent = getIconLayoutLeftPercent(pillar.angle);
  const isUpper = Math.sin(pillar.angle) < 0;
  const verticalOffset = isUpper ? "-58%" : "-42%";
  const horizontalOffset =
    pillar.side === "left"
      ? `calc(-100% - ${ICON_BUBBLE_RADIUS + HORIZONTAL_CARD_GAP}px)`
      : `${ICON_BUBBLE_RADIUS + HORIZONTAL_CARD_GAP}px`;

  return {
    left: `${leftPercent}%`,
    top: `${topPercent}%`,
    transform: `translate(${horizontalOffset}, calc(${verticalOffset} + ${ICON_CARD_GAP}px))`,
  };
}

function PillarCard({
  title,
  subtitle,
  description,
  titleColor,
  compact = false,
}: Omit<Pillar, "side" | "icon" | "angle"> & { compact?: boolean }) {
  return (
    <article
      className={
        compact
          ? "rounded-2xl border border-black/10 bg-white p-2.5"
          : "max-w-[248px] rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/6 md:p-4 xl:max-w-[272px] 2xl:max-w-sm"
      }
    >
      <div className={compact ? "mb-1.5" : "mb-2"}>
        <h3
          className={
            compact
              ? "text-xs font-bold leading-snug sm:text-sm"
              : "text-lg font-bold leading-snug md:text-xl"
          }
          style={{ color: titleColor }}
        >
          {title}
        </h3>
        {subtitle ? (
          <p
            className={
              compact
                ? "mt-0.5 text-[10px] font-semibold leading-snug text-emerald-600 sm:text-[11px]"
                : "font-bold"
            }
          >
            {subtitle}
          </p>
        ) : null}
      </div>
      <p
        className={
          compact
            ? "text-[10px] leading-relaxed text-black/80 sm:text-[11px]"
            : "text-sm leading-relaxed text-black md:text-[15px]"
        }
      >
        {description}
      </p>
    </article>
  );
}

function EcosystemDiagram({
  showCards = false,
  hideArrow = false,
  gradientId = "ecosystem-ring-gradient",
}: {
  showCards?: boolean;
  hideArrow?: boolean;
  gradientId?: string;
}) {
  const centerIconSize = showCards ? 52 : 40;
  const nodeIconSize = showCards ? 40 : 30;
  // const nodePadding = showCards ? "p-5" : "p-3";
  const nodePadding = showCards ? "size-24" : "size-16";
  const centerPadding = showCards ? "p-5" : "p-3.5";
  const arrowSize = showCards ? 40 : 28;

  return (
    <div
      className={
        showCards
          ? "relative mx-auto w-full overflow-visible"
          : "relative mx-auto aspect-420/468 w-full max-w-[360px] overflow-visible sm:max-w-[420px]"
      }
      style={
        showCards
          ? { maxWidth: LAYOUT_MAX_WIDTH, height: DIAGRAM_HEIGHT }
          : undefined
      }
    >
      <div
        className={
          showCards
            ? "absolute left-1/2 top-0 -translate-x-1/2"
            : "absolute inset-0"
        }
        style={
          showCards
            ? { width: DIAGRAM_WIDTH, height: DIAGRAM_HEIGHT }
            : undefined
        }
      >
        <svg
          viewBox={`0 0 ${DIAGRAM_SIZE} ${DIAGRAM_SIZE}`}
          className="pointer-events-none size-full"
          aria-hidden
        >
          <defs>
            <linearGradient
              id={gradientId}
              x1="0"
              y1={CY}
              x2={DIAGRAM_SIZE}
              y2={CY}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#40abff" />
              <stop offset="50%" stopColor="#40abff" />
              <stop offset="50%" stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#2dd4bf" />
            </linearGradient>
          </defs>
          <circle
            cx={CX}
            cy={CY}
            r={RING_RADIUS}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="12"
            strokeOpacity="0.45"
          />
          <circle
            cx={CX}
            cy={CY - RING_RADIUS}
            r={5}
            fill="#40abff"
            opacity="0.45"
          />
        </svg>

        <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
          <div
            className={`rounded-full bg-white shadow-md ring-1 ring-black/6 ${centerPadding}`}
          >
            <Icon name="user-rounded" size={centerIconSize} />
          </div>
          {showCards ? (
            <p className="mt-5 whitespace-nowrap text-center text-sm font-bold">
              Your Wellness Journey
            </p>
          ) : null}
        </div>

        {PILLARS.map((pillar) => {
          const position = getRingNodePosition(pillar.angle);

          return (
            <div
              key={pillar.icon}
              className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/6 ${nodePadding}`}
              style={position}
            >
              <Icon name={pillar.icon} size={nodeIconSize} />
            </div>
          );
        })}

        {hideArrow ? null : (
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: `${((CY + RING_RADIUS + 6) / DIAGRAM_SIZE) * 100}%` }}
          >
            <MoveDown
              size={arrowSize}
              className="opacity-70"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(56%) sepia(89%) saturate(450%) hue-rotate(145deg) brightness(95%) contrast(101%)",
              }}
            />
          </div>
        )}
      </div>

      {showCards
        ? PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="absolute"
              style={getPillarCardStyle(pillar)}
            >
              <PillarCard {...pillar} />
            </div>
          ))
        : null}
    </div>
  );
}

function FooterBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full bg-[#E9F9FD] px-5 py-3 shadow-sm ring-1 ring-sky-primary/10 md:gap-3 md:px-6 md:py-3.5">
      <Icon name="heartbeat" size={24} className="text-[#3A6CD6]" />
      <span className="text-sm font-bold uppercase tracking-wide text-sky-primary md:text-base">
        Better Health, Every Day
      </span>
    </div>
  );
}

function MobileArrow() {
  return (
    <MoveDown
      size={32}
      className="opacity-70"
      style={{
        filter:
          "brightness(0) saturate(100%) invert(56%) sepia(89%) saturate(450%) hue-rotate(145deg) brightness(95%) contrast(101%)",
      }}
    />
  );
}

export function EcosystemSection() {
  return (
    <SectionShell id="ecosystem" className="full-bleed !overflow-visible bg-white py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionBadge className="border-sky-primary/15 bg-[#eef6ff]">
            How ByeBimari Works
          </SectionBadge>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#0c2340] md:text-4xl lg:text-[42px]">
            One Ecosystem. Four Powerful Pillars
          </h2>
        </div>

        <div className="flex flex-col items-center max-xl:hidden">
          <EcosystemDiagram
            showCards
            gradientId="ecosystem-ring-gradient-desktop"
          />
          <div className="-mt-2">
            <FooterBadge />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center xl:hidden">
          <div className="relative w-full max-w-xl">
            <div className="relative z-0 grid grid-cols-2 gap-2.5 sm:gap-3">
              {PILLARS.slice(0, 2).map((pillar) => (
                <PillarCard key={pillar.title} compact {...pillar} />
              ))}
            </div>

            <div className="pointer-events-none relative z-10 -my-14 sm:-my-16">
              <EcosystemDiagram
                hideArrow
                gradientId="ecosystem-ring-gradient-mobile"
              />
            </div>

            <div className="relative z-0 grid grid-cols-2 gap-2.5 sm:gap-3">
              {PILLARS.slice(2, 4).map((pillar) => (
                <PillarCard key={pillar.title} compact {...pillar} />
              ))}
            </div>

            <div className="mt-5 flex flex-col items-center gap-4">
              <MobileArrow />
              <FooterBadge />
            </div>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
