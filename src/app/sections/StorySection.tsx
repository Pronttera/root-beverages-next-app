import React from "react";
import Section from "../components/common/Section";
import Container from "../components/common/Container";
import Typography from "../components/common/Typography";

export default function StorySection() {
  return (
    <Section id="our-story" className="bg-[#fdfcf9] pt-20 pb-24 md:py-32">
      <Container className="space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Typography variant="h2">The Story Behind the Sip</Typography>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            Root Beverages was born out of a simple desire: to bring the
            authentic, nostalgia-filled tastes of our childhood streets directly
            into a modern, sparkling bottle. Our founder, Aseem Shaikh,
            envisioned a beverage that didn't just quench thirst, but sparked
            joy and a sense of 'desi' belonging.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 pt-8">
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white/50 bg-white">
              <img
                src="/teams/asim.PNG"
                alt="Aseem Shaikh - Founder"
                className="w-full h-auto object-cover max-w-sm transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 pt-16 text-white text-center transition-all duration-300">
                <h3 className="font-bold text-3xl">Aseem Shaikh</h3>
                <p className="text-sm uppercase tracking-widest text-[#FF8F00] font-bold mt-2">
                  Chief Root Officer
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 space-y-8">
            <h3 className="font-bold text-3xl md:text-4xl text-black">
              A Passion for Purity
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mr. Aseem Shaikh, the visionary behind Root Beverages & Co., is
              driven by a passion for bringing authentic, rooted flavours to a
              new generation. Inspired by India’s rich regional tastes and
              nostalgic refreshment culture, he set out to create a brand that
              does more than quench thirst — it tells a story.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              &quot;I wanted to build something that felt real. Not another
              artificial, overly sweet drink, but something that had undeniable
              character. That meant zero sulfur, pure RO-treated water, and
              flavors that make you stop, smile, and remember a fond street
              memory.&quot;
            </p>
            <p className="text-lg text-black leading-relaxed font-bold">
              - Aseem Shaikh
            </p>
          </div>
        </div>

        {/* The Team */}
        <div className="pt-24 md:pt-32">
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
            <Typography variant="h2" className="!text-4xl md:!text-5xl">
              Meet the Core Team
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 max-w-4xl mx-auto">
            {/* Aakansha */}
            <div className="flex flex-col items-center group">
              <div className="relative overflow-hidden rounded-full w-56 h-56 md:w-64 md:h-64 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[6px] border-white mb-6">
                <img
                  src="/teams/akansha.PNG"
                  alt="Aakansha - Head of Marketing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h4 className="font-bold text-3xl text-black">Aakansha</h4>
              <p className="text-[#FF8F00] font-bold uppercase tracking-wider text-sm mt-2">
                Chief Fizz Officer
              </p>
              <p className="text-gray-600 text-center mt-4 max-w-xs text-lg">
                Our Chief Fizz Officer, leads the voice, vibe, and visibility of
                Root Beverages. From shaping the brand story to creating
                campaigns that spark conversation, she brings together culture,
                creativity, and communication to make every sip feel memorable.
              </p>
            </div>

            {/* Aliya */}
            <div className="flex flex-col items-center group">
              <div className="relative overflow-hidden rounded-full w-56 h-56 md:w-64 md:h-64 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[6px] border-white mb-6">
                <img
                  src="/teams/aliya.PNG"
                  alt="Aliya - Head of HR"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h4 className="font-bold text-3xl text-black">Aliya Shaikh</h4>
              <p className="text-[#D32F2F] font-bold uppercase tracking-wider text-sm mt-2">
                Chief Flavor Officer
              </p>
              <p className="text-gray-600 text-center mt-4 max-w-xs text-lg">
                Our Chief Flavor Officer, is the creative force behind the
                tastes that define Root Beverages. Inspired by India’s rich
                palette of regional flavours and childhood favourites, she
                brings together nostalgia, innovation, and craft to create
                drinks that feel both familiar and refreshingly new.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
