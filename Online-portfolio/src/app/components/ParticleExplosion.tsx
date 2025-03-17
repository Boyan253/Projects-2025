"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ExplosionParticle {
  id: number;
  angle: number;
  distance: number;
  size: number;
  color: string;
}

export default function ParticleExplosion() {
  const [particles, setParticles] = useState<ExplosionParticle[]>([]);
  const [mounted, setMounted] = useState(false);
  const colors = ["#60A5FA", "#818CF8", "#A78BFA", "#F472B6", "#FBBF24"];

  useEffect(() => {
    setMounted(true);
    
    const handleRocketLaunch = () => {
      const newParticles = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        angle: (Math.PI * 2 * i) / 50,
        distance: Math.random() * 100 + 50,
        size: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));

      setParticles(newParticles);

      // Clear particles after animation
      setTimeout(() => {
        setParticles([]);
      }, 1000);
    };

    window.addEventListener('rocketLaunch', handleRocketLaunch);
    return () => window.removeEventListener('rocketLaunch', handleRocketLaunch);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 1,
            scale: 1,
            x: "50%",
            y: "0%"
          }}
          animate={{
            opacity: [1, 0],
            scale: [1, 0],
            x: `calc(50% + ${Math.cos(particle.angle) * particle.distance}px)`,
            y: `calc(${Math.sin(particle.angle) * particle.distance}px)`
          }}
          transition={{
            duration: 1,
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