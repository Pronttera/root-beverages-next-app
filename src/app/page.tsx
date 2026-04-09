import AppBar from "./components/layout/AppBar";
import Footer from "./components/layout/Footer";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
// import TestimonialSection from "./sections/TestimonialSection";
import CollaborationSection from "./sections/CollaborationSection";
import FlavoursSection from "./sections/FlavoursSection";
import TestimonialSection from "./sections/TestimonialSection";
import SplashScreen from "./components/common/SplashScreen";
import FAQSection from "./sections/FAQSection";
// TODO: Add Meta Here
export default function Home() {
  return (
    <>
      <SplashScreen />
      <AppBar />
      <HeroSection />
      <AboutSection />
      <FlavoursSection />
      <TestimonialSection />
      <FAQSection />
      <CollaborationSection />
      <Footer />
    </>
  );
}
