import AppBar from "./components/layout/AppBar";
import Footer from "./components/layout/Footer";

import AboutSection from "./sections/AboutSection";
import FlavoursSection from "./sections/FlavoursSection";
import TestimonialSection from "./sections/TestimonialSection";

// TODO: Add Meta Here
export default function Home() {
  return (
    <>
      <AppBar />

      <AboutSection />
      <FlavoursSection />
      <TestimonialSection/>
      {/* <Footer /> */}
    </>
  );
}
