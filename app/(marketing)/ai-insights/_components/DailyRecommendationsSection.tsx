import Image from "next/image";

import { Container, GradientText, SectionShell } from "@/components/ui/SectionShell";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";

type Recommendation = {
  title: string;
  tip: string;
  icon: IconName;
  accent: string;
  iconCircle: string;
};

const RECOMMENDATIONS: Recommendation[] = [
  {
    title: "Better Sleep",
    tip: "Dim lights 30 min before bed for deeper rest.",
    icon: "moon-sleep",
    accent: "#0056D2",
    iconCircle: "/images/sky/icon-circle-blue.svg",
  },
  {
    title: "Mindful Eating",
    tip: "Eat your largest meal at lunch for better digestion.",
    icon: "food-apple",
    accent: "#22C55E",
    iconCircle: "/images/sky/icon-circle-green.svg",
  },
  {
    title: "Stress Balance",
    tip: "Try 5 minutes of box breathing after lunch.",
    icon: "stress",
    accent: "#9333EA",
    iconCircle: "/images/sky/icon-circle-blue.svg",
  },
  {
    title: "Daily Movement",
    tip: "A 10-minute walk after meals aids recovery.",
    icon: "running",
    accent: "#F97316",
    iconCircle: "/images/sky/icon-circle-orange.svg",
  },
  {
    title: "Hydration",
    tip: "Drink a glass of water first thing in the morning.",
    icon: "waterdrop",
    accent: "#14B8A6",
    iconCircle: "/images/sky/icon-circle-green.svg",
  },
];

export function DailyRecommendationsSection() {
  return (
    <SectionShell
      id="daily-recommendations"
      className="bg-gradient-to-b from-[#f0f8ff] to-white py-14 md:py-20"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Daily{" "}
              <GradientText variant="insights" className="font-bold">
                Recommendations
              </GradientText>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Actionable tips based on your latest data — small changes that
              compound into lasting wellness improvements.
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {RECOMMENDATIONS.map((item) => (
              <article
                key={item.title}
                className="flex w-[180px] shrink-0 flex-col rounded-2xl border border-border/50 bg-white p-5 shadow-md md:w-[200px]"
              >
                <div className="relative mb-4 size-14 bg-sky-primary/10 rounded-full p-2">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name={item.icon} size={22} />
                  </div>
                </div>
                <h3
                  className="text-base font-bold"
                  style={{ color: item.accent }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.tip}
                </p>
                <div
                  className="mt-4 h-1 w-full rounded-full"
                  style={{ backgroundColor: item.accent }}
                />
              </article>
            ))}
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
