"use client";
import React from "react";
import { motion } from "framer-motion";
import Typography from "../components/common/Typography";

const TESTIMONIALS = [
  {
    quote:
      "Perfect drink to pair with snacks. Cold, fizzy, and actually satisfying.",
    author: "Sneha Patel",
    bg: "#B0003A",
    text: "#fff",
  },
  {
    quote:
      "I didn't expect it to be this good. Feels desi but still new somehow.",
    author: "Karan Malhotra",
    bg: "#F472B6",
    text: "#fff",
  },
  {
    quote:
      "Light, fizzy, and actually refreshing. You can tell it’s made with thought.",
    author: "Ananya Iyer",
    bg: "#2E8B57",
    text: "#fff",
  },
  {
    quote:
      "I tried it once and now I keep stocking it at home. Guava is my favourite!",
    author: "Priya Nair",
    bg: "#8B0000",
    text: "#fff",
  },
  {
    quote:
      "Reminds me of those childhood summer drinks, but way more refreshing.",
    author: "Arhaan Shaikh",
    bg: "#DCE34F",
    text: "#1a1a1a",
  },
  {
    quote:
      "Proper desi flavours done right. Feel like having it again and again.",
    author: "Vikram Singh",
    bg: "#FF8F00",
    text: "#fff",
  },
];

const SHAPES = [
  "/marquee-images/1.png",
  "/marquee-images/2.png",
  "/marquee-images/3.png",
  "/marquee-images/4.png",
  "/marquee-images/ice.png",
];

const LOOP = [...TESTIMONIALS, ...TESTIMONIALS];

export default function TestimonialSection({ hideCard = false }: any) {
  return (
    <section
      className={`dotted-bg pt-20 pb-0 md:py-32 min-h-[650px] ${hideCard ? "bg-transparent" : "bg-white"}`}
      id={hideCard ? undefined : "testimonials"}
    >
      {/* Heading */}
      {!hideCard && (
        <Typography variant="h2" className="!text-center md:!mb-16 mb-8">
          What our sippers say
        </Typography>
      )}

      {/* Marquee */}
      <div className="overflow-x-hidden overflow-y-visible py-15">
        <motion.div
          className="flex gap-10 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {LOOP.map((item, i) => {
            const isUp = i % 2 === 0;

            return (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{
                  transform: `translateY(${isUp ? "-40px" : "40px"})`,
                }}
              >
                {/* CARD */}
                {!hideCard && (
                  <div
                    className="rounded-3xl p-8 w-[280px] shadow-lg text-center"
                    style={{
                      backgroundColor: item.bg,
                      color: item.text,
                    }}
                  >
                    <p className="font-bold text-lg leading-snug">
                      "{item.quote}"
                    </p>
                    <p className="mt-4 text-sm italic opacity-80">
                      {item.author}
                    </p>
                  </div>
                )}

                {/* SVG */}
                <img
                  src={SHAPES[i % SHAPES.length]}
                  className="w-38 h-38 md:w-80 md:h-80 mt-4"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
