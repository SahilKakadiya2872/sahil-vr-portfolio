"use client"

import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  Sparkles,
  Code2,
  Palette,
  Glasses,
  Terminal,
  ChevronDown,
  MapPin,
  Calendar,
  GraduationCap,
  ArrowUpRight,
  Layers,
  Zap,
  Star,
  Award,
  ImageIcon,
  Maximize2,
  BadgeCheck
} from "lucide-react"

// Cinematic Background Component
function CinematicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">

      {/* Static gradient orbs — same visual, zero GPU cost */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.22 260 / 0.4) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, oklch(0.68 0.28 290 / 0.4) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-[35%] right-[15%] w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, oklch(0.85 0.18 195 / 0.3) 0%, transparent 65%)",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-primary/8 to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-accent/8 to-transparent" />
    </div>
  )
}


// Floating Particles
function FloatingParticles({ count = 50 }: { count?: number }) {
  // CSS-only particles — no JS animations, no Framer Motion
  // Uses transform + opacity only (GPU-composited, near-zero cost)
  const particles = [
    { left: "15%", top: "80%", delay: "0s",   duration: "12s", color: "oklch(0.72 0.22 260 / 0.6)" },
    { left: "40%", top: "90%", delay: "3s",   duration: "16s", color: "oklch(0.68 0.28 290 / 0.5)" },
    { left: "65%", top: "85%", delay: "6s",   duration: "14s", color: "oklch(0.85 0.18 195 / 0.5)" },
    { left: "80%", top: "75%", delay: "1.5s", duration: "18s", color: "oklch(0.72 0.22 260 / 0.4)" },
    { left: "25%", top: "70%", delay: "9s",   duration: "20s", color: "oklch(0.68 0.28 290 / 0.4)" },
    { left: "55%", top: "95%", delay: "4.5s", duration: "15s", color: "oklch(0.85 0.18 195 / 0.6)" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full particle-float"
          style={{
            left: p.left,
            top: p.top,
            background: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  )
}


// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ["about", "skills", "projects", "design", "experience", "education", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Design", href: "#design" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className={`glass-strong rounded-2xl px-4 md:px-8 py-3 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "neon-glow" : ""
          }`}
          layoutId="nav-container"
        >
          <motion.a
            href="#"
            className="relative text-xl md:text-2xl font-bold tracking-tight group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-primary neon-text">SK</span>
            <span className="text-accent">.</span>
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:sahilkakadiya010@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl text-sm font-semibold overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              {"Let's Talk"}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>
        </motion.div>
      </div>
    </motion.nav>
  )
}

// Hero Section - Cinematic
function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 400]), { stiffness: 100, damping: 30 })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10])

  const roles = [
    { icon: Glasses, label: "VR Developer", color: "from-primary to-accent" },
    { icon: Terminal, label: "Unity Engineer", color: "from-accent to-neon-cyan" },
    { icon: Palette, label: "UI/UX Designer", color: "from-neon-cyan to-primary" },
  ]

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.05 + 0.5,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  const name1 = "Sahil"
  const name2 = "Kakadiya"

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero-specific Background Effects */}
      <div className="absolute inset-0">
        {/* Radial gradient spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-radial-gradient opacity-30" 
          style={{
            background: "radial-gradient(circle, oklch(0.72 0.22 260 / 0.15) 0%, transparent 50%)",
          }}
        />
        
        {/* Light rays */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[200%] w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
              style={{
                left: `${15 + i * 15}%`,
                top: "-50%",
                transform: `rotate(${-15 + i * 6}deg)`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div 
        style={{ y, opacity, scale, filter: `blur(${blur}px)` }} 
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 glass-card rounded-full mb-10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-lg shadow-emerald-500/50"></span>
          </span>
          <span className="text-sm text-foreground/80 font-medium">Available for new opportunities</span>
          <Sparkles className="w-4 h-4 text-primary" />
        </motion.div>

        {/* Main Title - Cinematic Text Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-4 tracking-wide"
          >
            Hello, I&apos;m
          </motion.p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
            <span className="block overflow-hidden">
              {name1.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-primary neon-text"
                  style={{ textShadow: "0 0 80px oklch(0.72 0.22 260 / 0.5)" }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden mt-2">
              {name2.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i + name1.length}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-foreground"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Building interactive VR environments for Meta Quest 3 with Unity, backed by a UI/UX design background.
        </motion.p>

        {/* Role Cards - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {roles.map((role, index) => (
            <motion.div
              key={role.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.08, y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${role.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
              <div className="relative flex items-center gap-3 px-5 py-3 glass-card rounded-2xl border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                <div className={`p-2 rounded-xl bg-gradient-to-r ${role.color} bg-opacity-10`}>
                  <role.icon className="w-4 h-4 text-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground/90">{role.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons - Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 rounded-2xl font-semibold text-lg overflow-hidden"
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
              animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 neon-glow-strong opacity-50" />
            {/* Inner highlight */}
            <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-2xl" />
            {/* Content */}
            <span className="relative z-10 flex items-center gap-3 text-primary-foreground">
              <Sparkles className="w-5 h-5" />
              View My Work
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </motion.a>
          
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1f51Rau4PI9iRizVq10aUAz2qjChNLjHC"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 glass-card rounded-2xl font-semibold text-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-3 text-foreground">
              <Download className="w-5 h-5 text-primary" />
              Download Resume
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Cinematic */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">Scroll to explore</span>
          <div className="relative w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center">
            <motion.div
              animate={{ y: [2, 14, 2], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Section Header Component
function SectionHeader({ label, title, highlight, align = "center" }: { 
  label: string
  title: string
  highlight: string
  align?: "center" | "left"
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`mb-20 ${align === "center" ? "text-center" : ""}`}
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-6"
      >
        <Zap className="w-3.5 h-3.5" />
        {label}
      </motion.span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        {title}{" "}
        <span className="text-primary neon-text">{highlight}</span>
      </h2>
    </motion.div>
  )
}

// About Section - Cinematic
function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const tags = [
    { label: "M.Sc. Software Engineering", icon: GraduationCap },
    { label: "Unity VR Certified", icon: Award },
    { label: "Based in Germany", icon: MapPin },
  ]

  return (
    <section id="about" className="py-32 px-6 relative">
      {/* Section Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-10"
          style={{
            background: "conic-gradient(from 0deg, transparent, oklch(0.72 0.22 260), transparent, oklch(0.68 0.28 290), transparent)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Visual Element */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative aspect-square"
            >
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-primary/20"
              />
              
              {/* Middle ring with glow */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border-2 border-dashed border-accent/30"
              />

              {/* Inner content */}
              <div className="absolute inset-16 rounded-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                <div className="relative z-10">
                  <img src="/Sahil_Avatar.png" alt="Sahil Kakadiya" className="w-full h-full object-cover rounded-full"/>
                </div>
              </div>

              {/* Floating badges */}
              {[
                { icon: Code2, position: "top-0 left-1/4", delay: 0 },
                { icon: Palette, position: "top-1/4 right-0", delay: 0.5 },
                { icon: Glasses, position: "bottom-1/4 right-0", delay: 1 },
                { icon: Terminal, position: "bottom-0 left-1/4", delay: 1.5 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + item.delay, type: "spring" }}
                  className={`absolute ${item.position} p-4 glass-card rounded-2xl animate-float`}
                  style={{ animationDelay: `${item.delay}s` }}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>
              ))}

              {/* Glow effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/30 rounded-full blur-[100px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 rounded-full blur-[80px]" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionHeader label="About Me" title="Where VR engineering meets" highlight="interaction design" align="left" />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12"
            >
              <p>
                I&apos;m a Software Engineering Master&apos;s student at Hochschule Heilbronn, focused on VR development and interactive 3D applications.
              </p>
              <p>
                I build immersive environments for Meta Quest 3 using Unity and Meta XR Interaction Toolkit — setting up interaction systems, solving cross-engine asset problems between Unreal and Unity, and testing everything on real hardware.
              </p>
              <p>
                Before moving to Germany, I worked as a UI/UX Designer, which shaped how I think about interaction design in VR: usability first, then polish.
              </p>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {tags.map((tag, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="group inline-flex items-center gap-2 px-4 py-2 glass-card rounded-xl border border-border/30 hover:border-primary/40 transition-all duration-300"
                >
                  <tag.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground/80">{tag.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Skills Section - Cinematic
function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "VR & 3D Development",
      icon: Glasses,
      gradient: "from-primary to-accent",
      skills: ["Unity", "Meta XR Interaction Toolkit", "XR Interaction Toolkit", "OpenXR", "Meta Quest 3", "Unreal Engine", "Blender", "C#", "Shader Graph"],
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      gradient: "from-accent to-neon-cyan",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Prototyping", "User Research", "Usability Testing"],
    },
    {
      title: "Web Development",
      icon: Code2,
      gradient: "from-neon-cyan to-primary",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
    },
    {
      title: "Tools & Platforms",
      icon: Terminal,
      gradient: "from-primary to-neon-purple",
      skills: ["Git", "GitHub", "Visual Studio", "Meta Quest 3", "Vercel", "Python"],
    },
  ]

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <SectionHeader label="Expertise" title="Skills &" highlight="Technologies" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card glow on hover */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
              
              <div className="relative glass-card rounded-3xl p-8 h-full border border-border/30 group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-5 mb-8">
                  <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${category.gradient}`}>
                    <category.icon className="w-7 h-7 text-white" />
                    <div className="absolute inset-0 rounded-2xl neon-glow opacity-50" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.15 + skillIndex * 0.05 + 0.3 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-5 py-2.5 text-sm font-medium bg-secondary/50 rounded-xl hover:bg-primary/20 hover:text-primary border border-transparent hover:border-primary/30 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative corner */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${category.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Section - Cinematic Showcase
function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "TURTLE VR: Hoffmann Experience",
      description: "Developed an immersive VR garden and library environment for the TURTLE project – a university-wide VR learning platform at Hochschule Heilbronn. Handled cross-engine asset migration from Unreal Engine to Unity, implemented teleportation, grabbable objects, and snap interaction systems for Meta Quest 3.",
      tags: ["Unity 6", "Meta Quest 3", "Meta XR Toolkit", "C#", "Unreal Engine"],
      gradient: "from-primary via-neon-purple to-accent",
      link: "https://github.com/SahilKakadiya2872/Hoffmann-Experience-VR",
      image: "/turtle-vr.png",
    },
    {
      title: "VR Room Experience",
      description: "Interactive VR room built using Unity XR Interaction Toolkit with teleportation movement, grabbable objects, and physics-based interactions with XR controller support. Completed as part of the official Unity VR Development certification pathway.",
      tags: ["Unity", "XR Interaction Toolkit", "OpenXR", "C#"],
      gradient: "from-accent via-primary to-neon-cyan",
      link: "https://github.com/SahilKakadiya2872/VR-Room-Sahil",
      image: "/vr-room.png",
    },
    {
      title: "Ninja Survival: 3D Game",
      description: "Third-person 3D survival game set in a dark forest environment, featuring a controllable ninja character, AI-driven enemy dinosaurs with randomised animation behaviours, and realistic terrain built with Unity Terrain Tools and Blender.",
      tags: ["Unity", "C#", "Blender", "Mixamo", "Terrain Tools"],
      gradient: "from-neon-cyan via-accent to-primary",
      link: "https://github.com/SahilKakadiya2872/Ninja-Survival",
      image: "/ninja-survival.png",
    },
  ]

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <SectionHeader label="Portfolio" title="Featured" highlight="Projects" />

        {/* ── 3-column equal grid ── */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Glow */}
              <motion.div
                className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl`}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === index ? 0.3 : 0 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative glass-card rounded-3xl overflow-hidden border border-border/30 group-hover:border-primary/40 transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    animate={{ scale: hoveredProject === index ? 1.05 : 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-card to-transparent" />

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end justify-center pb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hoveredProject === index ? 0 : 20,
                          opacity: hoveredProject === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold flex items-center gap-2 neon-glow hover:scale-105 transition-transform text-sm"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-1">
                  <motion.h3
                    className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300"
                    animate={{ x: hoveredProject === index ? 4 : 0 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed text-sm flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-lg border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


function DesignSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [[current, direction], setPage] = useState([0, 0])
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  const screens = [
    {
      src: "/design/screen-home.jpg",
      label: "Home Screen",
      desc: "Main navigation hub",
      gradient: "from-primary to-accent",
    },
    {
      src: "/design/screen-weapons.jpg",
      label: "Weapon Stats",
      desc: "Detail view with stats",
      gradient: "from-accent to-neon-cyan",
    },
    {
      src: "/design/screen-chars2.jpg",
      label: "Characters",
      desc: "Character carousel",
      gradient: "from-neon-cyan to-primary",
    },
    {
      src: "/design/screen-vehicles.jpg",
      label: "Vehicles",
      desc: "Vehicle catalogue",
      gradient: "from-primary to-neon-purple",
    },
    {
      src: "/design/screen-rewards.jpg",
      label: "Rewards",
      desc: "Diamond reward flow",
      gradient: "from-neon-purple to-accent",
    },
    {
      src: "/design/screen-characters.jpg",
      label: "Free Characters",
      desc: "Characters for free",
      gradient: "from-accent to-primary",
    },
  ]

  const total = screens.length

  const paginate = (newDirection: number) => {
    setPage(([prev]) => [
      (prev + newDirection + total) % total,
      newDirection,
    ])
  }

  const goTo = (index: number) => {
    setPage(([prev]) => [index, index > prev ? 1 : -1])
  }

  const getIndex = (offset: number) => (current + offset + total) % total

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.94,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 90, damping: 22 },
        opacity: { duration: 0.45 },
        scale: { duration: 0.5 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.94,
      transition: {
        x: { type: "spring", stiffness: 90, damping: 22 },
        opacity: { duration: 0.35 },
      },
    }),
  }

  return (
    <section id="design" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <SectionHeader label="Design Work" title="UI/UX" highlight="Portfolio" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 md:gap-8">

            {/* Left arrow */}
            <motion.button
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.92 }}
              className="flex-shrink-0 w-14 h-14 glass-card rounded-2xl border border-border/30 hover:border-primary/50 flex items-center justify-center transition-all duration-300 z-10"
            >
              <ChevronDown className="w-6 h-6 text-foreground rotate-90" />
            </motion.button>

            <div className="flex items-center justify-center gap-4 md:gap-6">

              {/* Left side card */}
              <motion.div
                key={`left-${getIndex(-1)}`}
                animate={{ scale: 0.85, opacity: 0.4 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="hidden lg:block flex-shrink-0 w-[280px] cursor-pointer select-none"
                onClick={() => paginate(-1)}
                whileHover={{ opacity: 0.6, scale: 0.87 }}
              >
                <div className="glass-card rounded-2xl overflow-hidden border border-border/20">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={screens[getIndex(-1)].src}
                      alt={screens[getIndex(-1)].label}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-semibold text-muted-foreground truncate">
                      {screens[getIndex(-1)].label}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Center card */}
              <div
                className="flex-shrink-0 w-[340px] md:w-[560px] lg:w-[680px] relative"
                style={{ minHeight: "420px" }}
              >
                {/* Subtle glow */}
                <motion.div
                  key={`glow-${current}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl opacity-100"
                />

                <div className="relative glass-card rounded-3xl overflow-hidden border border-primary/25 shadow-2xl">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                      <motion.img
                        key={current}
                        src={screens[current].src}
                        alt={screens[current].label}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                        style={{ cursor: "zoom-in" }}
                        onClick={() => setLightboxSrc(screens[current].src)}
                      />
                    </AnimatePresence>

                    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-card via-card/50 to-transparent pointer-events-none" />
                    <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-card/60 to-transparent pointer-events-none" />

                    <div className="absolute top-4 right-4 p-2.5 glass rounded-xl pointer-events-none">
                        <Maximize2 className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="px-7 py-5 flex items-center justify-between">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`info-${current}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                      >
                        <p className="text-lg font-bold text-foreground">{screens[current].label}</p>
                        <p className="text-sm text-muted-foreground">{screens[current].desc}</p>
                      </motion.div>
                    </AnimatePresence>

                    <motion.div
                      key={`counter-${current}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35 }}
                      className={`px-4 py-2 rounded-xl text-sm font-bold bg-gradient-to-r ${screens[current].gradient} text-white flex-shrink-0 ml-4`}
                    >
                      {current + 1} / {total}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Right side card */}
              <motion.div
                key={`right-${getIndex(1)}`}
                animate={{ scale: 0.85, opacity: 0.4 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="hidden lg:block flex-shrink-0 w-[280px] cursor-pointer select-none"
                onClick={() => paginate(1)}
                whileHover={{ opacity: 0.6, scale: 0.87 }}
              >
                <div className="glass-card rounded-2xl overflow-hidden border border-border/20">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={screens[getIndex(1)].src}
                      alt={screens[getIndex(1)].label}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-semibold text-muted-foreground truncate">
                      {screens[getIndex(1)].label}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right arrow */}
            <motion.button
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.92 }}
              className="flex-shrink-0 w-14 h-14 glass-card rounded-2xl border border-border/30 hover:border-primary/50 flex items-center justify-center transition-all duration-300 z-10"
            >
              <ChevronDown className="w-6 h-6 text-foreground -rotate-90" />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {screens.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => goTo(i)}
                animate={{
                  width: i === current ? 32 : 8,
                  backgroundColor:
                    i === current ? "oklch(0.72 0.22 260)" : "oklch(0.35 0 0)",
                }}
                transition={{ duration: 0.4 }}
                className="h-2 rounded-full"
              />
            ))}
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 px-2">
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {["Adobe Photoshop", "Adobe Illustrator", "Figma", "Adobe XD"].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-lg border border-primary/20"
                >
                  {tool}
                </span>
              ))}
            </div>

            <motion.a
              href="https://github.com/SahilKakadiya2872/UI-UX-Design-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 rounded-2xl font-semibold overflow-hidden flex items-center gap-3 flex-shrink-0"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent bg-[length:200%_100%]"
                animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-2xl" />
              <Github className="relative z-10 w-5 h-5 text-white" />
              <span className="relative z-10 text-white">View Full Portfolio</span>
              <ArrowUpRight className="relative z-10 w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
