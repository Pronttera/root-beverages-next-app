 "use client";
import React from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "So refreshing I forgot it's actually good for me. Thanks Root!",
    author: "Juliana Kim",
    bg: "#B0003A",
    text: "#fff",
  },
  {
    quote: "Tastes amazing and my gut is basically doing backflips. Root is a game-changer!",
    author: "Ravi Malhotra",
    bg: "#F472B6",
    text: "#fff",
  },
  {
    quote: "I didn't expect my stomach to smile, but here we are. Root is my new happy place in a bottle.",
    author: "Tina Lawrence",
    bg: "#2E8B57",
    text: "#fff",
  },
  {
    quote: "My digestive system says a big thank you. Root is like a party for my gut, and everyone's invited!",
    author: "Liam Sutherland",
    bg: "#8B0000",
    text: "#fff",
  },
  {
    quote: "Every sip is like a fizzy high five to my gut. Root is the best thing I've done for my digestion in ages!",
    author: "Benita Tan",
    bg: "#DCE34F",
    text: "#1a1a1a",
  },
];

const SHAPES = [
  "/testimony-shape1.svg",
  "/testimony-shape2.svg",
  "/testimony-shape3.svg",
  "/testimony-shape4.svg",
  "/testimony-shape5.svg",
];

const LOOP = [...TESTIMONIALS, ...TESTIMONIALS];

export default function TestimonialSection() {
  return (
    <section className="dotted-bg bg-white py-20 md:py-32 min-h-[650px]" id="why-us">
      
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black">
          What our sippers say
        </h2>
      </div>

      {/* Marquee */}
      <div className="overflow-x-hidden overflow-y-visible py-15">
        <motion.div
          className="flex gap-10 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
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
                <div
                  className="rounded-3xl p-8 w-[250px] shadow-lg text-center"
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

                {/* SVG */}
                <img
                  src={SHAPES[i % SHAPES.length]}
                  className="w-28 h-28 md:w-58 md:h-58 mt-4"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}