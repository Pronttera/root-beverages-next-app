"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../components/common/Section";
import Container from "../components/common/Container";
import Typography from "../components/common/Typography";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    id: 1,
    question: "What is Root Beverages?",
    answer:
      "Root Beverages Co. is our love letter to desi flavours. We are a proudly Indian carbonated beverage brand committed to redefining refreshment by reconnecting everyone with the country’s rich flavor heritage.",
    activeBg: "#FF8F00", // Orange (Nagpur Orange)
    inactiveBg: "#FBEF43",
    questionColor: "#FBEF43",
    answerColor: "#FFFFFF",
    inactiveTextColor: "#FF8F00",
  },
  {
    id: 2,
    question: "What makes Root Beverages different from other brands?",
    answer:
      "Root Beverages stands out because it doesn’t try to be another “generic soda” it builds on familiar Indian taste memories and gives them a modern, cooler twist. Most beverages today play it safe with predictable tastes. We go the other way bringing back bold, desi flavours that people actually grew up loving. From match days to daily breaks, it’s built to feel familiar yet exciting. It is Made with RO Water, has No Sulfur, and undertakes Rigorous Quality Checks - We follow a strict multi-step quality control process. From ingredient selection to final packaging, every stage is monitored to ensure safety.",
    activeBg: "#5D4037", // Jeera
    inactiveBg: "#FBEF43",
    questionColor: "#FBEF43",
    answerColor: "#FFFFFF",
    inactiveTextColor: "#5D4037",
  },
  {
    id: 3,
    question: "How do I become a distributor or a partner?",
    answer:
      "We are always looking to expand the Root Beverages family! If you are interested in becoming a distributor or a strategic partner, simply fill out the inquiry on our website and our dedicated team will promptly review your submission and reach out to discuss potential collaborations.",
    activeBg: "#D32F2F", // Kokam
    inactiveBg: "#FBEF43",
    questionColor: "#FBEF43",
    answerColor: "#FFFFFF",
    inactiveTextColor: "#D32F2F",
  },
  {
    id: 4,
    question:
      "I’m interested in selling Root Beverages, what is the next step?",
    answer:
      "Nothing makes us happier than adding partners. Contact us through any medium of your choosing listed on our website, we will discuss and close on mutually agreed terms!",
    activeBg: "#EC407A", // Guava
    inactiveBg: "#FBEF43",
    questionColor: "#FBEF43",
    answerColor: "#FFFFFF",
    inactiveTextColor: "#EC407A",
  },
  {
    id: 5,
    question: "Can I sell Root Beverages in my store or cafe?",
    answer:
      "Absolutely! Root beverages make an excellent addition to any retail store, cafe, or restaurant looking to offer their customers a refreshing taste of childhood. We encourage you to get in touch with us directly to discuss our wholesale programs, delivery options, and how Root Beverages can become a part of your SKU/Menu.",
    activeBg: "#263238", // Cola
    inactiveBg: "#FBEF43",
    questionColor: "#FBEF43",
    answerColor: "#FFFFFF",
    inactiveTextColor: "#263238",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <>
      <Section
        id="testimonial-section"
        className="dotted-bg bg-tomato py-20 md:py-32 scroll-mt-25"
      >
        <Container className="max-w-4xl px-4 md:px-0">
          <Typography
            variant="h2"
            className="!mb-12 !md:mb-24 text-center"
            style={{
              fontWeight: 900,
              color: "white",
            }}
          >
            Frequently Asked Questions
          </Typography>
          <div className="flex flex-col gap-6">
            {FAQ_DATA.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

const AccordionItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: any;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
      <motion.div
        layout
        className="relative z-10 -px-8 -py-6 -md:px-12 -md:py-8"
        initial={false}
        animate={{
          backgroundColor: isOpen ? item.activeBg : item.inactiveBg,
          borderBottomLeftRadius: isOpen ? "8px" : "0",
          borderBottomRightRadius: isOpen ? "8px" : "0",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative flex items-center justify-between gap-4 px-4 py-2 min-h-[62px]">
          {/* LEFT FLOWER */}
          <div className="absolute top-0 left-[-20px] md:left-[-30px] w-6  md:h-[62px] h-[60px] md:w-10 z-0">
            <FlowerDecoration
              color={isOpen ? item.activeBg : item.inactiveBg}
            />
          </div>

          {/* RIGHT FLOWER */}
          <div className="absolute top-0 right-[-16px] md:right-[-29px] w-6  md:h-[62px] h-[60px] md:w-9 z-0">
            <FlowerDecoration
              color={isOpen ? item.activeBg : item.inactiveBg}
              flipped
            />
          </div>

          <Typography
            className="flex-1 font-black text-base md:text-xl mb-0!"
            style={{
              color: isOpen ? item.questionColor : item.inactiveTextColor,
              transition: "color 0.3s ease",
            }}
          >
            {item.question}
          </Typography>

          <motion.div
            animate={{
              rotate: isOpen ? 180 : 0,
              backgroundColor: isOpen ? item.inactiveBg : item.activeBg,
            }}
            className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center"
          >
            <ChevronDown
              className="w-5 h-5 md:w-6 md:h-6"
              style={{ color: isOpen ? item.activeBg : item.inactiveBg }}
            />
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 0 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-4 pt-0"
            >
              <Typography
                variant="body"
                className="text-lg md:text-xl font-medium leading-relaxed opacity-90"
                style={{ color: item.answerColor }}
              >
                {item.answer}
              </Typography>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const FlowerDecoration = ({
  color,
  flipped,
}: {
  color: string;
  flipped?: boolean;
}) => {
  const clipId = React.useId();
  return (
    <svg
      viewBox="0 0 34 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{
        transform: `${flipped ? "scaleX(-1)" : ""} rotate(180deg)`,
        transition: "fill 0.3s ease",
      }}
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M33.72 39.3C33.72 41.13 33.33 42.94 32.58 44.5C30.86 48.24 28.06 48.77 28.06 48.77C23.18 50.27 11.98 47.55 8.11 46.55C7.74 46.43 7.37 46.79 7.32 47.31C7.28 47.51 7.26 47.72 7.23 47.91C7.13 48.43 7.39 48.96 7.8 49.03C11.99 49.72 22.75 51.77 26.89 55.11H26.91C26.91 55.11 29.44 56.78 30.18 61.04C30.62 63.4 30.4 65.91 29.52 68.05V68.1L29.5 68.12C28.59 70.24 27.09 71.84 25.36 72.6C24.53 72.98 23.73 73.13 23.03 73.13C21.11 73.13 19.81 72.08 19.81 72.08C15.38 69.12 8.08 57.66 5.56 53.58C5.32 53.18 4.9 53.13 4.6 53.46C4.58 53.46 4.56 53.49 4.56 53.49C4.25 53.82 4.19 54.42 4.45 54.82C7.11 58.78 14.43 70.15 15.91 76.42H15.93C15.93 76.42 16.98 79.9 15.39 83.76C15.04 84.66 14.58 85.47 14.05 86.19C13.31 87.17 12.4 87.93 11.4 88.43H11.35C10.57 88.79 9.75 88.97 8.93 88.97H0V0C1.85 0.1 3.6 1.1 4.9 2.81C7.3 5.82 7.11 9.56 7.11 9.56C7.17 16.11 2.9 29.75 1.27 34.68C1.09 35.21 1.33 35.8 1.74 35.95C2.05 36.04 2.35 36.16 2.62 36.3C2.99 36.52 3.42 36.25 3.53 35.75C4.82 30.61 8.5 16.73 11.83 11.92C12.03 11.56 13.75 8.96 16.85 8.84C17 8.84 17.13 8.82 17.28 8.82C18.96 8.82 20.63 9.61 21.94 11.06L21.96 11.11C23.36 12.71 24.27 14.95 24.47 17.35C24.93 21.69 23.01 24.46 23.01 24.46C19.94 29.6 10.24 36.73 6.62 39.26C6.26 39.5 6.15 40.09 6.36 40.55C6.43 40.69 6.49 40.83 6.56 40.97C6.74 41.45 7.17 41.62 7.52 41.33C9.22 39.9 12.47 37.23 15.88 34.8C19.29 32.39 22.9 30.22 25.34 29.72C25.34 29.72 28.09 28.87 30.74 31.54C32.21 32.97 33.23 35.09 33.6 37.52C33.6 37.54 33.62 37.57 33.62 37.57H33.6C33.68 38.14 33.72 38.72 33.72 39.3Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="33.72" height="88.97" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FAQSection;
