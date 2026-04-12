 "use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const gifDuration = 1700;

    const t = setTimeout(() => {
      setHide(true);
    }, gifDuration);

    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center dotted-bg"
          style={{ backgroundColor: "#F5ECEC" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* CENTER GROUP */}
          <div className="relative flex items-center justify-center">

            {/*  CENTER GIF */}
            <img
              src="/micha-preloader-gif-500.webp"
              alt="loading"
              className="w-[180px] md:w-[210px] relative z-10"
            />

            {/* LEFT LEAF */}
            <motion.img
              src="/preloader-left.svg"
              alt="left"
              className="absolute right-full mr-[-20px] w-[80px] md:w-[140px]"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/*  RIGHT LEAF */}
            <motion.img
              src="/preloader-right.svg"
              alt="right"
              className="absolute left-full ml-[-20px] w-[80px] md:w-[130px]"
              animate={{
                y: [0, -10, 0],
                rotate: [0, -2, 2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}