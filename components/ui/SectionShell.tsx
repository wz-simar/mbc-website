import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({ id, className = "", children }: SectionShellProps) {
  return (
    <section id={id} className={`relative w-full overflow-hidden ${className}`}>
      {children}
    </section>
  );
}

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-6 md:px-[98px] ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[22px] font-bold uppercase tracking-[0.44px] text-sky-primary">
      {children}
    </p>
  );
}

export function GradientText({
  children,
  className = "",
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "insights";
}) {
  const gradientClass =
    variant === "insights"
      ? "bg-gradient-to-r from-[#40abff] to-sky-primary"
      : "bg-gradient-to-r from-sky-primary to-sky-accent";

  return (
    <span
      className={`bg-clip-text text-transparent ${gradientClass} ${className}`}
    >
      {children}
    </span>
  );
}

export function DesktopCanvas({
  height,
  className = "",
  children,
}: {
  height: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative mx-auto hidden w-full max-w-[1440px] xl:block ${className}`}
      style={{ height, width: "100%" }}
    >
      {children}
    </div>
  );
}
