"use client";
import React, { useRef } from "react";
import Section from "../components/Common/Section";
import Container from "../components/Common/Container";
import Typography from "../components/Common/Typography";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const list = [
    {
      id: 1,
      title: "What is\nRoot?",
      description:
        "Bubbly, tangy, and full of life, Root is more than just a beverage. It’s a lightly fizzy and naturally fermented tea crafted to support your well-being. This invigorating drink is rich in beneficial bacteria, making it the perfect choice for a happy, thriving gut. Made with simple, natural ingredients, every sip offers a refreshing and delightful path to digestive harmony.",
      image: "/images/what-is-micha.png",
      backgroundColor: "#6DB54E", // Light Green
      textColor: "white",
      position: "left",
    },
    {
      id: 2,
      title: "Why Drink\nRoot?",
      description:
        "Root is like your gut’s best friend, bringing in the good bacteria to help you feel your best. It works to keep everything in balance, supporting a happy and harmonious digestive system. When your gut is happy, you will feel it throughout your day!",
      image: "/images/why-drink-micha.png",
      backgroundColor: "#FBEF43", // Light Pink
      textColor: "black",
      position: "right",
    },
    {
      id: 3,
      title: "When to\nDrink Root?",
      description:
        "You can enjoy Root anytime, anywhere! There’s no wrong moment to give your gut a little love. Whether it’s a busy morning, a midday pick-me-up, or winding down in the evening, Root fits seamlessly into your routine, helping you maintain balance and feel your best around the clock.",
      image: "/images/when-to-drink-micha.png",
      backgroundColor: "#7F4E9F", // Light Orange
      textColor: "white",
      position: "left",
    },
  ];

  return (
    <Section id="about-roots" className="py-20 md:py-32 min-h-screen">
      <Container>
        <div className="space-y-20 md:space-y-32 items-center">
          {list.map((item, index) => (
            <AboutCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

const AboutCard = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Moves the title horizontally based on scroll progress
  // If index is even (left image), it moves from -60px to 60px
  // If index is odd (right image), it moves from 60px to -60px
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
      {/* mask image - flower-mask.svg */}
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
          backgroundImage: `url('https://t4.ftcdn.net/jpg/09/10/09/75/360_F_910097561_8uUqHdglYYAPZQKWeH6VGJHHrST4u3OI.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className={`flex flex-col gap-6 w-1/2`}>
        <motion.div style={{ x }}>
          <Typography
            variant="h1"
            style={{
              fontWeight: 900,
              color: "black",
              fontSize: 70,
              WebkitTextFillColor: "white",
              WebkitTextStrokeWidth: "0.2em",
              WebkitTextStrokeColor: "black",
              paintOrder: "stroke fill",
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
