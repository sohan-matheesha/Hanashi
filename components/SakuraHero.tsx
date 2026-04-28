"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SakuraHero = () => {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering animations on client
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Configuration for particles
  const PETAL_COUNT = 25;
  const GLOW_COUNT = 15;

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">

      {/* 2. Animation Layer (Petals & Glow) */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Falling Sakura Petals */}
          {[...Array(PETAL_COUNT)].map((_, i) => (
            <Petal key={`petal-${i}`} />
          ))}

          {/* Twinkling Glow Particles */}
          {[...Array(GLOW_COUNT)].map((_, i) => (
            <GlowParticle key={`glow-${i}`} />
          ))}
        </div>
      )}

      {/* 3. Main Content Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="inline-block px-6 py-2 mb-8 text-[11px] font-bold tracking-[0.4em] text-pink-200 uppercase border border-pink-400/30 rounded-full bg-white/5 backdrop-blur-md">
            MASTER THE ART OF LANGUAGE
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-white mb-8 tracking-tighter leading-none drop-shadow-2xl">
            Hanashi<span className="text-pink-100/90 ml-3 font-jp">話し</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-14 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-md">
            Experience the elegance of Japanese. Immerse yourself in a learning journey 
            as calm and profound as a midnight breeze in Kyoto.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/register"
              className="px-12 py-5 bg-[#e11d74] hover:bg-[#c01662] text-white rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(225,29,116,0.4)] hover:shadow-[0_15px_40px_rgba(225,29,116,0.6)] font-bold text-lg tracking-wide hover:-translate-y-1"
            >
              Begin Your Journey
            </Link>
            <Link 
              href="#features"
              className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full backdrop-blur-md transition-all duration-300 font-bold text-lg hover:-translate-y-1"
            >
              Explore Courses
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

// Reusable Petal Sub-component
const Petal = () => {
  const [styles, setStyles] = useState<any>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStyles({
      left: `${Math.random() * 100}%`,
      drift: Math.random() * 10 - 5,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 15,
      size: 8 + Math.random() * 12,
      blur: Math.random() > 0.7 ? 'blur(2px)' : 'none',
    });
  }, []);

  if (!styles) return null;

  return (
    <motion.div
      initial={{ top: "-10%", left: styles.left, opacity: 0, rotate: 0 }}
      animate={{ 
        top: "110%", 
        left: `${parseFloat(styles.left) + styles.drift}%`, 
        opacity: [0, 0.8, 0.8, 0],
        rotate: 360 
      }}
      transition={{ 
        duration: styles.duration, 
        repeat: Infinity, 
        delay: styles.delay, 
        ease: "linear" 
      }}
      className="absolute bg-pink-300/40 rounded-[100%_2px_100%_2px]"
      style={{ 
        width: styles.size, 
        height: styles.size, 
        filter: styles.blur,
        boxShadow: '0 0 10px rgba(255, 182, 193, 0.3)'
      }}
    />
  );
};

// Reusable Glow Particle Sub-component
const GlowParticle = () => {
  const [styles, setStyles] = useState<any>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStyles({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 4,
    });
  }, []);

  if (!styles) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.6, 0] }}
      transition={{ 
        duration: styles.duration, 
        repeat: Infinity, 
        delay: styles.delay 
      }}
      className="absolute w-1 h-1 bg-pink-200 rounded-full shadow-[0_0_8px_#fbcfe8]"
      style={{ top: styles.top, left: styles.left }}
    />
  );
};

export default SakuraHero;
