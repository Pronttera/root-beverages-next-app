"use client";
import React from "react";
import Section from "../components/common/Section";
import Container from "../components/common/Container";
import Typography from "../components/common/Typography";
import FlowerButton from "../components/common/FlowerButton";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    name: "Orange ka Zing in Every Sip",
    ingredients:
      "Perfect for desi summers, a refreshing citrus burst with that iconic Indian sweetness.",
    bgColor: "#FF8F00",
    textColor: "#ffffff",
    image: "/flavours/orange.png",
  },
  {
    id: 1,
    name: "Jeera Da Jalwa",
    ingredients:
      "Iconic roasted jeera flavour with a punch of authentic Punjabi zing.",
    bgColor: "#5D4037",
    textColor: "#ffffff",
    image: "/flavours/jeera.png",
  },
  {
    id: 2,
    name: "Kokam Ka Cool Swag",
    ingredients:
      "Beat the heat with this cooling and tangy kokam, straight from the shores.",
    bgColor: "#D32F2F",
    textColor: "#ffffff",
    image: "/flavours/kokam.png",
  },
  {
    id: 5,
    name: "Classic Cola, Desi Soul",
    ingredients:
      "India’s favourite cola now bottled with a desi twist to beat the heat",
    bgColor: "#263238",
    textColor: "#ffffff",
    image: "/flavours/cola.png",
  },
  {
    id: 4,
    name: "Amrood Ka Asli Swad",
    ingredients:
      "Rich, aromatic guava from Allahabad, now with a refreshing fizzy twist.",
    bgColor: "#EC407A",
    textColor: "#ffffff",
    image: "/flavours/guava.png",
  },
];

export default function FlavoursSection() {
  return (
    <Section
      disableContainer
      className="!px-0 !py-0 overflow-hidden"
      style={{ backgroundColor: "#0060d1" }}
      id="our-flavours"
    >
      <style>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          margin: 0 4px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 6px;
          background: white;
        }
        .swiper-button-disabled {
          opacity: 0.3;
          pointer-events: none;
        }
        .flavour-card-hover {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .swiper-slide-active .flavour-card-hover {
          transform: translateY(-8px);
        }
      `}</style>

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
      <Container className="pt-10 pb-8 md:pt-20 md:pb-16 space-y-12 md:space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10 px-4 md:px-0">
          <div className="max-w-3xl">
            <span className="inline-block bg-white text-black text-md px-4 py-1 rounded-full mb-4 md:mb-6">
              Our Sodas
            </span>
            <Typography variant="h2" className="!text-white">
              Flavours from
              <br />
              the Roots.
            </Typography>
          </div>
          <div className="max-w-md md:pt-16">
            <p className="text-white/90 text-base md:text-[18px] leading-relaxed">
              A curated range of bold, fizzy beverages inspired by the desi
              flavours we grew up loving. From nostalgic classics like jeera to
              playful modern twists like cola, every bottle is crafted to feel
              familiar yet refreshingly new.
            </p>
          </div>
        </div>

        {/* ── Carousel ── */}
        <div className="relative mb-0 mx-auto w-full px-0 md:px-12 group">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1.15}
            centeredSlides={true}
            grabCursor={true}
            loop={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 24,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
                centeredSlides: false,
              },
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
            }}
            className="!pb-6 md:!pb-12"
          >
            {FLAVOURS.map((card) => (
              <SwiperSlide key={card.id} className="h-auto pb-8 pt-4">
                <div
                  className="flavour-card-hover flex-shrink-0 rounded-[2rem] overflow-hidden flex flex-col shadow-xl"
                  style={{
                    backgroundColor: card.bgColor,
                    height: "100%",
                    minHeight: "480px",
                  }}
                >
                  {/* Image */}
                  <div className="">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full object-cover drop-shadow-2xl"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 px-8 py-8 flex flex-col justify-end space-y-2">
                    <Typography
                      variant="lead2"
                      style={{
                        color: card.textColor,
                        fontWeight: 900,
                        lineHeight: 1.1,
                      }}
                    >
                      {card.name}
                    </Typography>
                    <Typography
                      variant="body"
                      className="!mt-2"
                      style={{ color: card.textColor, opacity: 0.9 }}
                    >
                      {card.ingredients}
                    </Typography>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ── Left & Right Arrows (Desktop & Mobile) ── */}
          <button
            aria-label="Previous flavour"
            className="swiper-button-prev-custom flex absolute left-1 md:-left-4 lg:-left-2 top-[45%] md:top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white shadow-xl items-center justify-center transition-all duration-300 z-20 active:scale-95 hover:scale-110 cursor-pointer text-black"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            aria-label="Next flavour"
            className="swiper-button-next-custom flex absolute right-1 md:-right-4 lg:-right-2 top-[45%] md:top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white shadow-xl items-center justify-center transition-all duration-300 z-20 active:scale-95 hover:scale-110 cursor-pointer text-black"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* ── Pagination ── */}
          <div className="flex justify-center items-center mt-6 z-20 relative">
            <div className="swiper-pagination-custom flex items-center justify-center min-w-[80px]"></div>
          </div>
        </div>

        {/* ── Order Now CTA ── */}
        <div className="flex justify-center">
          <FlowerButton
            label="Order Now"
            textColor="#E23375"
            bg="white"
            onClick={() => alert("Stay thirsty… we’re coming soon.")}
          />
        </div>
      </Container>
    </Section>
  );
}
