"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "glassmorphism" : "bg-transparent"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => window.open("/images/Sadikur Rahaman.pdf", "_blank")}
          className="text-2xl font-bold text-primary neon-text pixel-corners p-2 bg-transparent border-none cursor-pointer"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          Resume
        </button>
        <ul className="flex space-x-6">
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="nav-item text-white hover:text-secondary transition-colors duration-300 pixel-corners p-2"
                style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "0.8rem" }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

