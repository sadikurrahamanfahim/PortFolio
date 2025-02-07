"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-primary neon-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="glassmorphism p-8 text-white pixel-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg mb-6 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I am a fresh Unity game developer with foundational skills in Unity, including working with user interfaces
            and asset implementation. I am eager to apply my technical skills, adaptability, and passion for game
            development to create engaging experiences.
          </motion.p>
          <motion.p
            className="text-lg mb-6 leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Currently expanding my knowledge in rigging and 2D animation to broaden my skill set. With proficiency in
            Python, Java, C, and C#, and a commitment to continuous learning, I am a dedicated and versatile candidate
            ready to contribute effectively to game development.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

