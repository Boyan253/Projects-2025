"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "TailwindCSS", "MongoDB", "PostgreSQL", "Docker", "AWS", "Angular", "Java", "C#", "SQL", "Git", "CI/CD", "Agile",
   "Scrum", "REST", "GraphQL", "SOAP", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Material-UI",
    "Ant Design", "Redux", "MobX", "RxJS", "Express", "Koa", "NestJS", "Django",
     "Flask", "Ruby on Rails", "Laravel", "Symfony", "Ruby", "PHP", "SAP UI5", "BPM"
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={containerRef} className="min-h-screen py-20 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-4 opacity-10">
        {Array.from({ length: 64 }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-blue-500/20 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-4 max-w-4xl relative"
      >
        <motion.div
          style={{ rotate }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
        />

        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          About Me
        </h2>
        
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
          <motion.p 
            className="text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I&apos;m a passionate Full Stack Developer with 5 years of experience building web applications.
            I specialize in creating beautiful, performant, and user-friendly applications using modern technologies.
            My approach combines technical expertise with creative problem-solving to deliver exceptional results.
          </motion.p>

          <motion.h3 
            className="text-2xl font-semibold mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h3>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">{skill}</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  style={{ opacity: 0.2 }}
                />
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 