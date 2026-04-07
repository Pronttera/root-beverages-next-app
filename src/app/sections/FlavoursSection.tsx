"use client";
import React, { useState, useEffect } from "react";
import Section from "../components/Common/Section";
import Container from "../components/Common/Container";
import Typography from "../components/Common/Typography";
import Button from "../components/Common/Button";

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
    id: 1,
    name: "Glow Up",
    ingredients: "Fanta + Vanilla + Cold foam",
    bgColor: "#E8A020",
    textColor: "#ffffff",
    image: "/berry-soda.png",
  },
  {
    id: 2,
    name: "Shenron",
    ingredients: "Mountain Dew + Lime + Pineapple",
    bgColor: "#4A90D9",
    textColor: "#ffffff",
    image: "/fresh-soda.png",
  },
  {
    id: 3,
    name: "Princess Peach",
    ingredients: "Coke Zero + Peach + Almond Creamer",
    bgColor: "#FFD966",
    textColor: "#ffffff",
    image: "/peach-soda.png",
  },
  {
    id: 4,
    name: "Blue Raspberry",
    ingredients: "Sprite + Blue Razz + Coconut Cream",
    bgColor: "#6BCB77",
    textColor: "#ffffff",
    image: "/blue-soda.png",
  },
  {
    id: 5,
    name: "Strawberry Sunset",
    ingredients: "Dr Pepper + Strawberry + Cream",
    bgColor: "#F7A",
    textColor: "#ffffff",
    image: "/pineapple-soda.png",
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
      style={{ backgroundColor: "#7E3FA0" }}
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
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-white text-black text-md px-4 py-1 rounded-full mb-6">
              Our Sodas
            </span>
            <h2
              className="text-white uppercase leading-[0.9]"
              style={{
                fontSize: "clamp(48px, 8vw, 110px)",
                fontFamily: "Anton, Impact, sans-serif",
                letterSpacing: "-2px",
              }}
            >
              Dirty Sodas.
              <br />
              Clean Hits.
            </h2>
          </div>
          <div className="max-w-md pt-6 md:pt-34">
            <p className="text-white/90 text-[18px] leading-relaxed">
              Whether you're in the mood for something fruity, fizzy, or
              fabulously refreshing, our collection of beverages and juices has
              something for every taste.
            </p>
          </div>
        </div>

        {/* ── Carousel ── */}
        <div className="relative mx-auto w-full">
          <div className="overflow-hidden px-2 md:px-10">
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
                    width: isMobile
                      ? "calc(100% - 8px)"
                      : `calc(100% / ${VISIBLE} - 16px)`,
                    backgroundColor: card.bgColor,
                    minHeight: isMobile ? "460px" : "560px",
                  }}
                >
                  {/* Image */}
                  <div className="flex-[2.5] flex items-center justify-center pt-12 md:pt-16 px-8 pb-2">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-auto h-full object-contain scale-110 drop-shadow-2xl"
                      style={{ maxHeight: isMobile ? "320px" : "580px" }}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 px-6 py-6 md:py-8 flex flex-col justify-end space-y-1">
                    <Typography
                      variant="h3"
                      className="!text-2xl md:!text-4xl !font-black uppercase !mb-0 !leading-tight !mt-0"
                      style={{
                        color: card.textColor,
                        fontFamily: "'Anton', 'Impact', sans-serif",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {card.name}
                    </Typography>
                    <Typography
                      variant="label"
                      className="!text-sm md:!text-lg !opacity-85 !mb-0 !mt-1"
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
        <div className="flex justify-center pt-2">
          <Button
            variant="secondary"
            size="lg"
            className="!rounded-full !px-10 md:!px-14 gap-2 !font-bold !text-base md:!text-lg hover:!bg-gray-100 transition-all duration-300 shadow-lg"
          >
            <span className="w-6 h-6 md:w-7 md:h-7 bg-[#FF3008] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </span>
            Order Now
          </Button>
        </div>
      </Container>
    </Section>
  );
}
