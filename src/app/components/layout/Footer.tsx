 "use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="dotted-bg bg-white pt-20">

      {/* ── Desktop layout — 100% original ── */}
      <div className="hidden md:grid max-w-7xl mx-auto px-6 md:px-16 lg:px-24 md:grid-cols-4 gap-10 items-start">
        <div>
          <h3 className="font-black text-2xl mb-4">Company</h3>
          <ul className="space-y-3 text-gray-800 text-lg">
            <li className="hover:text-red-500 cursor-pointer">
              <Link href="/privacy-policy" className="hover:text-red-500">Privacy Policy</Link>
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              <Link href="/terms-of-service" className="hover:text-red-500">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-black text-2xl mb-4">Home</h3>
          <ul className="space-y-3 text-gray-800 text-lg">
            <li className="hover:text-red-500 cursor-pointer">About MiCha</li>
            <li className="hover:text-red-500 cursor-pointer">Our Flavours</li>
            <li className="hover:text-red-500 cursor-pointer">Testimonial</li>
            <li className="hover:text-red-500 cursor-pointer">FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-black text-2xl mb-4">Connect</h3>
          <ul className="space-y-3 text-gray-800 text-lg">
            <li className="hover:text-red-500 cursor-pointer">Collaborate</li>
            <li className="hover:text-red-500 cursor-pointer">Instagram</li>
            <li className="hover:text-red-500 cursor-pointer">LinkedIn</li>
            <li className="hover:text-red-500 cursor-pointer">Facebook</li>
          </ul>
        </div>
        <div className="flex flex-col items-start md:items-center gap-4 md:-mt-12">
          <Image src="/root-beverages-logo.png" alt="Root Beverages Logo" width={200} height={80} className="object-contain" />
          <div className="text-right md:-mt-7">
            <p className="text-black font-black text-2xl rotate-[-5deg] inline-block">SPARKLES OF</p>
            <br />
            <p className="text-black font-black text-4xl rotate-[-3deg] inline-block">GOODNESS</p>
          </div>
        </div>
      </div>

      {/* ── Mobile layout ── */}
      <div className="md:hidden px-6">
        {/* Row 1 — Company + Home */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="font-black text-xl mb-3">Company</h3>
            <ul className="space-y-2 text-gray-800 text-base">
              <li className="hover:text-red-500 cursor-pointer">
                <Link href="/privacy-policy" className="hover:text-red-500">Privacy Policy</Link>
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                <Link href="/terms-of-service" className="hover:text-red-500">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-xl mb-3">Home</h3>
            <ul className="space-y-2 text-gray-800 text-base">
              <li className="hover:text-red-500 cursor-pointer">About MiCha</li>
              <li className="hover:text-red-500 cursor-pointer">Our Flavours</li>
              <li className="hover:text-red-500 cursor-pointer">Testimonial</li>
              <li className="hover:text-red-500 cursor-pointer">FAQ</li>
            </ul>
          </div>
        </div>

        {/* Row 2 — Connect */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          <div>
            <h3 className="font-black text-xl mb-3">Connect</h3>
            <ul className="space-y-2 text-gray-800 text-base">
              <li className="hover:text-red-500 cursor-pointer">Collaborate</li>
              <li className="hover:text-red-500 cursor-pointer">Instagram</li>
              <li className="hover:text-red-500 cursor-pointer">LinkedIn</li>
              <li className="hover:text-red-500 cursor-pointer">Facebook</li>
            </ul>
          </div>
        </div>

        {/* Row 3 — Logo + tagline centered */}
        <div className="flex flex-col items-center gap-3 pb-10">
          <Image src="/root-beverages-logo.png" alt="Root Beverages Logo" width={160} height={44} className="object-contain" />
          <div className="text-center">
            <p className="text-black font-black text-xl rotate-[-5deg] inline-block">SPARKLES OF</p>
            <br />
            <p className="text-black font-black text-3xl rotate-[-3deg] inline-block">GOODNESS</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR — shared */}
      <div className="mt-16 bg-[#E53935] text-white text-center py-4 text-sm font-medium">
        © Copyright by Root Beverages. All rights reserved. | Designed by Ponttera
      </div>
    </footer>
  );
}