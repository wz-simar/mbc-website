import { CenterIconsSection } from "./_components/CenterIconsSection";
import { ComfortSection } from "./_components/ComfortSection";
import { HeroSection } from "./_components/HeroSection";
import { PowerfulRingSection } from "./_components/PowerfulRingSection";
import { ServiceSection } from "./_components/ServiceSection";
import { SleepInsightsSection } from "./_components/SleepInsightsSection";
import { TwoImageSection } from "./_components/TwoImageSection";
import { UnderstandBody } from "./_components/UnderstandBody";
import { MobileAppSection } from "./_components/MobileAppSection";
import { FeaturesSection } from "./_components/FeaturesSection";

export default function MeetTheSky() {
  return (
    <>
      <HeroSection />
      <ComfortSection />
      <CenterIconsSection />
      <PowerfulRingSection />
      <SleepInsightsSection />
      <TwoImageSection />
      <UnderstandBody />
      <ServiceSection />
      <MobileAppSection />
      <FeaturesSection />
    </>
  );
}
