import React from "react";
import Typography, {
  TypographyVariant,
} from "../../../components/common/Typography";

const variants: TypographyVariant[] = [
  "h1",
  "h2",
  "h3",
  "lead1",
  "lead2",
  "label",
  "body",
];

export default function ComponentsShowcase() {
  return (
    <div className="min-h-screen bg-[#fafafa] py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <header className="mb-20 border-b border-gray-200 pb-10">
          <Typography variant="h1" className="text-black mb-4">
            Typography System
          </Typography>
          <Typography variant="body" className="text-slate-600 max-w-2xl">
            A comprehensive showcase of the Root Beverages typography system,
            featuring the elegant
            <span className="font-berkshire px-1 text-slate-800 italic">
              Berkshire Swash
            </span>
            and the modern{" "}
            <span className="font-poppins px-1 text-slate-800">Poppins</span>{" "}
            familias.
          </Typography>
        </header>

        <section className="space-y-16">
          {/* Default Styles */}
          <div>
            <Typography
              variant="label"
              className="uppercase tracking-widest text-slate-400 mb-8 block"
            >
              Default Styles (Auto-applied Fonts)
            </Typography>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
              {variants.map((variant) => (
                <div key={`default-${variant}`} className="group relative">
                  <span className="absolute -left-12 top-0 text-[10px] font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                    {variant}
                  </span>
                  <Typography variant={variant}>
                    The quick brown fox jumps over the lazy dog. ({variant})
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-40 text-center border-t border-gray-100 pt-10">
          <Typography variant="label" className="text-slate-400">
            Root Beverages &copy; 2026 Design System
          </Typography>
        </footer>
      </div>
    </div>
  );
}
