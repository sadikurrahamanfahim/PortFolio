"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="text-center z-10 glassmorphism p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3
          className="text-4xl md:text-4xl mb-4 text-primary neon-text"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          Hi!
        </h3>
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 text-primary neon-text"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          It's me SADIKUR RAHAMAN
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-secondary neon-text">Unity Game Developer</h2>
        <motion.button
          className="pixel-btn text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "0.8rem",
            padding: "12px 24px",
            backgroundColor: "var(--primary)",
            border: "none",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <span className="relative z-10 text-white">Start Adventure</span>
          <span
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(to right, #000 2px, transparent 2px),
              linear-gradient(to bottom, #000 2px, transparent 2px)
            `,
              backgroundSize: "4px 4px",
              opacity: 0.3,
            }}
          ></span>
        </motion.button>
      </motion.div>
      <div className="scroll-indicator"></div>
    </section>
  )
}

