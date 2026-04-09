 "use client";
import React, { useState } from "react";
import { Phone, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function CollaborationSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="lets-colloborate"
      className="relative dotted-bg py-32 px-6 md:px-16 lg:px-24"
    >
      <div className="absolute left-0 top-[10%] w-full h-[600px] bg-[#E53935] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div className="text-white md:mt-5 mt-15">
          <h2
            className="text-4xl md:text-6xl font-black"
            style={{ WebkitTextStroke: "2px black", paintOrder: "stroke fill" }}
          >
            Collaborate with us
          </h2>
          <p className="mt-4 text-lg max-w-lg leading-relaxed">
            Ready to bring something fresh to the table? We are always looking
            for exciting partnerships and distributors. Let's grow together!
          </p>
          <div className="mt-6 flex flex-col gap-4 max-w-md">
            {[
              { text: "+65 8446 4028", icon: <Phone size={20} /> },
              { text: "info@rootbeverages.asia", icon: <Mail size={20} /> },
              { text: "rootbeverages.asia", icon: <Globe size={20} /> },
            ].map((item) => (
              <div
                key={item.text}
                className="group flex items-center gap-4 bg-white text-black rounded-full px-6 py-3 w-full text-lg font-semibold transition-all duration-300 hover:text-red-500 cursor-pointer"
              >
                <span className="text-black group-hover:text-red-500 transition-colors">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-lg text-white/80 leading-relaxed">
            <strong className="text-white">Root Beverages Pvt Ltd</strong>
            <br />
            7 Temasek Blvd, #12–07 Suntec
            <br />
            Tower One, Australia, 038987
          </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl px-10 py-12 w-full max-w-xl ml-auto -mt-35 min-h-[800px] flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              {[
                { name: "name", placeholder: "Name" },
                { name: "email", placeholder: "Email" },
                { name: "phone", placeholder: "Phone Number" },
                { name: "city", placeholder: "City" },
                { name: "country", placeholder: "Country" },
              ].map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={(form as any)[field.name]}
                  onChange={handleChange}
                  className="border bg-[#fdf5f5] border-[#f1dede] rounded-xl px-5 py-4 text-lg outline-none focus:border-red-500"
                />
              ))}
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                className="border bg-[#fdf5f5] border-[#f1dede] rounded-xl px-5 py-4 text-lg outline-none focus:border-red-500 resize-none"
              />
            </div>

            {/* BUTTON */}
            <div className="relative flex justify-center mt-8">

              {/* LEFT FLOWER — desktop only */}
              <motion.img
                src="/yuzu-lavender-backdrop2.svg"
                alt="flower"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="hidden md:block absolute left-30 w-[60px] h-[60px] -translate-x-1/2"
              />

              {/* RIGHT FLOWER — desktop only */}
              <motion.img
                src="/yuzu-lavender-backdrop2.svg"
                alt="flower"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="hidden md:block absolute right-30 w-[60px] h-[60px] translate-x-1/2"
              />

              <button className="relative z-10 bg-[#E53935] text-white font-bold w-[260px] py-4 rounded-full text-lg shadow-md hover:scale-105 transition-all">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}