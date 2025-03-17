"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import About from "./components/About";
import Experience from "./components/Experience";
import ParticleField from "./components/ParticleField";
import ParticleExplosion from "./components/ParticleExplosion";
import RocketLaunch from "./components/RocketLaunch";
import { useEffect, useState } from "react";

export default function Home() {
  const [showRocket, setShowRocket] = useState(true);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleRocketLaunch = () => {
      setShowRocket(false);
    };

    window.addEventListener("rocketLaunch", handleRocketLaunch);
    return () => window.removeEventListener("rocketLaunch", handleRocketLaunch);
  }, []);

  return (
    <main className="min-h-screen">
      <ParticleField />
      <ParticleExplosion />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background circles */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Futuristic grid background */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-2 opacity-20">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-blue-500/10 rounded"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.02,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>

        {/* Content */}
        <motion.div 
          className="relative z-10 text-center px-4"
          style={{ opacity: headerOpacity }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            Boyan Iliev
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Full Stack Developer
          </motion.h2>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <motion.a 
              href="https://github.com/Boyan253" 
              className="transform hover:scale-110 transition-transform relative group"
              whileHover={{ scale: 1.1 }}
            >
              <IconBrandGithub className="w-8 h-8" />
              <motion.div
                className="absolute -inset-2 bg-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/boyan-iliev-84857b270/" 
              className="transform hover:scale-110 transition-transform relative group"
              whileHover={{ scale: 1.1 }}
            >
              <IconBrandLinkedin className="w-8 h-8" />
              <motion.div
                className="absolute -inset-2 bg-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
            </motion.a>
            <motion.a 
              href="mailto:boyan.georgiev.iliev@gmail.com" 
              className="transform hover:scale-110 transition-transform relative group"
              whileHover={{ scale: 1.1 }}
            >
              <IconMail className="w-8 h-8" />
              <motion.div
                className="absolute -inset-2 bg-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              />
            </motion.a>
          </motion.div>

          {showRocket && <RocketLaunch />}
        </motion.div>
      </section>

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />
    </main>
  );
}
