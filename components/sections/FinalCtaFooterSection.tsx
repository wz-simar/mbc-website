import type { ReactNode } from "react";
import { assets } from "@/lib/assets";
import {
  Container,
  DesktopCanvas,
  SectionShell,
} from "@/components/ui/SectionShell";
import Image from "next/image";
import { FooterMaskedIcon } from "@/components/ui/FooterMaskedIcon";

const quickLinks = ["Home", "About us", "Services", "Product"];

const blogPosts = [
  { title: "People saying about", date: "8 Nov, 2021" },
  { title: "People saying about", date: "8 Nov, 2021" },
];

const contactItems: {
  text: string;
  href?: string;
  icon: keyof typeof assets.footer.masks;
}[] = [
  { text: "44 Danwers,  NY City, USA, 70-102", icon: "location" },
  { text: "lamaro@lamaroyc.us", href: "mailto:lamaro@lamaroyc.us", icon: "email" },
  { text: "91+585-656-658", href: "tel:+91585656658", icon: "phone" },
];

const contactRowClass =
  "inline-flex items-center gap-3.5 py-0.5 text-[16px] capitalize leading-normal";

const socialLinks = [
  { href: "#", icon: "facebook" as const, label: "Facebook" },
  { href: "#", icon: "twitter" as const, label: "Twitter" },
  { href: "#", icon: "instagram" as const, label: "Instagram" },
  { href: "#", icon: "youtube" as const, label: "YouTube" },
];

function FooterWaveUnderline() {
  return (
    <div className="flex items-center">
      <FooterMaskedIcon
        src={assets.footer.masks.wave}
        size={7}
        style={{ width: 20, height: 7 }}
      />
      <FooterMaskedIcon
        src={assets.footer.masks.wave}
        size={7}
        style={{ width: 20, height: 7 }}
      />
    </div>
  );
}

function FooterColumnHeading({
  children,
}: {
  children: ReactNode;
  waveGap?: number;
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[16px] font-medium capitalize leading-[13px] text-white">
        {children}
      </p>
      <FooterWaveUnderline />
    </div>
  );
}

function FooterNavLink({ children }: { children: ReactNode }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-1.5 text-[16px] capitalize leading-[13px] text-white hover:text-white/80"
    >
      <FooterMaskedIcon src={assets.footer.masks.chevron} size={13} rotate />
      {children}
    </a>
  );
}

function BlogPost({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <div className="flex items-start gap-1.5">
      <div className="pt-1">
        <FooterMaskedIcon src={assets.footer.masks.chevron} size={15} rotate />
      </div>
      <div>
        <p className="text-[16px] font-medium capitalize leading-normal text-white">
          {title}
          <br />
        </p>
        <p className="mt-1 text-[13px] leading-[13px] text-white/50">{date}</p>
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: keyof typeof assets.footer.masks;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="relative inline-flex size-[35px] items-center justify-center"
    >
      <img
        src={assets.footer.socialCircle}
        alt=""
        width={35}
        height={35}
        className="absolute inset-0 size-[35px]"
      />
      <FooterMaskedIcon
        src={assets.footer.masks[icon]}
        size={15}
        className="relative z-10"
      />
    </a>
  );
}

