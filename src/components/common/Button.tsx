"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  href,
  target,
  rel,
  disabled = false,
}) => {
  const variantClasses = {
    primary: "bg-primary-main text-white hover:opacity-90",

    secondary: "bg-white text-primary-main hover:bg-slate-200",

    outline:
      "border border-primary-main text-primary-main bg-transparent hover:bg-primary-main hover:text-white",
  };

  const sizeClasses = {
    sm: "py-1 px-2 text-xs",
    md: "py-2 px-3 text-sm md:py-3 md:px-4 md:text-base",
    lg: "py-3 px-5 text-base md:py-4 md:px-6 md:text-lg",
  };

  const classes = clsx(
    "border-none rounded-sm w-fit transition-all duration-300 inline-flex items-center",
    disabled
      ? "opacity-50 cursor-not-allowed pointer-events-none"
      : "cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={!disabled ? onClick : undefined}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
