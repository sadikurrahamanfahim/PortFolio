"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    company: "Object Canvas Technology",
    position: "Internee",
    duration: "12/2023 – 01/2024",
    location: "Darus Salam, Dhaka, Bangladesh",
    description:
      "Completed my internship at OCT (Object Canvas Technology) on ASP.NET. Gained hands-on experience about live projects of MVC pattern.",
  },
  {
    company: "Riseup Labs",
    position: "Trainee",
    duration: "09/2024 – 11/2024",
    location: "Uttara, Dhaka, Bangladesh",
    description: "Was a trainee of Hire and Train program at Riseup Labs. Learned game development on Unity engine.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-primary neon-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "2rem",
            letterSpacing: "0.1em",
            textShadow: "0 0 10px var(--primary), 0 0 20px var(--primary), 0 0 30px var(--primary)",
            imageRendering: "pixelated",
          }}
        >
          Experience
        </motion.h2>
        <div className="space-y-12 text-white">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="glassmorphism p-6 pixel-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h3
                className="text-2xl font-semibold mb-2 text-white"
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  textShadow: "2px 2px 0px #000",
                  imageRendering: "pixelated",
                  textTransform: "uppercase",
                }}
              >
                {exp.company}
              </h3>
              <h4
                className="text-xl mb-2 text-foreground"
                style={{ fontFamily: "'PressStart2P', cursive", fontSize: "0.8rem" }}
              >
                {exp.position}
              </h4>
              <p className="text-accent mb-4" style={{ fontFamily: "'PressStart2P', cursive", fontSize: "0.7rem" }}>
                {exp.duration} | {exp.location}
              </p>
              <p className="text-sm text-accent">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

