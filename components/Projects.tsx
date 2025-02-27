"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = {
  GameDevelopment: [
    {
      title: "Jingle Word",
      description:
        "Integrated assets into a Christmas-themed word puzzle game, designed the majority of assets using Figma, and implemented time functionality. (Under Review)",
      image: "/images/JingleWrods.png",
      link: "https://play.google.com/store/apps/details?id=com.DiyaBariLabs.JingleWord&hl=en-US&ah=njehxEQWkRkN6WpzaCXjmAxk8H8",
    },
    {
      title: "Pacman Genjam",
      description:
        "Made a remix of Pacman to participate in the crazy webgame gamejam (2024) in collaboration with a team member.",
      image: "/images/PacMan.png",
      link: "https://masupasu.itch.io/pacman-genjam",
    },
    {
      title: "Vanish Words",
      description:
        "Developed a 2D Unity game with random alphabet sorting, dynamic feedback, and endless gameplay mechanics.",
      image: "/images/VanishWords.png",
      link: "https://fupsee.itch.io/vanish-words",
    },
  ],
  WebDevelopment: [
    {
      title: "Movie Freaks!",
      description: "Developed a movie showcase website based on ASP.NET MVC.",
      image: "/images/MovieFreaks.png",
      link: "https://github.com/sadikurrahamanfahim/eTickets",
    },
    {
      title: "DataVize",
      description: "Built a Streamlit-based web application offering data preprocessing, visualization, and classification techniques.",
      image: "/images/DataVize.png",
      link: "https://github.com/sadikurrahamanfahim/DataVize",
    },
  ],
  AndroidDevelopment: [
    {
      title: "Khuda Lagche!",
      description: "A Food delivery Android Application mainly focused on UI principles.",
      image: "/images/KhudaLagche.png",
      link: "https://github.com/sadikurrahamanfahim/khuda_Lagche",
    },
  ],
  Design: [
    {
      title: "Jingle Wrods UI Design",
      description:
        "Created user interface designs for mobile game(Jingle Words) using Figma by collaborating with team members, focusing on user experience and visual appeal.",
      image: "/images/JingleWrods_Figma.png",
      link: "https://www.figma.com/proto/weWe19ycKoUCVDuI1IM6su/Jingle-Wrods?node-id=1-171&t=EWwkAqYBlOHrKVof-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    },
    {
      title: "Khuda Lagche! UI Design",
      description:
        "Created user interface designs for Android Application called Khuda Lagche! using Figma by collaborating with team members, focusing on user experience and visual appeal.",
      image: "/images/KhudaLagche_Figma.png",
      link: "https://www.figma.com/proto/L5hy2UYzH5oyUtz8FktsND/Khuda-Lagche!?node-id=1-1579&t=LSW2ZCO409wIfvfb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1579",
    },
  ],
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
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
          Projects
        </motion.h2>
        {Object.entries(projects).map(([category, categoryProjects], categoryIndex) => (
          <div key={category} className="mb-16">
            <motion.h3
              className="text-2xl font-bold mb-8 text-secondary neon-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: "1.5rem",
                letterSpacing: "0.1em",
                textShadow: "0 0 5px var(--secondary), 0 0 10px var(--secondary)",
                imageRendering: "pixelated",
              }}
            >
              {category.replace(/([A-Z])/g, " $1").trim()}
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
              {categoryProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="glassmorphism overflow-hidden pixel-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4
                        className="text-xl font-semibold mb-2 text-foreground"
                        style={{
                          fontFamily: "'Press Start 2P', cursive",
                          fontSize: "0.9rem",
                          letterSpacing: "0.1em",
                          textShadow: "2px 2px 0px #000",
                          imageRendering: "pixelated",
                          color: "var(--primary)",
                          textTransform: "uppercase",
                        }}
                      >
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-400">{project.description}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}