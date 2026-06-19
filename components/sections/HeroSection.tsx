import { assets } from "@/lib/assets";
import {
  Container,
  DesktopCanvas,
  Eyebrow,
  SectionShell,
} from "@/components/ui/SectionShell";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

export function HeroSection() {
  return (
    <SectionShell className="bg-sky-bg">
      {/* Mobile / tablet background */}
      <div className="absolute inset-0 xl:hidden">
        <Image
          src={assets.heroBackground}
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-[70%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000207] via-[#000207]/90 to-transparent" />
      </div>

      {/* Mobile / tablet content */}
      <Container className="relative z-10 flex min-h-[100svh] flex-col pt-10 pb-16 xl:hidden">
        <Image
          src={assets.logo}
          alt="SKY"
          width={131}
          height={131}
          unoptimized
          className="h-[80px] w-[80px] object-contain md:h-[131px] md:w-[131px]"
          style={{ width: "auto", height: "auto" }}
        />
        <div className="mt-auto max-w-[617px]">
          <Eyebrow>The Future of Wellness</Eyebrow>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[1.28px] text-white md:text-[64px] md:leading-[70px]">
            Your Body Has
            <br />
            Been Talking to You
          </h1>
          <p className="mt-6 text-2xl font-semibold tracking-[0.64px] text-sky-light md:text-[32px] md:leading-[70px]">
            We&apos;re here to help you listen
          </p>
          <p className="mt-6 text-lg leading-[26px] tracking-[0.4px] text-white/50">
            SKY is more than a smart ring. It&apos;s a complete wellness
            ecosystem that combines smart tracking. AI intelligence, ancient
            wisdom and human expertise to help you live a healthier, balanced
            life.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="inline-flex h-[63px] min-w-[240px] cursor-pointer items-center justify-center gap-3 rounded-full bg-sky-primary px-8 text-base font-semibold tracking-[0.32px] text-white transition-colors duration-200 hover:brightness-90"
            >
              Begin Your Journey
              <Icon
                name="arrow"
                size={32}
                className="object-contain"
                style={{ width: 32, height: 16 }}
              />
            </button>
            <button
              type="button"
              className="inline-flex h-[63px] w-[164px] cursor-pointer items-center justify-center gap-2 rounded-full border border-white text-base font-semibold tracking-[0.32px] text-white transition-colors duration-200 hover:border-white/80 hover:bg-white/10"
            >
              <Icon name="play" size={24} />
              Play Video
            </button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-4">
              {assets.avatars.map((avatar, index) => (
                <Image
                  key={avatar}
                  src={avatar}
                  alt=""
                  width={61}
                  height={61}
                  unoptimized
                  className="h-[50px] w-[50px] rounded-full border-2 border-sky-bg object-cover md:h-[61px] md:w-[61px]"
                  style={{
                    width: "auto",
                    height: "auto",
                    zIndex: assets.avatars.length - index,
                  }}
                />
              ))}
            </div>
            <div>
              <p className="text-4xl font-semibold tracking-[0.72px] text-white">
                10K+
              </p>
              <p className="max-w-[179px] text-base tracking-[0.32px] text-white/50">
                People already on their wellness Jouney
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Desktop — Figma Desktop-5 (1440×1024) */}
      <DesktopCanvas height={1024} className="z-10">
        <Image
          src={assets.heroBackground}
          alt=""
          width={1476}
          height={1024}
          priority
          unoptimized
          className="absolute left-[255px] top-0 object-cover"
          style={{ width: 1476, height: 1024 }}
          sizes="1476px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000207] to-[rgba(0,2,7,0)]" />

        <div className="relative flex h-full flex-col pl-[76px]">
          <Image
            src={assets.logo}
            alt="SKY"
            width={131}
            height={131}
            unoptimized
            className="mt-[44px] object-contain"
            style={{ width: 131, height: 131 }}
          />
          <div className="ml-[22px] mt-[55px] flex max-w-[617px] flex-col">
            <p className="text-[22px] font-bold uppercase tracking-[0.44px] text-sky-primary">
              The Future of Wellness
            </p>
            <h1 className="mt-[27px] w-[480px] text-[64px] font-semibold leading-[70px] tracking-[1.28px] text-white">
              Your Body Has
              <br />
              Been Talking
              <br />
              to You
            </h1>
            <p className="mt-[14px] w-[480px] text-[32px] font-semibold leading-[70px] tracking-[0.64px] text-sky-light">
              We&apos;re here to help you listen
            </p>
            <div className="mt-[24px] w-[617px] text-[20px] leading-[26px] tracking-[0.4px] text-white/50">
              <p>SKY is more than a smart ring. It&apos;s a complete</p>
              <p>wellness ecosystem that combines smart tracking.</p>
              <p>AI intelligence, ancient wisdom and human</p>
              <p>expertise to help you live a healthier, balanced life.</p>
            </div>
            <div className="mt-[29px] flex items-center gap-[19px]">
              <button
                type="button"
                className="inline-flex h-[63px] w-[240px] cursor-pointer items-center justify-center gap-3 rounded-full bg-sky-primary text-[16px] font-semibold leading-[26px] tracking-[0.32px] text-white transition-colors duration-200 hover:brightness-90"
              >
                Begin Your Journey
                <Icon
                  name="arrow"
                  size={32}
                  className="object-contain"
                  style={{ width: 32, height: 16 }}
                />
              </button>
              <button
                type="button"
                className="inline-flex h-[63px] w-[164px] cursor-pointer items-center justify-center gap-2 rounded-full border border-white text-[16px] font-semibold leading-[26px] tracking-[0.32px] text-white transition-colors duration-200 hover:border-white/80 hover:bg-white/10"
              >
                <Icon name="play" size={24} />
                Play Video
              </button>
            </div>
            <div className="mt-[50px] flex items-center gap-4">
              <div className="flex -space-x-[23px]">
                {assets.avatars.map((avatar, index) => (
                  <Image
                    key={avatar}
                    src={avatar}
                    alt=""
                    width={61}
                    height={61}
                    unoptimized
                    className="rounded-full object-cover"
                    style={{
                      zIndex: assets.avatars.length - index,
                      width: 61,
                      height: 61,
                    }}
                  />
                ))}
              </div>
              <p className="text-[36px] font-semibold leading-[26px] tracking-[0.72px] text-white">
                10K+
              </p>
              <p className="w-[179px] text-[16px] leading-[18px] tracking-[0.32px] text-white/50">
                People already on their wellness Jouney
              </p>
            </div>
          </div>
        </div>
      </DesktopCanvas>
    </SectionShell>
  );
}