function FooterDesktop() {
  return (
    <DesktopCanvas height={396} className="bg-black">
      <div className="grid grid-cols-[306px_224px_336px_1fr] gap-x-[30px] px-[143px] pt-[78px]">
        <div>
          <p className="text-[16px] font-medium leading-[13px] text-white">Logo</p>
          <p className="mt-6 text-[16px] font-light leading-[30px] text-white">
            The proper Footer on proper time can
            <br />
            preserve you protection. We assist you
            <br />
            make sureeverybody forward.
          </p>
          <div className="mt-5 flex gap-[20px]">
            {socialLinks.map((social) => (
              <SocialIcon key={social.label} {...social} />
            ))}
          </div>
        </div>

        <div>
          <FooterColumnHeading>Quick link</FooterColumnHeading>
          <ul className="mt-5 flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <FooterNavLink>{link}</FooterNavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterColumnHeading>Blog</FooterColumnHeading>
          <div className="mt-5 flex flex-col gap-4">
            {blogPosts.map((post, index) => (
              <BlogPost key={`${post.date}-${index}`} {...post} />
            ))}
          </div>
        </div>

        <div className="pt-2">
          <FooterColumnHeading>Contact</FooterColumnHeading>
          <ul className="mt-[13px] flex flex-col gap-5">
            {contactItems.map((item) => (
              <li key={item.text}>
                {item.href ? (
                  <a
                    href={item.href}
                    className={`${contactRowClass} text-white hover:text-white/80`}
                  >
                    <FooterMaskedIcon
                      src={assets.footer.masks[item.icon]}
                      size={25}
                    />
                    {item.text}
                  </a>
                ) : (
                  <span className={`${contactRowClass} text-white`}>
                    <FooterMaskedIcon
                      src={assets.footer.masks[item.icon]}
                      size={25}
                    />
                    {item.text}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DesktopCanvas>
  );
}

function FooterMobile() {
  return (
    <div className="bg-black px-6 py-12 xl:hidden">
      <p className="text-[16px] font-medium text-white">Logo</p>
      <p className="mt-4 text-[16px] font-light leading-[30px] text-white/80">
        The proper Footer on proper time can preserve you protection. We assist
        you make sureeverybody forward.
      </p>
      <div className="mt-6 flex gap-5">
        {socialLinks.map((social) => (
          <SocialIcon key={social.label} {...social} />
        ))}
      </div>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <FooterColumnHeading>Quick link</FooterColumnHeading>
          <ul className="mt-5 flex flex-col gap-4">
            {quickLinks.map((link) => (
              <li key={link}>
                <FooterNavLink>{link}</FooterNavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <FooterColumnHeading>Blog</FooterColumnHeading>
          <div className="mt-5 flex flex-col gap-4">
            {blogPosts.map((post, index) => (
              <BlogPost key={`${post.date}-${index}`} {...post} />
            ))}
          </div>
        </div>
        <div className="sm:col-span-2">
          <FooterColumnHeading>Contact</FooterColumnHeading>
          <ul className="mt-5 flex flex-col gap-4">
            {contactItems.map((item) => (
              <li key={item.text}>
                {item.href ? (
                  <a
                    href={item.href}
                    className={`${contactRowClass} text-white/80 hover:text-white`}
                  >
                    <FooterMaskedIcon
                      src={assets.footer.masks[item.icon]}
                      size={25}
                    />
                    {item.text}
                  </a>
                ) : (
                  <span className={`${contactRowClass} text-white/80`}>
                    <FooterMaskedIcon
                      src={assets.footer.masks[item.icon]}
                      size={25}
                    />
                    {item.text}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function FinalCtaFooterSection() {
  return (
    <SectionShell className="overflow-x-clip bg-[#010209]">
      <Container className="relative overflow-hidden py-16 xl:hidden">
        <Image
          src={assets.finalCtaBackground}
          alt=""
          width={1440}
          height={671}
          unoptimized
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: "auto", height: "auto" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="relative z-10">
          <h2 className="text-4xl font-medium text-white">
            We are Companion in your wellness Journey
          </h2>
          <p className="mt-4 text-lg leading-9 text-[rgba(225,253,255,0.5)]">
            Supporting you through smart Tracking,
            <br />
            Natural wisdom, expert guidance and continuous support
          </p>
          <button
            type="button"
            className="mt-8 rounded-full bg-sky-primary px-8 py-4 text-lg font-semibold text-white"
          >
            Reserve Sky Now
          </button>
        </div>
      </Container>

      <DesktopCanvas height={671} className="overflow-visible">
        <Image
          src={assets.finalCtaBackground}
          alt=""
          width={1440}
          height={671}
          unoptimized
          className="absolute inset-0 z-0 object-cover"
          style={{ width: 1440, height: 671 }}
          sizes="1440px"
        />
        <div className="absolute left-0 top-0 z-[1] h-full w-[62%] max-w-[900px] bg-gradient-to-r from-black to-transparent" />

        <div className="relative z-10 flex h-full overflow-visible">
          <div className="flex w-[58%] max-w-[900px] shrink-0 flex-col justify-center pl-[68px]">
            <h2 className="w-[568px] text-[48px] font-medium leading-[57px] tracking-[0.96px] text-white">
              We are Companion in your wellness Journey
            </h2>
            <p className="mt-[81px] w-[547px] text-[24px] leading-[36px] tracking-[0.48px] text-[rgba(225,253,255,0.5)]">
              Supporting you through smart Tracking,
              <br />
              Natural wisdom, expert guidance and continuous support
            </p>
            <button
              type="button"
              className="mt-[66px] flex h-[63px] w-[254px] items-center justify-center rounded-full bg-sky-primary text-[24px] font-semibold tracking-[0.48px] text-white"
            >
              Reserve Sky Now
            </button>
          </div>

          <div className="pointer-events-none flex min-w-0 flex-1 items-center justify-center overflow-visible">
            <div className="-ml-12 rotate-[92.51deg]">
              <Image
                src={assets.ring}
                alt="SKY smart ring"
                width={980}
                height={654}
                unoptimized
                className="object-contain mix-blend-lighten"
                style={{
                  width: 980,
                  height: 654,
                  filter: "drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.5))",
                }}
                sizes="980px"
              />
            </div>
          </div>
        </div>
      </DesktopCanvas>

      <footer>
        <FooterMobile />
        <FooterDesktop />
      </footer>
    </SectionShell>
  );
}
