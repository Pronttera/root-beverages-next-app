"use client";
import React, { useState, useEffect } from "react";
import Section from "../components/common/Section";
import Container from "../components/common/Container";
import Typography from "../components/common/Typography";
import Button from "../components/common/Button";
import FlowerButton from "../components/common/FlowerButton";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface FlavorCard {
  id: number;
  name: string;
  ingredients: string;
  bgColor: string;
  textColor: string;
  image: string;
}

const FLAVOURS: FlavorCard[] = [
  {
    id: 3,
    name: "Nagpur Orange",
    ingredients: "Zesty orange burst with citrus fizz",
    bgColor: "#FF8F00",
    textColor: "#ffffff",
    image: "/flavours/orange.png",
  },
  {
    id: 1,
    name: "Amritsari Jeera",
    ingredients: "Spiced cumin blend with fizzy refreshment",
    bgColor: "#5D4037",
    textColor: "#ffffff",
    image: "/flavours/jeera.png",
  },
  {
    id: 2,
    name: "Konkani Kokam",
    ingredients: "Tangy kokam with a coastal twist",
    bgColor: "#D32F2F",
    textColor: "#ffffff",
    image: "/flavours/kokam.png",
  },
  {
    id: 5,
    name: "IND Cola",
    ingredients: "Classic cola with a desi touch",
    bgColor: "#263238",
    textColor: "#ffffff",
    image: "/flavours/cola.png",
  },
  {
    id: 4,
    name: "Allahabadi Guava",
    ingredients: "Sweet guava with tropical notes",
    bgColor: "#EC407A",
    textColor: "#ffffff",
    image: "/flavours/guava.png",
  },
];
export default function FlavoursSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const total = FLAVOURS.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const VISIBLE = isMobile ? 1 : 3;
  const canPrev = activeIndex > 0;
  const canNext = activeIndex < total - VISIBLE;

  const go = (dir: "prev" | "next") => {
    if (isAnimating) return;
    if (dir === "prev" && !canPrev) return;
    if (dir === "next" && !canNext) return;
    setIsAnimating(true);
    setActiveIndex((i) => (dir === "next" ? i + 1 : i - 1));
    setTimeout(() => setIsAnimating(false), 450);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go("prev");
      if (e.key === "ArrowRight") go("next");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, isAnimating]);

  return (
    <Section
      disableContainer
      className="!px-0 !py-0 overflow-hidden"
      style={{ backgroundColor: "#0060d1" }}
      id="our-flavours"
    >
      {/* ── Scalloped top edge ── */}
      <div className="w-full overflow-hidden" style={{ marginTop: "-1px" }}>
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "80px" }}
        >
          <path
            d="M0,0 L0,60 Q80,100 160,60 Q240,20 320,60 Q400,100 480,60 Q560,20 640,60 Q720,100 800,60 Q880,20 960,60 Q1040,100 1120,60 Q1200,20 1280,60 Q1360,100 1440,60 L1440,0 Z"
            fill="currentColor"
            className="text-tomato"
          />
        </svg>
      </div>

      {/* ── Section body ── */}
      <Container className="pt-10 pb-20 md:pt-20 md:pb-32 space-y-12 md:space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10 px-4 md:px-0">
          <div className="max-w-3xl">
            <span className="inline-block bg-white text-black text-md px-4 py-1 rounded-full mb-4 md:mb-6">
              Our Sodas
            </span>
            <Typography variant="h2" className="!text-white">
              Dirty Sodas.
              <br />
              Clean Hits.
            </Typography>
            <h2
              className="text-white uppercase leading-[0.9]"
              style={{
                fontSize: "clamp(42px, 11vw, 110px)",
                fontWeight: 600,
                // fontFamily: "Anton, Impact, sans-serif",
                letterSpacing: "-2px",
              }}
            ></h2>
          </div>
          <div className="max-w-md md:pt-16">
            <p className="text-white/90 text-base md:text-[18px] leading-relaxed">
              Whether you're in the mood for something fruity, fizzy, or
              fabulously refreshing, our collection of beverages and juices has
              something for every taste.
            </p>
          </div>
        </div>

        {/* ── Carousel ── */}
        <div className="relative mx-auto w-full">
          <div className="overflow-hidden px-4 md:px-10">
            <div
              className="flex gap-4 md:gap-6 transition-transform duration-[420ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{
                transform: `translateX(calc(-${activeIndex} * (100% / ${VISIBLE} + ${isMobile ? "4px" : "8px"})))`,
              }}
            >
              {FLAVOURS.map((card) => (
                <div
                  key={card.id}
                  className="flex-shrink-0 rounded-3xl overflow-hidden flex flex-col shadow-lg"
                  style={{
                    width: isMobile ? "100%" : `calc(100% / ${VISIBLE} - 16px)`,
                    backgroundColor: card.bgColor,
                    minHeight: isMobile ? "460px" : "560px",
                  }}
                >
                  {/* Image */}
                  <div className="flex-[2.5] flex items-center justify-center pb-2">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-auto h-full object-contain scale-110 drop-shadow-2xl"
                      style={{ maxHeight: isMobile ? "260px" : "580px" }}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 px-6 py-6 md:py-8 flex flex-col justify-end space-y-1">
                    <Typography
                      variant="lead2"
                      style={{
                        color: card.textColor,
                        fontWeight: 900,
                      }}
                    >
                      {card.name}
                    </Typography>
                    <Typography
                      variant="lead1"
                      className="!mt-1"
                      style={{ color: card.textColor }}
                    >
                      {card.ingredients}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Desktop arrows — on sides ── */}
          <button
            onClick={() => go("prev")}
            disabled={!canPrev}
            aria-label="Previous flavour"
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl items-center justify-center transition-all duration-200 z-20 ${
              canPrev
                ? "opacity-100 hover:scale-110 cursor-pointer"
                : "opacity-30 cursor-not-allowed"
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={() => go("next")}
            disabled={!canNext}
            aria-label="Next flavour"
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl items-center justify-center transition-all duration-200 z-20 ${
              canNext
                ? "opacity-100 hover:scale-110 cursor-pointer"
                : "opacity-30 cursor-not-allowed"
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* ── Mobile arrows — below card centered ── */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={() => go("prev")}
              disabled={!canPrev}
              aria-label="Previous flavour"
              className={`w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center transition-all duration-200 ${
                canPrev
                  ? "opacity-100 cursor-pointer"
                  : "opacity-30 cursor-not-allowed"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {FLAVOURS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 h-3 bg-white"
                      : "w-3 h-3 bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go("next")}
              disabled={!canNext}
              aria-label="Next flavour"
              className={`w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center transition-all duration-200 ${
                canNext
                  ? "opacity-100 cursor-pointer"
                  : "opacity-30 cursor-not-allowed"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Order Now CTA ── */}
        <div className="flex justify-center pt-6">
          <FlowerButton
            label="Order Now"
            textColor="#E23375"
            bg="white"
            className="mt-4 md:mt-12"
            onClick={() => alert("Stay thirsty… we’re coming soon.")}
          />
        </div>
      </Container>
    </Section>
  );
}
