import React, { useRef, useState } from "react";
import {
  ArrowUpRight,
  CornerDownLeft,
  CornerDownLeftIcon,
  Menu,
  Undo2,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavigationSplashScreen from "~/Pages/NavigationSplashScreen";
import { ProntteraLabModal } from "~/components/sections/ProntteraLabModal";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";

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
  brandText = "Pronttera",
  brandImageSrc,
  brandImageAlt = "Brand Logo",
  navLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  const navigate = useNavigate();

  const navRef = useRef(null);

  const handler = (href: string) => {
    if (href.startsWith("http")) {
      window.location.href = href;
    } else {
      navRef.current?.navigateWithSplash(href, "", "");
    }
  };

  return (
    <>
      <NavigationSplashScreen ref={navRef} />
      {/* AppBar */}
      <header
        className={`fixed top-0 left-0 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "bg-slate-50 shadow-md text-black border-slate-200 dark:bg-slate-900 dark:text-white dark:border-b-slate-700"
            : "bg-transparent border-transparent text-slate-400"
        }`}
        style={{
          zIndex: 55,
        }}
      >
        <nav className="px-4 py-4 md:px-8">
          <div className="flex justify-between items-center max-w-7xl mx-auto cursor-pointer">
            {/* Brand Logo */}
            <div className="flex items-center" onClick={() => handler("/")}>
              <img
                src={brandImageSrc}
                alt={brandImageAlt}
                className="h-8 md:h-14 w-auto"
              />
              <span className="pt-1 ml-1 text-md md:text-2xl font-bold text-primary-dark dark:text-slate-400">
                {brandText}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <span
                  key={link.label}
                  // className="cursor-pointer hover:text-slate-400 transition-colors duration-200 cursor-pointer"
                  className={`cursor-pointer transition-colors duration-200 relative group 
        ${
          window.location.pathname === link.href
            ? "text-slate-400"
            : "hover:text-slate-400"
        }`}
                  onClick={() => handler(link.href)}
                >
                  {link.label}
                  {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-400 transition-all duration-300 group-hover:w-full "></span> */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-slate-400 transition-all duration-300 ${
                      window.location.pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </span>
              ))}
              <ProntteraLabModal isScrolled={isScrolled} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleDrawer}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100"
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
          backgroundImage: "radial-gradient(at 0% 40%, #3a3a3a, #3637538a)",
          backgroundAttachment: "fixed",
          backdropFilter: "blur(10px)",
          opacity: isDrawerOpen ? 1 : 0,
          visibility: isDrawerOpen ? "visible" : "hidden",
        }}
      >
        {/* Drawer Header */}
        {/* <div className="flex justify-between items-center p-4"> */}
        {/* <span className="text-lg font-bold text-slate-400">{brandText}</span> */}
        {/* <button
                onClick={closeDrawer}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button> */}
        {/* </div> */}

        {/* Drawer Navigation Links */}
        <nav className="flex flex-col p-4 space-y-4 items-end justify-center h-full pb-2 ">
          {navLinks.map((link) => (
            <a
              key={link.label}
              // href={link.href}
              onClick={() => {
                closeDrawer();
                handler(link.href);
              }}
              className="text-white hover:text-blue-600 mb-0 font-medium py-4 px-4 w-[95%] active:bg-slate-200/10 transition-colors duration-200 text-3xl border-b border-b-slate-500/20"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 w-full px-8">
            <ProntteraLabModal
              onClose={() => setIsDrawerOpen((prev) => false)}
            />
          </div>
          <button
            onClick={closeDrawer}
            className="py-2 px-4 text-gray-700 bg-white rounded-full mt-8 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100 flex items-center gap-2"
            aria-label="Close menu"
          >
            <span>Go Back</span>
            <CornerDownLeftIcon className="h-4 w-4" />
          </button>
        </nav>
      </aside>
    </>
  );
};

export default AppBar;