<AnimatePresence>
  {lightboxSrc && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/92 backdrop-blur-2xl"
      onClick={() => setLightboxSrc(null)}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 26 }}
        className="relative max-w-5xl w-full glass-card rounded-3xl overflow-hidden border border-primary/30 neon-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={lightboxSrc}
          alt="Full view"
          className="w-full h-auto max-h-[88vh] object-contain"
        />

        {/* Close */}
        <button
          onClick={() => setLightboxSrc(null)}
          className="absolute top-4 right-4 text-xs text-muted-foreground hover:text-foreground px-4 py-2 glass rounded-xl border border-border/30 transition-colors"
        >
          Close ✕
        </button>

        {/* Prev */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => {
            const idx = screens.findIndex(s => s.src === lightboxSrc)
            const prev = (idx - 1 + screens.length) % screens.length
            setLightboxSrc(screens[prev].src)
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-card rounded-2xl border border-border/30 hover:border-primary/50 flex items-center justify-center transition-all duration-300"
        >
          <ChevronDown className="w-5 h-5 text-foreground rotate-90" />
        </motion.button>

        {/* Next */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => {
            const idx = screens.findIndex(s => s.src === lightboxSrc)
            const next = (idx + 1) % screens.length
            setLightboxSrc(screens[next].src)
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-card rounded-2xl border border-border/30 hover:border-primary/50 flex items-center justify-center transition-all duration-300"
        >
          <ChevronDown className="w-5 h-5 text-foreground -rotate-90" />
        </motion.button>

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 glass rounded-xl text-xs text-muted-foreground">
          {screens.findIndex(s => s.src === lightboxSrc) + 1} / {screens.length}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  )
}


// Experience Section - Timeline
function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "VR Development Intern",
      company: "UnityLab, Hochschule Heilbronn",
      location: "Heilbronn, Germany",
      period: "Aug 2025 - Feb 2026",
      description: "Built an immersive VR garden and library scene for the TURTLE project, a university-wide VR learning platform deployed on Meta Quest 3 using Unity 6 and Meta XR Interaction Toolkit. Solved cross-engine asset compatibility by extracting models, textures, and materials from Unreal Engine and re-integrating them into Unity with full material remapping. Implemented VR player rig, teleportation locomotion, grabbable objects, and snap interaction systems. Collaborated via GitHub in an 18-member cross-functional team.",
      highlights: ["Unity 6", "Meta Quest 3", "Meta XR Toolkit", "Unreal Engine", "GitHub"],
    },
    {
      title: "UI/UX Designer",
      company: "Hevin Technoweb LLP",
      location: "Surat, India",
      period: "Jan 2023 - Sep 2023",
      description: "Created wireframes and interactive prototypes in Figma and Adobe XD, covering complete user flows for web and mobile applications across multiple client projects. Developed responsive interfaces using HTML, CSS, and JavaScript. Conducted user research and moderated usability tests, identifying friction points and iterating on designs. Maintained visual consistency across product lines using Illustrator and Photoshop.",
      highlights: ["Figma", "Adobe XD", "HTML/CSS/JS", "User Research", "Usability Testing"],
    },
  ]

  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <SectionHeader label="Career" title="Work" highlight="Experience" />

        <div className="relative">
          {/* Timeline Line - Animated */}
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 overflow-hidden"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="w-full h-full bg-gradient-to-b from-primary via-accent to-primary/20" />
            <motion.div
              className="absolute top-0 w-full h-20 bg-gradient-to-b from-primary to-transparent"
              animate={{ y: ["-100%", "500%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.25 + 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className={`relative flex flex-col md:flex-row items-start gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div 
                className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent -translate-x-1/2 mt-2 neon-glow z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.25 + 0.5, type: "spring" }}
              />

              {/* Content */}
              <div className={`flex-1 ml-10 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group glass-card rounded-3xl p-8 border border-border/30 hover:border-primary/40 transition-all duration-500"
                >
                  {/* Meta info */}
                  <div className={`flex items-center gap-3 text-sm text-muted-foreground mb-4 flex-wrap ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <span className="flex items-center gap-2 px-3 py-1 glass rounded-full">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {exp.period}
                    </span>
                    <span className="hidden md:flex items-center gap-2 px-3 py-1 glass rounded-full">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {exp.location}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{exp.title}</h3>
                  <p className="text-lg text-primary font-semibold mb-4">{exp.company}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
                  
                  {/* Highlights */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-lg border border-primary/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Spacer */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Education Section
function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "Master of Science in Software Engineering",
      school: "Hochschule Heilbronn",
      period: "Mar 2024 - Present",
      focus: "Specializing in VR development and interactive 3D applications. Current GPA: 2.1 (German scale).",
      achievements: ["Mixed Reality Lab", "Realtime 3D Engines", "Cloud Computing", "DevOps & SecOps", "Advanced Software Architecture", "Usability Evaluation"],
    },
    {
      degree: "Bachelor of Computer Applications (B.C.A.)",
      school: "Rabindranath Tagore University, India",
      period: "Sep 2019 - Apr 2022",
      focus: "Foundations in software development, web technologies, and programming principles.",
      achievements: ["Web Development", "Software Engineering", "Computer Applications"],
    },
  ]

  return (
    <section id="education" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <SectionHeader label="Background" title="" highlight="Education" />

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ x: 10, scale: 1.01 }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="relative glass-card rounded-3xl p-8 md:p-10 border border-border/30 group-hover:border-primary/40 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center neon-glow"
                  >
                    <GraduationCap className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{edu.degree}</h3>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground px-4 py-1.5 glass rounded-full w-fit">
                        <Calendar className="w-4 h-4 text-primary" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xl text-primary font-semibold mb-3">{edu.school}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{edu.focus}</p>
                    
                    {/* Achievements */}
                    <div className="flex flex-wrap gap-3">
                      {edu.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent/10 text-accent rounded-xl border border-accent/20"
                        >
                          <Award className="w-3.5 h-3.5" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
  </section>
  )
  }

