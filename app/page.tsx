import { HeroSection } from "@/components/sections/HeroSection";
import { FourPillarsSection } from "@/components/sections/FourPillarsSection";
import { MeetSkySection } from "@/components/sections/MeetSkySection";
import { AppDashboardSection } from "@/components/sections/AppDashboardSection";
import { DayWithSkySection } from "@/components/sections/DayWithSkySection";
import { ExpertTeamSection } from "@/components/sections/ExpertTeamSection";
import { FinalCtaFooterSection } from "@/components/sections/FinalCtaFooterSection";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1440px] bg-sky-bg text-white">
      <HeroSection />
      <FourPillarsSection />
      <MeetSkySection />
      <AppDashboardSection />
      <DayWithSkySection />
      <ExpertTeamSection />
      <FinalCtaFooterSection />
    </main>
  );
}
