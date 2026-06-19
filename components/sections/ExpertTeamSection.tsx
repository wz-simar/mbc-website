import { assets } from "@/lib/assets";
import {
  Container,
  DesktopCanvas,
  Eyebrow,
  GradientText,
  SectionShell,
} from "@/components/ui/SectionShell";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";

const secondaryExperts = [
  {
    name: "Dr. Rohan Mehta",
    role: ["Naturopathy &", "Holistic Nutrition"],
    experience: "10+ Years Experience",
    tagline: "Holistic Healing through nature",
    badge: "AYURVEDA EXPERT",
    badgeIcon: "leaf" as IconName,
    image: assets.experts.secondary[0],
  },
  {
    name: "Yogacharya Kavya",
    role: ["Yoga & Meditation", "Specialist"],
    experience: "8+ Years Experience",
    tagline: "Balance, Strength and Inner Peace",
    badge: "YOGA & WELLNESS EXPERT",
    badgeIcon: "yoga" as IconName,
    image: assets.experts.secondary[1],
  },
  {
    name: "Neha Verma",
    role: ["Integrative Wellness", "Coach"],
    experience: "7+ Years Experience",
    tagline: "Sustainable habits for a better you",
    badge: "WELLNESS COACH",
    badgeIcon: "heart" as IconName,
    image: assets.experts.secondary[2],
  },
];

const stats: {
  value: string;
  title: string;
  subtitle: string;
  icon: IconName;
}[] = [
  {
    value: "15+",
    title: "Years of Experience",
    subtitle: "Across Disciplines",
    icon: "shieldCheck",
  },
  {
    value: "5000+",
    title: "Happy Consultations",
    subtitle: "Transforming Lives",
    icon: "community",
  },
  {
    value: "4",
    title: "Ancient Disciplines",
    subtitle: "Unified Approach",
    icon: "flowerLotus",
  },
  {
    value: "1",
    title: "Your Wellness Journey",
    subtitle: "Personalized for You",
    icon: "hearts",
  },
];

function FeaturedBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex h-9 items-center gap-2 rounded-full border border-sky-callout/25 bg-gradient-to-r from-[#070809] to-[#1c569f] pl-3 pr-4">
      <Icon name="flowerLotusDuotone" size={24} className="shrink-0 object-contain" />
      <span className="text-[14px] tracking-[0.28px] text-white">{label}</span>
    </div>
  );
}

function SecondaryBadge({
  label,
  icon,
}: {
  label: string;
  icon: IconName;
}) {
  return (
    <div className="inline-flex h-[22px] items-center gap-1.5 rounded-full border border-sky-callout/25 bg-[#091722] px-2.5">
      <Icon name={icon} size={15} className="shrink-0 object-contain" />
      <span className="text-[9px] font-bold uppercase tracking-[0.17px] text-[#4285f3]">
        {label}
      </span>
    </div>
  );
}

