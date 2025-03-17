"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
}

export default function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);
  const colors = ["#60A5FA", "#818CF8", "#A78BFA", "#F472B6"];

  useEffect(() => {
    setMounted(true);
    
    const interval = setInterval(() => {
      const newParticle: Particle = {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 2 + 1
      };

      setParticles(prev => [...prev, newParticle]);

      // Remove old particles
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, newParticle.duration * 1000);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 0,
            scale: 0,
            x: `${particle.x}%`,
            y: `${particle.y}%`
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [`${particle.x}%`, `${particle.x + (Math.random() * 20 - 10)}%`],
            y: [`${particle.y}%`, `${particle.y - 20}%`]
          }}
          transition={{
            duration: particle.duration,
            ease: "easeOut"
          }}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color
          }}
        />
      ))}
    </div>
  );
} 