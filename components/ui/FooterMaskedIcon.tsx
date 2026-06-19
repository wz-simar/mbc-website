import type { CSSProperties } from "react";

type FooterMaskedIconProps = {
  src: string;
  size: number;
  className?: string;
  rotate?: boolean;
  style?: CSSProperties;
};

export function FooterMaskedIcon({
  src,
  size,
  className = "",
  rotate = false,
  style,
}: FooterMaskedIconProps) {
  const icon = (
    <span
      className={`inline-block bg-sky-primary ${className}`}
      style={{
        width: size,
        height: size,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        ...style,
      }}
    />
  );

  if (!rotate) {
    return <span className="inline-block shrink-0">{icon}</span>;
  }

  return (
    <span
      className="inline-flex shrink-0 items-center justify-center overflow-hidden"
      style={{ width: size, height: size }}
    >
      <span className="inline-flex -scale-y-100 rotate-90">{icon}</span>
    </span>
  );
}