function FeaturedExpertCard() {
  return (
    <article className="relative h-[504px] w-[697px] overflow-hidden rounded-[20px] border border-sky-callout/20 bg-[#0a0f18]">
      <Image
        src={assets.experts.featured}
        alt="Dr. Ananya Sharma"
        width={711}
        height={474}
        unoptimized
        className="absolute z-0 object-cover"
        style={{ left: -7, top: -20, width: 711, height: 474 }}
        sizes="697px"
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#0a0f18]/95 via-[#0a0f18]/55 to-transparent" />

      <div className="relative z-10 flex h-full max-w-[55%] flex-col px-[45px] pt-8 pb-[18px]">
        <FeaturedBadge label="AYURVEDA EXPERT" />
        <h3 className="mt-[5px] text-[27px] font-medium leading-[69px] tracking-[0.54px] text-white">
          Dr. Ananya Sharma
        </h3>
        <p className="text-[16px] leading-[21px] tracking-[0.32px] text-[rgba(225,253,255,0.5)]">
          B.A.M.S (Ayurveda)
          <br />
          15+ Years Experience
        </p>
        <div className="mt-[20px] h-px w-[44px] bg-white/20" />
        <div className="mt-[22px]">
          <span className=" font-serif text-[70px] leading-none text-sky-primary">
            &ldquo;
          </span>
          <p className=" mb-2 text-[14px] italic tracking-[0.28px] text-[#e1fdff]">
            True healing begins with
            <br />
            understanding your body,
            <br />
            mind and lifestyle.
          </p>
        </div>

        <div className="mt-auto pt-6">
          <div
            className="flex h-[83px] w-[470px] shrink-0 items-center rounded-[20px] border border-[#4b5563] px-6 backdrop-blur-md"
            style={{
              background:
                "linear-gradient(-81deg, rgba(0, 7, 25, 0.5) 2%, rgba(0, 16, 57, 0.5) 100%)",
            }}
          >
            <div className="flex flex-1 items-center gap-4">
              <Icon name="community" size={35} className="shrink-0 object-contain" />
              <div>
                <p className="text-[20px] font-medium leading-none text-white">5000+</p>
                <p className="mt-1 text-[14px] text-[rgba(225,253,255,0.5)]">Consultations</p>
              </div>
            </div>
            <div className="mx-4 h-[45px] w-px bg-[#4b5563]" />
            <div className="flex flex-1 items-center gap-4">
              <Icon name="star" size={31} className="shrink-0 object-contain" />
              <div>
                <p className="text-[20px] font-medium leading-none text-white">4.9/5</p>
                <p className="mt-1 text-[14px] text-[rgba(225,253,255,0.5)]">Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function SecondaryExpertCard({
  expert,
}: {
  expert: (typeof secondaryExperts)[number];
}) {
  return (
    <article className="relative h-[269px] w-[430px] overflow-hidden rounded-xl border border-sky-callout/20 bg-[#0a0f18]">
      <Image
        src={expert.image}
        alt={expert.name}
        width={439}
        height={293}
        unoptimized
        className="absolute z-0 object-cover"
        style={{ left: -4, top: -12, width: 439, height: 293 }}
        sizes="430px"
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-transparent via-[#0a0f18]/20 to-[#0a0f18]/85" />

      <div className="relative z-10 ml-auto flex h-full w-[45%] flex-col justify-between py-[15px] pr-4 pl-2">
        <div>
          <SecondaryBadge label={expert.badge} icon={expert.badgeIcon} />
          <h3 className="mt-[5px] text-[16.5px] font-medium leading-tight tracking-[0.33px] text-white">
            {expert.name}
          </h3>
          <p className="mt-[11px] text-[11.7px] leading-[15px] tracking-[0.23px] text-[rgba(225,253,255,0.5)]">
            {expert.role[0]}
            <br />
            {expert.role[1]}
          </p>
          <p className="mt-[10px] text-[11.7px] tracking-[0.23px] text-[#4285f3]">
            {expert.experience}
          </p>
          <div className="mt-[10px] h-px w-[28px] bg-white/20" />
        </div>
        <div className="flex items-start gap-2">
          <Icon name="flowerLotusDuotone" size={35} className="shrink-0 object-contain" />
          <p className="w-[121px] text-[11.4px] font-medium leading-[17px] tracking-[0.23px] text-[#4285f3]">
            {expert.tagline}
          </p>
        </div>
      </div>
    </article>
  );
}

function StatItem({ stat }: { stat: (typeof stats)[number] }) {
  const iconSize = stat.icon === "community" ? 40 : 42;

  return (
    <div className="flex min-w-0 items-start gap-5">
      <div className="relative size-[88px] shrink-0 rounded-full bg-[#0a1528]">
        <Icon
          name={stat.icon}
          size={iconSize}
          className="absolute inset-0 m-auto block object-contain object-center"
        />
      </div>
      <div className="min-w-0 pt-1">
        <p className="text-[40px] font-bold leading-none tracking-[0.8px] text-white">
          {stat.value}
        </p>
        <div className="mt-1 text-[17px] leading-snug">
          <p className="font-bold text-white/75">{stat.title}</p>
          <p className="text-white/50">{stat.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export function ExpertTeamSection() {
  return (
    <SectionShell className="bg-gradient-to-b from-[#01010b] to-[#00070e]">
      <Container className="space-y-8 py-16 xl:hidden">
        <div>
          <Eyebrow>MEET YOUR WELLNESS COACHES</Eyebrow>
          <h2 className="mt-4 text-4xl text-white">
            Ancient Wisdom
            <br />
            <GradientText>Modern Guidance</GradientText>
          </h2>
          <p className="mt-4 text-lg text-[rgba(225,253,255,0.5)]">
            Our team of experts from Ayurveda, Naturopathy, Yoga and Wellness
            Coaching are here to support your transformation.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex h-[57px] items-center justify-center gap-2 rounded-full border border-white/20 bg-[#0b0c10] px-6 text-[16px] text-white"
          >
            Meet All Experts
            <Icon name="arrowRight" size={16} className="object-contain" />
          </button>
        </div>

        <article className="relative h-[436px] overflow-hidden rounded-[20px] border border-sky-callout/20 bg-[#0a0f18]">
          <Image
            src={assets.experts.featured}
            alt="Dr. Ananya Sharma"
            fill
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f18]/95 via-[#0a0f18]/55 to-transparent" />
          <div className="relative z-10 flex h-full max-w-[55%] flex-col p-6 text-white">
            <FeaturedBadge label="AYURVEDA EXPERT" />
            <h3 className="mt-4 text-2xl font-medium">Dr. Ananya Sharma</h3>
            <p className="mt-2 text-sm text-[rgba(225,253,255,0.5)]">
              B.A.M.S (Ayurveda)
              <br />
              15+ Years Experience
            </p>
            <p className="mt-4 mb-2 text-sm italic text-[#e1fdff]">
              &ldquo;True healing begins with understanding your body, mind and
              lifestyle.&rdquo;
            </p>
            <div className="mt-auto pt-4 flex flex-wrap gap-4 rounded-[20px] border border-[#4b5563] bg-[rgba(0,7,25,0.5)] px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Icon name="community" size={28} />
                <div>
                  <p className="text-xl font-medium leading-none">5000+</p>
                  <p className="text-xs text-[rgba(225,253,255,0.5)]">Consultations</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="star" size={26} />
                <div>
                  <p className="text-xl font-medium leading-none">4.9/5</p>
                  <p className="text-xs text-[rgba(225,253,255,0.5)]">Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="grid gap-4 sm:grid-cols-2">
          {secondaryExperts.map((expert) => (
            <article
              key={expert.name}
              className="relative h-[269px] overflow-hidden rounded-xl border border-sky-callout/20 bg-[#0a0f18] sm:col-span-1 last:sm:col-span-2 last:sm:max-w-[calc(50%-0.5rem)]"
            >
              <Image
                src={expert.image}
                alt={expert.name}
                fill
                unoptimized
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0f18]/85" />
              <div className="absolute right-0 top-0 flex h-full w-[55%] flex-col justify-between p-4">
                <div>
                  <SecondaryBadge label={expert.badge} icon={expert.badgeIcon} />
                  <h3 className="mt-3 text-lg font-medium text-white">{expert.name}</h3>
                  <p className="mt-1 text-xs text-[rgba(225,253,255,0.5)]">
                    {expert.role[0]}
                    <br />
                    {expert.role[1]}
                  </p>
                  <p className="mt-2 text-xs text-[#4285f3]">{expert.experience}</p>
                </div>
                <p className="flex items-center gap-2 text-xs font-medium text-[#4285f3]">
                  <Icon name="flowerLotusDuotone" size={18} className="shrink-0 object-contain" />
                  {expert.tagline}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-6 rounded-[20px] border border-[#4b5563] bg-[rgba(0,7,25,0.5)] p-6 sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.title} className="flex gap-4">
              <Icon name={stat.icon} size={40} className="shrink-0 object-contain" />
              <div>
                <p className="text-3xl font-bold leading-none text-white">{stat.value}</p>
                <p className="mt-1 text-sm font-bold text-white/75">{stat.title}</p>
                <p className="text-sm text-white/50">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[18px] text-white/75">
          Ancient knowledge. Modern science.{" "}
          <span className="font-bold text-[#225b88]">Lasting transformation.</span>
        </p>
      </Container>

      <DesktopCanvas height={1186} className="z-10">
        <div className="flex flex-col px-[61px]">
          <div className="flex items-start justify-between pt-[25px]">
            <div className="w-[568px] pt-[39px]">
              <p className="text-[22px] font-bold uppercase tracking-[0.44px] text-sky-primary">
                MEET YOUR WELLNESS COACHES
              </p>
              <h2 className="mt-4 w-[568px] text-[48px] leading-[57px] tracking-[0.96px] text-white">
                Ancient Wisdom
                <br />
                <GradientText className="font-bold">Modern Guidance</GradientText>
              </h2>
              <p className="mt-[30px] w-[547px] text-[24px] leading-[36px] tracking-[0.48px] text-[rgba(225,253,255,0.5)]">
                Our team of experts from Ayurveda, Naturopathy, Yoga and Wellness
                Coaching are here to support your transformation.
              </p>
              <button
                type="button"
                className="mt-[31px] flex h-[57px] w-[187px] items-center justify-center gap-2 rounded-full border border-white/20 bg-[#0b0c10] text-[16px] text-white"
              >
                Meet All Experts
                <Icon name="arrowRight" size={16} className="object-contain" />
              </button>
            </div>
            <FeaturedExpertCard />
          </div>

          <div className="mt-[77px] flex gap-[13px] pl-[6px]">
            {secondaryExperts.map((expert) => (
              <SecondaryExpertCard key={expert.name} expert={expert} />
            ))}
          </div>

          <div className="mx-auto mt-[54px] grid w-full max-w-[1278px] shrink-0 grid-cols-4 gap-x-12 gap-y-4 rounded-[20px] border border-[#4b5563] bg-[rgba(0,7,25,0.5)] px-10 py-8 backdrop-blur-md">
            {stats.map((stat) => (
              <StatItem key={stat.title} stat={stat} />
            ))}
          </div>

          <div className="mt-[13px] flex shrink-0 items-center justify-center gap-1.5">
            <Icon name="flowerLotus" size={36} className="shrink-0 object-contain" />
            <p className="text-[18px] leading-normal text-white/75">
              Ancient knowledge. Modern science.{" "}
              <span className="font-bold text-[#225b88]">Lasting transformation.</span>
            </p>
          </div>
        </div>
      </DesktopCanvas>
    </SectionShell>
  );
}
