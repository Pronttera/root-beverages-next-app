import AppBar from "./components/layout/AppBar";
import Footer from "./components/layout/Footer";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import TestimonialSection from "./sections/TestimonialSection";

// TODO: Add Meta Here
export default function Home() {
  return (
    <>
      <AppBar />

      <HeroSection />
      <AboutSection />
      <TestimonialSection />
      {/* <Footer /> */}
    </>
  );
}
