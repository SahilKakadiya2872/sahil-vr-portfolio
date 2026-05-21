"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Gamepad2, Globe, Glasses, Box } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "TURTLE VR - Hoffmann Experience",
    description: "A portfolio showcase of my internship contribution to the TURTLE VR Project at Hochschule Heilbronn UnityLab. Developed the second scene - a VR garden/library environment for the Hoffmann Experience subproject. Implemented cross-engine asset extraction from Unreal to Unity, VR player setup, teleportation locomotion, grabbable objects, and snap interaction systems for Meta Quest 3.",
    tags: ["Unity", "Meta Quest 3", "Meta XR Toolkit", "C#", "Unreal Engine"],
    icon: Glasses,
    gradient: "from-primary/20 to-primary/5",
    links: {
      github: "https://github.com/SahilKakadiya2872/Hoffmann-Experience-VR",
    },
  },
  {
    title: "Ninja Survival 3D Game",
    description: "A 3D animated Unity project set in a dark forest environment, featuring a controllable ninja character, animated dinosaurs, realistic terrain, and third-person gameplay mechanics. Focused on character animation using Mixamo, environment design with Unity Terrain Tools, and immersive visual experience.",
    tags: ["Unity", "C#", "Mixamo", "3D Animation", "Terrain Tools"],
    icon: Gamepad2,
    gradient: "from-chart-2/20 to-chart-2/5",
    links: {
      github: "https://github.com/SahilKakadiya2872/Ninja-Survival",
    },
  },
  {
    title: "VR Room Experience",
    description: "An interactive VR room experience developed using Unity XR Interaction Toolkit as part of the official Unity VR Development learning pathway. Features VR room exploration, teleportation movement, realistic object interaction, grabbable objects, and physics-based interactions with XR controller support.",
    tags: ["Unity", "XR Interaction Toolkit", "OpenXR", "C#", "VR"],
    icon: Box,
    gradient: "from-chart-3/20 to-chart-3/5",
    links: {
      github: "https://github.com/SahilKakadiya2872/VR-Room-Sahil",
    },
  },
  {
    title: "Wedding Villa Web Application",
    description: "A full-stack web application built as part of my Bachelor&apos;s final project using PHP, MySQL, HTML, CSS, and JavaScript. Designed user interfaces with Figma and Photoshop, integrating a curated vendor database for venues, photographers, and services.",
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Figma"],
    icon: Globe,
    gradient: "from-chart-4/20 to-chart-4/5",
    links: {},
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Projects</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="glass-card rounded-2xl overflow-hidden hover:glow-border transition-all duration-500"
                  >
                    <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                      {/* Project visual */}
                      <div className={`relative h-48 md:h-full min-h-[200px] bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                        <div className="absolute inset-0 grid-pattern opacity-30" />
                        
                        {/* Animated orbital rings */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute w-40 h-40 rounded-full border border-primary/20"
                          />
                          <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute w-32 h-32 rounded-full border border-primary/30"
                          />
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute w-24 h-24 rounded-full border border-primary/40"
                          />
                        </div>
                        
                        {/* Floating particles */}
                        <motion.div
                          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute top-8 left-8 w-2 h-2 bg-primary rounded-full"
                        />
                        <motion.div
                          animate={{ y: [10, -10, 10], opacity: [0.5, 0.9, 0.5] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                          className="absolute bottom-12 right-12 w-3 h-3 bg-primary/60 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [-5, 15, -5], opacity: [0.4, 0.8, 0.4] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-primary/80 rounded-full"
                        />
                        
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="relative z-10"
                        >
                          <div className="relative">
                            {/* Outer glow pulse */}
                            <motion.div
                              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute inset-0 w-24 h-24 rounded-2xl bg-primary/30 blur-xl"
                            />
                            {/* Icon container */}
                            <div className="relative w-24 h-24 rounded-2xl glass flex items-center justify-center border border-primary/30 shadow-lg shadow-primary/20">
                              <Icon className="w-12 h-12 text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Project details */}
                      <div className="p-6 md:py-8">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            {project.links.github && (
                              <Link
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label={`View ${project.title} on GitHub`}
                              >
                                <Github className="w-5 h-5" />
                              </Link>
                            )}
                            {project.links.demo && (
                              <Link
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label={`View ${project.title} demo`}
                              >
                                <ExternalLink className="w-5 h-5" />
                              </Link>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Link
              href="https://github.com/SahilKakadiya2872"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              View More Projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
