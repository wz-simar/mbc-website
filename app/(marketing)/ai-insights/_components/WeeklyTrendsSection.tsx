import { Container, GradientText, SectionShell } from "@/components/ui/SectionShell";

type TrendCard = {
  title: string;
  metric: string;
  subtitle: string;
  accent: string;
  chart: "bars" | "line" | "area" | "steps";
};

const TREND_CARDS: TrendCard[] = [
  {
    title: "Weekly Sleep Pattern",
    metric: "7h 12m",
    subtitle: "Avg. nightly sleep",
    accent: "#0056D2",
    chart: "bars",
  },
  {
    title: "Recovery Trends",
    metric: "82%",
    subtitle: "Weekly average",
    accent: "#22C55E",
    chart: "line",
  },
  {
    title: "Stress Levels",
    metric: "64/100",
    subtitle: "Lower than last week",
    accent: "#9333EA",
    chart: "area",
  },
  {
    title: "Activity Progress",
    metric: "8,245 steps",
    subtitle: "Daily average",
    accent: "#F97316",
    chart: "steps",
  },
];

function MiniChart({ type, accent }: { type: TrendCard["chart"]; accent: string }) {
  if (type === "bars") {
    return (
      <div className="mt-4 flex items-end gap-1.5">
        {[55, 70, 45, 80, 65, 75, 72].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{ height: `${h * 0.5}px`, backgroundColor: `${accent}99` }}
          />
        ))}
      </div>
    );
  }

  if (type === "line") {
    return (
      <svg viewBox="0 0 120 40" className="mt-4 h-10 w-full">
        <polyline
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="0,30 20,25 40,28 60,15 80,20 100,10 120,12"
        />
      </svg>
    );
  }

  if (type === "area") {
    return (
      <svg viewBox="0 0 120 40" className="mt-4 h-10 w-full">
        <polygon
          fill={`${accent}33`}
          points="0,35 20,28 40,32 60,18 80,22 100,12 120,15 120,40 0,40"
        />
        <polyline
          fill="none"
          stroke={accent}
          strokeWidth="2"
          points="0,35 20,28 40,32 60,18 80,22 100,12 120,15"
        />
      </svg>
    );
  }

  return (
    <div className="mt-4 flex items-end gap-1">
      {[30, 50, 40, 70, 55, 85, 60].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-full"
          style={{ height: `${h * 0.4}px`, backgroundColor: `${accent}80` }}
        />
      ))}
    </div>
  );
}

export function WeeklyTrendsSection() {
  return (
    <SectionShell id="weekly-trends" className="bg-white py-10">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Weekly{" "}
              <GradientText variant="insights" className="font-bold">
                Trends
              </GradientText>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              See how your sleep, recovery, stress, and activity evolve over
              time. Spot patterns, celebrate progress, and adjust your routine
              with confidence.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {TREND_CARDS.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-border/50 bg-white p-6 shadow-md"
              >
                <p className="text-sm font-semibold text-muted-foreground">
                  {card.title}
                </p>
                <p
                  className="mt-2 text-2xl font-bold"
                  style={{ color: card.accent }}
                >
                  {card.metric}
                </p>
                <p className="text-xs text-muted-foreground">{card.subtitle}</p>
                <MiniChart type={card.chart} accent={card.accent} />
              </article>
            ))}
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
