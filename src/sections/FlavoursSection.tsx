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
  mrp: string;
  offerPrice: string;
}

const FLAVOURS: FlavorCard[] = [
  {
    id: 3,
    name: "Orange ka Zing",
    ingredients:
      "Refreshing citrus burst with iconic Indian sweetness for desi summers.",
    bgColor: "#FF8F00",
    textColor: "#ffffff",
    image: "/flavours/orange.png",
    mrp: "₹12",
    offerPrice: "₹10",
  },
  {
    id: 1,
    name: "Jeera Da Jalwa",
    ingredients:
      "Iconic roasted jeera flavour with a punch of authentic Punjabi zing.",
    bgColor: "#5D4037",
    textColor: "#ffffff",
    image: "/flavours/jeera.png",
    mrp: "₹12",
    offerPrice: "₹10",
  },
  {
    id: 2,
    name: "Kokam Ka Cool Swag",
    ingredients:
      "Cooling and tangy coastal kokam to beat the scorching desi heat.",
    bgColor: "#D32F2F",
    textColor: "#ffffff",
    image: "/flavours/kokam.png",
    mrp: "₹12",
    offerPrice: "₹10",
  },
  {
    id: 5,
    name: "Classic Cola, Desi Soul",
    ingredients:
      "India’s favourite fizzy cola bottled with a bold, refreshing desi twist.",
    bgColor: "#263238",
    textColor: "#ffffff",
    image: "/flavours/cola.png",
    mrp: "₹12",
    offerPrice: "₹10",
  },
  {
    id: 4,
    name: "Amrood Ka Asli Swad",
    ingredients:
      "Rich, aromatic Allahabad guava packed with a crisp, sparkling fizz.",
    bgColor: "#EC407A",
    textColor: "#ffffff",
    image: "/flavours/guava.png",
    mrp: "₹12",
    offerPrice: "₹10",
  },
  {
    id: 6,
    name: "Mint Mojito: Pudina Swag",
    ingredients:
      "Crisp garden mint and zesty lime infused with an icy, sparkling chill.",
    bgColor: "#558B2F",
    textColor: "#ffffff",
    image: "/flavours/mint-mojito.jpg",
    mrp: "₹12",
    offerPrice: "₹10",
  },
  {
    id: 7,
    name: "Nimbu Jeera: Desi Dhamaka",
    ingredients:
      "Tangy lemon and roasted cumin for that iconic chatpata street kick.",
    bgColor: "#F9A825",
    textColor: "#ffffff",
    image: "/flavours/nimbu-jeera.jpg",
    mrp: "₹12",
    offerPrice: "₹10",
  },
  {
    id: 8,
    name: "Juicy Orange: Santra Blast",
    ingredients:
      "Sun-ripened juicy oranges loaded with vibrant citrus sweetness and fizz.",
    bgColor: "#EF6C00",
    textColor: "#ffffff",
    image: "/flavours/juicy-orange.jpg",
    mrp: "₹12",
    offerPrice: "₹10",
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
                slidesPerView: 1.5,
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
              <SwiperSlide
                key={card.id}
                className="!h-auto !p-0 rounded-2xl overflow-hidden shadow-xl"
              >
                <div
                  className="w-full h-[580px] md:h-[640px] flex flex-col justify-between rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: card.bgColor,
                  }}
                >
                  {/* Fixed Image Section */}
                  <div className="w-full h-[380px] md:h-[430px] flex-shrink-0 relative overflow-hidden bg-black/5">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Uniform Content Area */}
                  <div className="p-4 md:p-5 flex flex-col justify-between flex-1">
                    <div>
                      <Typography
                        variant="body"
                        className="!font-bold text-white text-lg md:text-xl !mb-1.5 leading-snug line-clamp-1"
                      >
                        {card.name}
                      </Typography>
                      <p className="text-sm md:text-base text-white/90 font-light leading-relaxed line-clamp-2 min-h-[44px]">
                        {card.ingredients}
                      </p>
                    </div>

                    {/* Uniform Pinned Pricing Row */}
                    <div className="pt-3 border-t border-white/20 flex items-center justify-between mt-auto">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-sm">
                          {card.offerPrice}
                        </span>
                        <span className="text-sm md:text-base text-white/70 line-through font-medium">
                          MRP {card.mrp}
                        </span>
                      </div>
                      <span className="bg-white text-black font-extrabold text-xs md:text-sm px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                        Save ₹2
                      </span>
                    </div>
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
