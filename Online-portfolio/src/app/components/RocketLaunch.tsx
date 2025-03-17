"use client";

import { motion } from "framer-motion";
import { IconRocket } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function RocketLaunch() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);

    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [-10, -height],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="relative"
        onAnimationComplete={() => {
          // Trigger particle explosion when rocket reaches top
          const event = new CustomEvent("rocketLaunch");
          window.dispatchEvent(event);
        }}
      >
        <IconRocket 
          className="w-12 h-12 text-blue-500 transform -rotate-45" 
          stroke={2}
        />
        {/* Rocket trail */}
        <motion.div
          className="absolute bottom-0 left-1/2 w-1 h-20 origin-top"
          style={{
            background: "linear-gradient(to top, rgba(96, 165, 250, 0), rgba(96, 165, 250, 0.5))",
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
} 