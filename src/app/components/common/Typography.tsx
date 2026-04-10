import React from "react";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "lead1"
  | "lead2"
  | "label"
  | "body"
  | "title";

type TypographyProps = {
  children: React.ReactNode;
  variant?: TypographyVariant;
  font?: "poppins" | "berkshire";
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const variantClasses: Record<TypographyVariant, string> = {
  h1: "text-2xl md:text-8xl leading-tight mb-3 md:mb-6 font-[900]",
  h2: "text-2xl md:text-6xl leading-tight mb-3 md:mb-4 font-[900]",
  h3: "text-2xl md:text-8xl leading-tight mb-3 md:mb-4 font-semibold",
  lead1: "text-base md:text-lg mb-3 md:mb-3.5",
  lead2: "text-base md:text-2xl mb-3 md:mb-3.5",
  label: "text-sm font-medium",
  body: "text-base mb-5",
  title: "text-base font-semibold",
};

const variantColors: Record<TypographyVariant, string> = {
  h1: "",
  h2: "",
  h3: "",
  lead1: "text-slate-500",
  lead2: "text-slate-500",
  label: "text-black",
  body: "",
  title: "",
};

const variantFonts: Record<TypographyVariant, "poppins" | "berkshire"> = {
  h1: "poppins",
  h2: "poppins",
  h3: "poppins",
  lead1: "poppins",
  lead2: "poppins",
  label: "poppins",
  body: "poppins",
  title: "poppins",
};

const fontClasses: Record<string, string> = {
  poppins: "font-poppins",
  berkshire: "font-poppins",
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body",
  font,
  className = "",
  style,
  onClick,
}) => {
  const Component =
    variant === "h1" || variant === "h2" || variant === "h3"
      ? variant
      : variant === "label"
        ? "label"
        : "p";

  // Check if className contains a text color class
  const hasTextColor = className.match(/text-\S+/);
  const colorClass = hasTextColor ? "" : variantColors[variant];

  const activeFont = font || variantFonts[variant];

  return (
    <Component
      onClick={onClick}
      className={`${variantClasses[variant]} ${colorClass} ${fontClasses[activeFont]} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};

export default Typography;
