import type { ReactNode } from "react";

import { FooterMaskedIcon } from "@/components/ui/FooterMaskedIcon";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const BRAND_DESCRIPTION =
  "The proper Footer on proper time can preserve you protection. We assist you make sureeverybody forward.";

const QUICK_LINKS = ["Home", "About us", "Services", "Product"] as const;

const BLOG_POSTS = [
  { title: "People Saying About Footer.", date: "8 Nov, 2021" },
  { title: "People Saying About Footer.", date: "8 Nov, 2021" },
] as const;

const CONTACT_ITEMS = [
  {
    text: "Iconic Corenthum, Tower C, 5th Floor, Sector-62, Noida, UP, 201309",
    icon: "location" as const,
  },
  {
    text: "contact@byebimari.com",
    href: "mailto:contact@byebimari.com",
    icon: "email" as const,
  },
] as const;

const SOCIAL_LINKS = [
  { href: "#", icon: "facebook" as const, label: "Facebook" },
  // { href: '#', icon: 'twitter' as const, label: 'Twitter' },
  { href: "#", icon: "linkedin" as const, label: "LinkedIn" },
  { href: "#", icon: "instagram" as const, label: "Instagram" },
  { href: "#", icon: "youtube" as const, label: "YouTube" },
] as const;

const FOOTER_ICONS = {
  chevron: "/images/footer/mask-chevron.png",
  location: "/images/footer/mask-location.png",
  email: "/images/footer/mask-email.png",
  phone: "/images/footer/mask-phone.png",
  facebook: "/images/footer/social-facebook.png",
  // twitter: '/images/footer/social-twitter.png',
  linkedin: "/images/footer/social-linkedin.png",
  instagram: "/images/footer/social-instagram.png",
  youtube: "/images/footer/social-youtube.png",
} as const;

type FooterIconName = keyof typeof FOOTER_ICONS;

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const footerTextClass = "text-[16px] capitalize leading-normal text-foreground";
const footerHeadingClass =
  "text-[16px] font-medium capitalize leading-[13px] text-foreground";
const contactRowClass = `text-[16px] leading-normal text-foreground inline-flex items-center gap-3.5 py-0.5`;

// ---------------------------------------------------------------------------
// Primitives
// ---------------------------------------------------------------------------

function FooterColumnHeading({ children }: { children: ReactNode }) {
  return <p className={footerHeadingClass}>{children}</p>;
}

function FooterNavLink({ children }: { children: ReactNode }) {
  return (
    <a
      href="#"
      className={`${footerTextClass} inline-flex items-center gap-1.5 leading-[13px] hover:text-foreground/70`}
    >
      <FooterMaskedIcon src={FOOTER_ICONS.chevron} size={13} rotate />
      {children}
    </a>
  );
}

function BlogPostItem({ title, date }: { title: string; date: string }) {
  return (
    <div className="flex items-start gap-1.5">
      <div className="pt-1">
        <FooterMaskedIcon src={FOOTER_ICONS.chevron} size={15} rotate />
      </div>
      <div>
        <p className={`${footerTextClass} font-medium`}>{title}</p>
        <p className="mt-1 text-[13px] leading-[13px] text-muted-foreground">
          {date}
        </p>
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
  icon: Extract<
    FooterIconName,
    // "facebook" | "twitter" | "instagram" | "youtube"
    "facebook" | "linkedin" | "instagram" | "youtube"
  >;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex size-[35px] items-center justify-center rounded-full bg-[#f5f5f5]"
    >
      <img
        src={FOOTER_ICONS[icon]}
        alt=""
        width={15}
        height={15}
        className="size-[15px]"
      />
    </a>
  );
}

function ContactRow({
  text,
  href,
  icon,
}: {
  text: string;
  href?: string;
  icon: Extract<FooterIconName, "location" | "email" | "phone">;
}) {
  const content = (
    <>
      <FooterMaskedIcon src={FOOTER_ICONS[icon]} size={25} />
      {text}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${contactRowClass} hover:text-foreground/70`}>
        {content}
      </a>
    );
  }

  return <span className={contactRowClass}>{content}</span>;
}

// ---------------------------------------------------------------------------
// Columns
// ---------------------------------------------------------------------------

function BrandColumn() {
  return (
    <div>
      {/* <p className={footerHeadingClass}>Logo</p> */}
      <img
        src="/images/sky/logo.png"
        alt="Logo"
        width={15}
        height={15}
        className="size-[130px]"
      />
      {/* <p className=" text-[16px] font-light leading-[30px] text-foreground">
        {BRAND_DESCRIPTION}
      </p> */}
      <div className="mt-5 flex gap-5">
        {SOCIAL_LINKS.map((social) => (
          <SocialIcon key={social.label} {...social} />
        ))}
      </div>
    </div>
  );
}

function QuickLinksColumn() {
  return (
    <div>
      <FooterColumnHeading>Quick link</FooterColumnHeading>
      <ul className="mt-5 flex flex-col gap-3">
        {QUICK_LINKS.map((link) => (
          <li key={link}>
            <FooterNavLink>{link}</FooterNavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlogColumn() {
  return (
    <div>
      <FooterColumnHeading>Blog</FooterColumnHeading>
      <div className="mt-5 flex flex-col gap-4">
        {BLOG_POSTS.map((post, index) => (
          <BlogPostItem key={`${post.date}-${index}`} {...post} />
        ))}
      </div>
    </div>
  );
}

function ContactColumn({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <FooterColumnHeading>Contact</FooterColumnHeading>
      <ul className="mt-5 flex flex-col gap-5">
        {CONTACT_ITEMS.map((item) => (
          <li key={item.text}>
            <ContactRow {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export function Footer() {
  return (
    <footer className="bg-white text-foreground">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 md:px-[98px] xl:px-[143px] xl:py-[78px]">
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.75fr)_minmax(0,1fr)_minmax(380px,1.6fr)] xl:gap-x-[30px] xl:gap-y-0">
          <BrandColumn />
          <QuickLinksColumn />
          {/* <BlogColumn /> */}
          <ContactColumn className="sm:col-span-2 xl:col-span-1 xl:pt-2" />
        </div>
      </div>
    </footer>
  );
}
