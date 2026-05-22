"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Hex pattern overlay for VR feel */}
      <div className="absolute inset-0 hex-pattern opacity-50" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Large gradient orbs with multiple colors */}
      <motion.div 
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
        style={{ background: 'linear-gradient(135deg, oklch(0.78 0.2 195 / 0.4), oklch(0.6 0.22 290 / 0.2))' }}
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-25"
        style={{ background: 'linear-gradient(135deg, oklch(0.65 0.25 330 / 0.4), oklch(0.6 0.22 290 / 0.3))' }}
        animate={{ 
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[80px] opacity-20"
        style={{ background: 'oklch(0.6 0.22 290 / 0.5)' }}
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles with multiple colors */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-primary/50' : i % 3 === 1 ? 'bg-secondary/50' : 'bg-accent/50'
            }`}
            style={{
              left: `${8 + i * 7}%`,
              top: `${15 + (i % 5) * 18}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Animated lines/rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full neon-line"
          style={{ background: 'linear-gradient(to bottom, transparent, oklch(0.78 0.2 195 / 0.2), transparent)' }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full neon-line"
          style={{ background: 'linear-gradient(to bottom, transparent, oklch(0.65 0.25 330 / 0.15), transparent)' }}
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-primary font-mono text-sm sm:text-base mb-4 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {"// Welcome to my portfolio"}
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="gradient-text">Sahil Kakadiya</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-primary">VR Developer</span> & <span className="text-secondary">Software Engineer</span>
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Crafting immersive virtual reality experiences and interactive 3D applications.
            Master&apos;s student at Hochschule Heilbronn specializing in cutting-edge XR technologies.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link
              href="#contact"
              className="glass px-6 py-3 rounded-lg text-foreground hover:bg-primary/20 transition-all duration-300 hover:glow-border flex items-center gap-2 gradient-border"
            >
              <Mail className="w-4 h-4 text-primary" />
              Get in Touch
            </Link>
            <Link
              href="https://drive.google.com/file/d/1f51Rau4PI9iRizVq10aUAz2qjChNLjHC/view?usp=sharing" target="_blank"
              className="relative bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 glow-multi flex items-center gap-2 font-medium"
            >
              <Download className="w-4 h-4" />
              Download CV
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Link
              href="https://github.com/SahilKakadiya2872"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:glow-text"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sahil-kakadiya02/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors duration-300 hover:glow-text-magenta"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
