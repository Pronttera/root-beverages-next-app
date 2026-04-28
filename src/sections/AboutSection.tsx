"use client";
import React, { useRef } from "react";
import Section from "../components/common/Section";
import Container from "../components/common/Container";
import Typography from "../components/common/Typography";
import Button from "../components/common/Button";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const list = [
    {
      id: 1,
      title: "Made with\nRO Water",
      description:
        "Experience pure clarity and refreshing taste, crafted using RO-treated water to ensure high-quality standards",
      image: "/about-images/ro-water.PNG",
      backgroundColor: "#FF8F00", // orange
      textColor: "white",
      position: "left",
    },
    {
      id: 2,
      title: "No\nSulfur",
      description:
        "Experience sweetness of Root Beverages, crafted using sulfur-free sugar and free from artificial sweeteners",
      image: "/about-images/2.png",
      backgroundColor: "#FDD835", // yellow
      textColor: "black",
      position: "right",
    },
    {
      id: 3,
      title: "Supports Local\nCommunity",
      description:
        "We are committed to supporting local communities by generating employment opportunities",
      image: "/about-images/local-community.PNG",
      backgroundColor: "#43A047", // green
      textColor: "white",
      position: "left",
    },
    {
      id: 4,
      title: "FSSAI Standard\nHygiene",
      description:
        "We follow strict multi-step quality control process. From ingredient selection to final packaging, every stage is monitored to ensure safety.",
      image: "/about-images/fssai-standards.PNG",
      backgroundColor: "#D32F2F", // red/kokam
      textColor: "white",
      position: "right",
    },
  ];
  return (
    <Section
      id="about-roots"
      className="dotted-bg bg-tomato pt-20 pb-12 md:py-32 min-h-screen"
    >
      <Container>
        {/* Mobile layout */}
        <div className="flex flex-col gap-0 md:hidden">
          {list.map((item, index) => (
            <MobileAboutCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Desktop layout — completely untouched */}
        <div className="hidden md:block space-y-32">
          {list.map((item, index) => (
            <DesktopAboutCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

/* ─── Mobile Card ─────────────────────────────────────── */
const MobileAboutCard = ({ item, index }: { item: any; index: number }) => {
  const stickyTop = 80 + index * 12;

  return (
    <div
      className="sticky rounded-2xl mx-1 mb-6"
      style={{
        top: stickyTop,
        backgroundColor: item.backgroundColor,
        zIndex: 10 + index,
        // card-mask shape — same as desktop
        maskImage: "url(/card-mask.svg)",
        maskSize: "cover",
        maskPosition: "center",
        maskRepeat: "no-repeat",
        WebkitMaskImage: "url(/card-mask.svg)",
        WebkitMaskSize: "cover",
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        // bubbles bg like desktop
        backgroundImage: "url(/bubbles-1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Image block with flower mask + bottom padding so it doesn't clip */}
      <div className="w-full px-4 pb-16 pt-2">
        <div
          className="w-full h-56"
          style={{
            WebkitMaskImage: "url(/flower-mask.svg)",
            maskImage: "url(/flower-mask.svg)",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            backgroundImage: `url('${item.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      {/* Text block */}
      <div className="flex flex-col gap-3 px-6 pt-16 pb-4">
        <Typography
          variant="h2"
          style={{
            WebkitTextFillColor: "white",
            WebkitTextStrokeWidth: "0.08em",
            WebkitTextStrokeColor: "black",
            paintOrder: "stroke fill",
            whiteSpace: "pre-line",
            lineHeight: 1.3,
            // WebkitTextStrokeWidth: "0.04em",
            // WebkitTextStrokeColor: "black",
            // paintOrder: "stroke fill",
          }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body"
          className={`font-medium leading-relaxed ${
            item.textColor === "white" ? "!text-white" : "!text-black"
          }`}
        >
          {item.description}
        </Typography>
      </div>
    </div>
  );
};

/* ─── Desktop Card — original, zero changes ──────────── */
const DesktopAboutCard = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -60 : 60, 0, index % 2 === 0 ? 60 : -60],
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -25 : 25, 0, index % 2 === 0 ? 25 : -25],
  );

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <motion.div
      ref={ref}
      className={`sticky top-48 mx-auto rounded-2xl h-[600px] aspect-video flex gap-12 px-12 py-16 ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
      style={{
        backgroundColor: item.backgroundColor,
        maskImage: "url(/card-mask.svg)",
        maskSize: "cover",
        maskPosition: "center",
        maskRepeat: "no-repeat",
        color: item.textColor,
        backgroundImage: "url(/bubbles-1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        rotate,
        scale,
      }}
    >
      <div
        className="w-1/2 h-full"
        style={{
          WebkitMaskImage: "url(/flower-mask.svg)",
          maskImage: "url(/flower-mask.svg)",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          backgroundImage: `url('${item.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className={`flex flex-col gap-6 w-1/2`}>
        <motion.div style={{ x }}>
          <Typography
            variant="h2"
            style={{
              // fontWeight: 900,
              // color: "black",
              // fontSize: 70,
              WebkitTextFillColor: "white",
              WebkitTextStrokeWidth: "0.04em",
              WebkitTextStrokeColor: "black",
              paintOrder: "stroke fill",
              whiteSpace: "pre-line",
            }}
          >
            {item.title}
          </Typography>
        </motion.div>
        <Typography
          variant="body"
          className={`font-medium leading-relaxed max-w-md ${
            item.textColor === "white" ? "!text-white" : "!text-black"
          }`}
        >
          {item.description}
        </Typography>
      </div>
    </motion.div>
  );
};

export default AboutSection;
