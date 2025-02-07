"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import type React from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here (e.g., send email or API call)
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20">
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
          Contact Me
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto glassmorphism p-8 pixel-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-white" //Updated label text color
              style={{ fontFamily: "'PressStart2P', cursive", fontSize: "0.8rem" }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-background text-white border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary pixel-corners" //Updated input text color
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-white" //Updated label text color
              style={{ fontFamily: "'PressStart2P', cursive", fontSize: "0.8rem" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-background text-white border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary pixel-corners" //Updated input text color
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-white" //Updated label text color
              style={{ fontFamily: "'PressStart2P', cursive", fontSize: "0.8rem" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 bg-background text-white border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary pixel-corners" //Updated textarea text color
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="pixel-btn w-full text-white"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "0.8rem",
              padding: "12px 24px",
              backgroundColor: "var(--primary)",
              border: "none",
              position: "relative",
              overflow: "hidden",
              imageRendering: "pixelated",
              boxShadow: "0 4px 0 #000",
              textShadow: "2px 2px 0 #000",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Send Message</span>
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
        </motion.form>
      </div>
    </section>
  )
}

