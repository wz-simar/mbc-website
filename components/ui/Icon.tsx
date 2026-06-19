import Image from "next/image";
import type { CSSProperties } from "react";
import { icons, type IconName } from "@/lib/icons";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  alt?: string;
  style?: CSSProperties;
};

function hasCssSizeOverride(className?: string): boolean {
  if (!className) return false;
  return /\b(?:!?[hw]-|!?size-)/.test(className);
}

export function Icon({
  name,
  size = 24,
  className,
  alt = "",
  style,
}: IconProps) {
  const dimensionStyle = hasCssSizeOverride(className)
    ? { width: "auto" as const, height: "auto" as const }
    : { width: size, height: size };

  return (
    <Image
      src={icons[name]}
      alt={alt}
      width={size}
      height={size}
      className={className}
      style={{ ...dimensionStyle, ...style }}
      unoptimized
    />
  );
}
