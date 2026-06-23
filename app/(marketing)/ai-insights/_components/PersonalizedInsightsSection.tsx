import Image from "next/image"

import { Container, SectionShell } from "@/components/ui/SectionShell"
import { Icon } from "@/components/ui/Icon"
import type { IconName } from "@/lib/icons"
import { Sparkles } from "lucide-react"

type FloatingCard = {
  text: string
  icon: IconName
  cardClass: string
  iconWrapClass: string
}

const LEFT_INSIGHTS: FloatingCard[] = [
  {
    text: "You slept better last night",
    icon: "moon-sleep",
    cardClass: "bg-[#f3ecff]",
    iconWrapClass: "bg-[#e9ddff] text-[#7c3aed]"
  },
  {
    text: "Stress is improving",
    icon: "leaf-fill",
    cardClass: "bg-[#ecfdf3]",
    iconWrapClass: "bg-[#d1fae5] text-[#16a34a]"
  }
]

const RIGHT_ACTIONS: FloatingCard[] = [
  {
    text: "Take a 10-minute walk",
    icon: "running",
    cardClass: "bg-[#fff7ed]",
    iconWrapClass: "bg-[#ffedd5] text-[#ea580c]"
  },
  {
    text: "Stay hydrated",
    icon: "waterdrop",
    cardClass: "bg-[#eff6ff]",
    iconWrapClass: "bg-[#dbeafe] text-[#2563eb]"
  },
  {
    text: "Maintain your bedtime routine",
    icon: "moon-sleep",
    cardClass: "bg-[#f5f3ff]",
    iconWrapClass: "bg-[#ede9fe] text-[#7c3aed]"
  }
]

function FloatingInsightCard ({ card }: { card: FloatingCard }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 shadow-[0_8px_24px_rgba(15,23,42,0.08)] ${card.cardClass}`}
    >
      <span
        className={`flex size-11 shrink-0 items-center justify-center rounded-full ${card.iconWrapClass}`}
      >
        <Icon name={card.icon} size={22} />
      </span>
      <p className="text-sm font-semibold leading-snug text-[#0c2340] md:text-base">
        {card.text}
      </p>
    </div>
  )
}

export function PersonalizedInsightsSection () {
  return (
    <SectionShell
      id="personalized-insights"
      className="bg-white py-14 md:py-20"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-6 xl:gap-x-10">
          <div className="flex flex-col gap-8 lg:gap-10">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <h2 className="text-3xl font-bold leading-tight text-[#0c2340] md:text-4xl lg:text-[42px]">
                  <div className="flex items-center gap-2">
                    <span>Personalized</span>
                    <Sparkles name="star" size={20} className="text-sky-primary" />
                  </div>

                  <span className="text-sky-primary">Just For You</span>
                </h2>
                <span className="flex items-center gap-1">
                  {/* <Icon
                    name="star"
                    size={14}
                    className="text-sky-primary/70"
                  /> */}
                </span>
              </div>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                AI analyzes your daily data and offers simple, practical
                insights that fit your body and lifestyle.
              </p>
            </div>

            <div className="flex flex-col gap-5 lg:gap-10 lg:py-6">
              {LEFT_INSIGHTS.map(card => (
                <FloatingInsightCard key={card.text} card={card} />
              ))}
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[300px] shrink-0 lg:max-w-[320px]">
            <Image
              src="/images/ai-insights/main-mock.png"
              alt="SKY app AI Insights screen showing wellness score and key highlights"
              width={3160}
              height={5000}
              className="h-auto w-full rounded-[2.75rem] "
              sizes="(max-width: 1024px) 280px, 320px"
              priority
            />
          </div>

          <div className="flex flex-col gap-5 lg:gap-10 lg:py-4">
            {RIGHT_ACTIONS.map(card => (
              <FloatingInsightCard key={card.text} card={card} />
            ))}
          </div>
        </div>
      </Container>
    </SectionShell>
  )
}
