"use client";
import React, { useState, useEffect } from "react";
import { Menu, ChevronLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

interface NavLink {
  label: string;
  href: string;
}

interface AppBarProps {
  brandText?: string;
  brandImageSrc?: string;
  brandImageAlt?: string;
  navLinks?: NavLink[];
}

const AppBar: React.FC<AppBarProps> = ({
  brandText = "Root Beverages",
  brandImageSrc,
  brandImageAlt = "Brand Logo",
  navLinks = [
    { label: "Home", href: "/" },
    { label: "About Roots", href: "#about-roots" },
    { label: "Our Flavours", href: "#our-flavours" },
    { label: "Why Us", href: "#why-us" },
    { label: "Let's Colloborate", href: "#lets-colloborate" },
  ],
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    // Initial checks
    handleHashChange();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  const handler = (href: string) => {
    router.push(href);
    // Explicitly update hash if it's an internal link
    if (href.startsWith("#")) {
      setCurrentHash(href);
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return currentHash === href;
    }
    if (href === "/") {
      return (
        pathname === "/" &&
        (!currentHash || currentHash === "" || currentHash === "#")
      );
    }
    return pathname === href;
  };

  return (
    <>
      {/* AppBar */}
      <header
        className={`fixed top-0 left-0 w-full border-b transition-all duration-300 bg-tomato shadow-md text-black border-slate-200`}
        style={{
          zIndex: 55,
        }}
      >
        <nav className="px-4 py-4 md:px-8">
          <div className="flex justify-between items-center max-w-7xl mx-auto cursor-pointer">
            {/* Brand Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handler("/")}
            >
              <Image
                src="/root-beverages-logo.png"
                alt="Root Beverages"
                width={160}
                height={60}
                className="h-8 md:h-19 w-auto object-contain"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <span
                  key={link.label}
                  className={`cursor-pointer transition-all duration-200 relative group text-white 
                    ${
                      isActive(link.href)
                        ? "text-white !font-semibold scale-105"
                        : "hover:text-white opacity-80 hover:opacity-100"
                    }`}
                  onClick={() => handler(link.href)}
                >
                  {link.label}
                </span>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleDrawer}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        role="navigation"
        className={`fixed top-0 right-0 h-full w-full text-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out`}
        style={{
          zIndex: 55,
          transition: "0.4s all",
          backgroundImage: "radial-gradient(at 0% 40%, #ff8a8a, #3637538a)",
          backgroundAttachment: "fixed",
          backdropFilter: "blur(10px)",
          opacity: isDrawerOpen ? 1 : 0,
          visibility: isDrawerOpen ? "visible" : "hidden",
        }}
      >
        {/* Drawer Navigation Links */}
        <nav className="flex flex-col p-4 space-y-4 items-end justify-center h-full pb-2 ">
          {navLinks.map((link) => (
            <a
              key={link.label}
              onClick={() => {
                closeDrawer();
                handler(link.href);
              }}
              className={`text-white hover:text-white transition-all duration-200 text-3xl border-b border-b-slate-500/20 py-4 px-4 w-[95%] active:bg-slate-200/10 
                ${
                  isActive(link.href)
                    ? "font-bold border-b-white"
                    : "font-medium opacity-70"
                }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={closeDrawer}
            className="py-2 px-4 text-gray-700 bg-white rounded-full mt-8 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100 flex items-center gap-2"
            aria-label="Close menu"
          >
            <ChevronLeft className="h-4 w-4" />

            <span>Go Back</span>
          </button>
        </nav>
      </aside>
    </>
  );
};

export default AppBar;
