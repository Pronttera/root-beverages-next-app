"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type StartAdornment =
  | { type: "icon"; icon: LucideIcon }
  | { type: "src"; src: string; alt?: string };

type FlowerButtonProps = {
  label?: string;
  startAdornment?: StartAdornment;
  onClick?: () => void;
  bg?: string;
  textColor?: string;
  flowerSrc?: string;
  className?: string;
};

const FlowerButton: React.FC<FlowerButtonProps> = ({
  label = "Order Now",
  startAdornment,
  onClick,
  bg = "#E53935",
  textColor = "white",
  flowerSrc = "/yuzu-lavender-backdrop2.svg",
  className = "",
}) => {
  return (
    <div
      className={`flex justify-center pt-6 w-fit mx-auto md:mx-0 relative ${className}`}
    >
      {/* LEFT FLOWER */}
      <motion.img
        src={flowerSrc}
        alt="flower"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="md:block absolute left-[-1.5rem] w-[3.75rem] h-[3.75rem]"
      />

      {/* RIGHT FLOWER */}
      <motion.img
        src={flowerSrc}
        alt="flower"
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="md:block absolute right-[-1.5rem] w-[3.75rem] h-[3.75rem]"
      />

      {/* BUTTON */}
      <button
        onClick={onClick}
        className="relative z-10 font-bold w-[260px] md:w-[300px] py-4 rounded-full text-lg md:text-xl shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
        style={{ backgroundColor: bg, color: textColor }}
      >
        {/* START ADORNMENT */}
        {startAdornment && (
          <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
            {startAdornment.type === "icon" ? (
              <startAdornment.icon className="w-4 h-4" style={{ color: bg }} />
            ) : (
              <img
                src={startAdornment.src}
                alt={startAdornment.alt ?? ""}
                className="w-full h-full object-contain"
              />
            )}
          </span>
        )}

        {label}
      </button>
    </div>
  );
};

export default FlowerButton;
