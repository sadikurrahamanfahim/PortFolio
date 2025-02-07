"use client"

import { motion } from "framer-motion"
import { FaCode, FaHtml5, FaUnity, FaAndroid, FaDatabase, FaPencilRuler, FaUsers, FaLanguage } from "react-icons/fa"

const skills = [
  { category: "Programming Languages", items: ["C", "C#", "Java"], icon: <FaCode /> },
  { category: "Web Development", items: ["Html/CSS", "JS", "ASP.NET"], icon: <FaHtml5 /> },
  { category: "Game Development", items: ["Unity Engine"], icon: <FaUnity /> },
  { category: "Mobile App Dev.", items: ["Native Android (Java)"], icon: <FaAndroid /> },
  { category: "Database Management", items: ["SQL", "Firebase"], icon: <FaDatabase /> },
  { category: "Design Tools", items: ["Figma", "AutoCAD", "Cisco Packet Tracer"], icon: <FaPencilRuler /> },
  { category: "Soft Skills", items: ["Teamwork", "Communication"], icon: <FaUsers /> },
  { category: "Languages", items: ["Bengali", "English", "Hindi"], icon: <FaLanguage /> },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
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
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="glassmorphism p-6 pixel-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl text-white mr-4">{skill.icon}</span>
                <h3
                  className="text-xl font-semibold"
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: "0.9rem",
                    letterSpacing: "0.1em",
                    textShadow: "1px 1px 0 #000",
                    imageRendering: "pixelated",
                    color: "white",
                  }}
                >
                  {skill.category}
                </h3>
              </div>
              <ul className="list-none">
                {skill.items.map((item) => (
                  <li key={item} className="mb-2 flex items-center text-white">
                    {" "}
                    <span className="inline-block w-2 h-2 bg-white mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