// Certifications Section
function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: "Unity VR Development",
      provider: "Unity Technologies",
      year: "2025",
      verifyLink: "https://www.credly.com/go/5D76S9ZR",
    },
    {
      title: "Unity Essentials",
      provider: "Unity Technologies",
      year: "2024",
      verifyLink: "https://www.credly.com/go/8y3n3Tis",
    },
    {
      title: "GIM & Web Designing",
      provider: "Red & White Multimedia Educations",
      year: "2022",
      verifyLink: "https://drive.google.com/file/d/1ERIo5CXrDKKxrsEID4GiO0WOesjvAW-E/view?usp=sharing",
    },
  ]

  return (
    <section id="certifications" className="py-32 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [0, -5, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-accent/15 via-accent/5 to-transparent rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <SectionHeader label="Credentials" title="Professional" highlight="Certifications" />

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-px bg-gradient-to-r from-primary/50 via-neon-cyan/50 to-accent/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              
              {/* Card */}
              <div className="relative glass-card rounded-2xl p-6 border border-border/30 group-hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                {/* Inner highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mb-5">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-neon-cyan/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-neon-cyan/20 transition-all duration-300"
                  >
                    <BadgeCheck className="w-7 h-7 text-primary group-hover:text-neon-cyan transition-colors duration-300" />
                    {/* Icon glow */}
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-neon-cyan font-medium text-sm mb-3">
                    {cert.provider}
                  </p>
                  
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-5">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.year}</span>
                  </div>
                </div>

                {/* Verify Link */}
                <motion.a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold overflow-hidden group/btn"
                >
                  {/* Button background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-neon-cyan/10 group-hover/btn:from-primary/20 group-hover/btn:to-neon-cyan/20 transition-all duration-300" />
                  <div className="absolute inset-0 border border-primary/30 group-hover/btn:border-primary/60 rounded-xl transition-colors duration-300" />
                  
                  <span className="relative text-primary group-hover/btn:text-neon-cyan transition-colors duration-300">Verify</span>
                  <ExternalLink className="relative w-4 h-4 text-primary group-hover/btn:text-neon-cyan group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
  
// Contact Section - Cinematic CTA
function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialLinks = [
    { icon: Github, href: "https://github.com/SahilKakadiya2872", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sahil-kakadiya02/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sahilkakadiya010@gmail.com", label: "Email" },
  ]

  return (
    <section id="contact" className="py-40 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-t from-primary/30 via-accent/20 to-transparent rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-8"
          >
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            Let&apos;s Build Something<br />
            <span className="text-primary neon-text">Amazing Together</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed"
          >
            Open to working student positions, thesis collaborations, and junior XR/Unity roles in Germany. Drop me a message.
          </motion.p>

          {/* CTA Button - Premium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <motion.a
              href="mailto:sahilkakadiya010@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-4 px-14 py-6 rounded-2xl font-bold text-xl overflow-hidden"
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
                animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              {/* Glow */}
              <div className="absolute inset-0 neon-glow-strong opacity-60" />
              {/* Inner highlight */}
              <div className="absolute inset-[1px] bg-gradient-to-b from-white/25 to-transparent rounded-2xl" />
              {/* Content */}
              <Mail className="relative z-10 w-6 h-6 text-white" />
              <span className="relative z-10 text-white">Say Hello</span>
              <ArrowUpRight className="relative z-10 w-6 h-6 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                whileHover={{ y: -8, scale: 1.15 }}
                className="group p-5 glass-card rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300"
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border/30 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} Sahil Kakadiya. All rights reserved.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm text-muted-foreground flex items-center gap-2"
        >
          <span className="text-primary neon-text">Designed & built</span> by Sahil Kakadiya
        </motion.p>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Portfolio() {
  return (
    <main className="relative noise vignette">
      <CinematicBackground />
      <FloatingParticles count={6} />
      <Navigation />
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <ProjectsSection />
      <div className="section-divider" />
      <DesignSection />
      <div className="section-divider" />
      <ExperienceSection />
      <div className="section-divider" />
      <EducationSection />
      <div className="section-divider" />
      <CertificationsSection />
      <div className="section-divider" />
      <ContactSection />
      <Footer />
    </main>
  )
}
