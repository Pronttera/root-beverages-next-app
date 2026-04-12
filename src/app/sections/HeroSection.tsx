"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Typography from "../components/common/Typography";
import Container from "../components/common/Container";
import FlowerButton from "../components/common/FlowerButton";
import TestimonialSection from "./TestimonialSection";

const SLIDES = [
  {
    id: 3,
    image: "orange-wrapper.jpeg",
    tagline: "Zesty. Juicy. Classic.",
    heading: "Nagpur Orange\nreimagined",
    bg: "#FF8F00",
    textColor: "white",
  },
  {
    id: 1,
    image: "jeera-wrapper.jpeg",
    tagline: "Bold. Spiced. Desi.",
    heading: "Amritsari Jeera\nwith a punch",
    bg: "#5D4037",
    textColor: "white",
  },
  {
    id: 2,
    image: "kokam-wrapper.jpeg",
    tagline: "Tangy. Coastal. Refreshing.",
    heading: "Konkani Kokam\nin every sip",
    bg: "#D32F2F",
    textColor: "white",
  },

  {
    id: 4,
    image: "guoa-wrapper.jpeg",
    tagline: "Sweet. Tropical. Nostalgic.",
    heading: "Guava\nlike never before",
    bg: "#EC407A",
    textColor: "white",
  },
  {
    id: 5,
    image: "cola-wrapper.jpeg",
    tagline: "Smooth. Classic. Timeless.",
    heading: "IND Cola\nwith roots",
    bg: "#263238",
    textColor: "white",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.92,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.92,
  }),
};

const HeroSection = () => {
  const [[activeIndex, direction], setSlide] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setSlide(([prev]) => [
      (prev + newDirection + SLIDES.length) % SLIDES.length,
      newDirection,
    ]);
  };

  const slide = SLIDES[activeIndex];

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <motion.section
        className="relative overflow-hidden dotted-bg md:py-28 py-4"
        animate={{ backgroundColor: slide.bg }}
        transition={{ duration: 0.5 }}
        id="hero"
      >
        <div className="flex items-center overflow-hidden mt-[-6rem] md:mt-0">
          {/* Background colour layer */}
          <div className="absolute inset-0 z-0" />

          <div className="relative z-10 w-full max-w-[1900px] mx-auto px-8 md:px-16  flex flex-col-reverse md:flex-row md:items-center md:gap-12 py-12 md:py-0">
            {/* Text */}
            <div className="flex-1 md:flex flex-col-reverse justify-center md:justify-start md:flex-col gap-4 md:gap-6 mt-[-10rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id + "-text"}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4 }}
                >
                  <Typography
                    variant="label"
                    className="uppercase tracking-widest text-sm font-bold mb-4 opacity-80 px-3 py-2 rounded-md bg-black block w-fit"
                    style={{ color: slide.textColor }}
                  >
                    {slide.tagline}
                  </Typography>
                  <Typography
                    variant="h1"
                    style={{
                      //   fontWeight: 900,
                      //   fontSize: "clamp(48px, 7vw, 100px)",
                      color: "black",
                      WebkitTextFillColor: slide.textColor,
                      WebkitTextStrokeWidth: "0.04em",
                      WebkitTextStrokeColor: "black",
                      paintOrder: "stroke fill",
                      whiteSpace: "pre-line",
                      height: "5ch",
                    }}
                  >
                    {slide.heading}
                  </Typography>
                </motion.div>
              </AnimatePresence>

              {/* Nav Buttons */}
              <div className="flex items-center justify-center gap-6 mt-6">
                <NavButton
                  onClick={() => paginate(-1)}
                  bg={slide.textColor === "white" ? "white" : "black"}
                  iconColor={slide.bg}
                  icon={<ChevronLeft className="w-6 h-6" />}
                  id="hero-prev"
                />

                {/* Dot indicators */}
                <div className="flex gap-2">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i}
                      id={`hero-dot-${i}`}
                      onClick={() =>
                        setSlide(([prev]) => [i, i > prev ? 1 : -1])
                      }
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === activeIndex ? 28 : 10,
                        height: 10,
                        backgroundColor:
                          slide.textColor === "white"
                            ? "rgba(255,255,255,0.9)"
                            : "rgba(0,0,0,0.7)",
                        opacity: i === activeIndex ? 1 : 0.4,
                      }}
                    />
                  ))}
                </div>

                <NavButton
                  onClick={() => paginate(1)}
                  bg={slide.textColor === "white" ? "white" : "black"}
                  iconColor={slide.bg}
                  icon={<ChevronRight className="w-6 h-6" />}
                  id="hero-next"
                />
              </div>
            </div>

            {/* Image — sprite strip */}
            <div
              className="flex-1 flex items-center justify-center relative h-[600px] w-full overflow-hidden"
              style={{
                maskImage: "url(./bottle-mask.png)",
                maskPosition: "center",
                maskRepeat: "no-repeat",
                backgroundImage: "url(./bottle.png)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                maskSize: "20rem",
                backgroundSize: "20rem",
                scale: isMobile ? 0.6 : 1.2,
              }}
            >
              <motion.div
                className="flex h-[600px] md:h-full"
                style={{
                  width: 400,
                  marginTop: 80,
                  mixBlendMode: "multiply",
                }}
                animate={{ x: -(activeIndex * 400) }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              >
                {SLIDES.map((s) => (
                  <div
                    key={s.id}
                    className="h-full flex items-center justify-center flex-shrink-0"
                    // style={{ width: `${100 / SLIDES.length}%` }}
                    style={{
                      width: 400,
                    }}
                  >
                    <img
                      src={s.image}
                      alt={s.heading}
                      className="w-full h-full drop-shadow-2xl"
                      style={{ height: 200, width: 400, flex: 0 }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        <Container className="mt-4 mb-8 md:mb-0 md:mt-12 flex flex-col md:flex-row justify-center gap-4 md:gap-18">
          <FlowerButton
            textColor="#E23375"
            bg="white"
            label="Order from Zepto"
            startAdornment={{ type: "src", src: "/zepto-icon.png" }}
          />
          <FlowerButton
            bg="white"
            textColor="#FC8019"
            label="Order from Instamart"
            startAdornment={{ type: "src", src: "/swiggy-icon.svg" }}
          />
          <FlowerButton
            bg="#F8C519"
            textColor="black"
            label="Order from Blinkit"
            startAdornment={{ type: "src", src: "/blinkit-icon.svg" }}
          />
        </Container>
        <div className="mt-[-60rem]- md:mt-[-41rem]- absolute top-4 md:bottom-1/4">
          <TestimonialSection hideCard />
        </div>
      </motion.section>
    </>
  );
};

const NavButton = ({
  onClick,
  bg,
  iconColor,
  icon,
  id,
}: {
  onClick: () => void;
  bg: string;
  iconColor: string;
  icon: React.ReactNode;
  id: string;
}) => (
  <motion.button
    id={id}
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.92 }}
    className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 cursor-pointer"
    style={{
      backgroundColor: bg,
      color: iconColor,
      transition: "background-color 0.4s, color 0.4s",
    }}
  >
    {icon}
  </motion.button>
);

export default HeroSection;
