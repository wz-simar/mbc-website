import Image from "next/image"

import { Container, SectionShell } from "@/components/ui/SectionShell"

import { SectionHeading } from "./SectionHeading"

const SHOWCASE_PANELS = [
  {
    src: "/images/ai-insights/mock1.png",
    alt: "Sleep Quality and Recovery insights from the SKY app",
    width: 1330,
    height: 1183
  },
  {
    src: "/images/ai-insights/mock2.png",
    alt: "Stress and Readiness insights from the SKY app",
    width: 1369,
    height: 1149
  },
  {
    src: "/images/ai-insights/mock3.png",
    alt: "Activity and Heart Health insights from the SKY app",
    width: 1343,
    height: 1171
  }
] as const

export function FeatureShowcaseSection () {
  return (
    <SectionShell
      id="feature-showcase"
      className="full-bleed bg-white py-14 md:py-20"
    >
      <Container>
        <SectionHeading
          className="mb-10 md:mb-14 [&_h2]:text-base [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-[0.18em] [&_h2]:text-sky-primary md:[&_h2]:text-lg"
        >
          AI Insights From SKY App
        </SectionHeading>

        <div className="flex overflow-x-auto pb-2 [-ms-overflow-style:none] scrollbar-none lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {SHOWCASE_PANELS.map(panel => (
            <div
              key={panel.src}
              className="w-[min(100%,340px)] shrink-0 lg:w-auto lg:min-w-0"
            >
              <Image
                src={panel.src}
                alt={panel.alt}
                width={panel.width}
                height={panel.height}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 85vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Container>
    </SectionShell>
  )
}
