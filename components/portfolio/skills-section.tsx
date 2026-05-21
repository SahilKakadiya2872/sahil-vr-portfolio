"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  {
    category: "VR & 3D Development",
    items: [
      { name: "Unity", level: 95 },
      { name: "Meta XR Toolkit", level: 90 },
      { name: "Meta Quest 3", level: 88 },
      { name: "Blender", level: 75 },
      { name: "Unreal Engine", level: 70 },
    ],
  },
  {
    category: "Game Development",
    items: [
      { name: "C#", level: 92 },
      { name: "Game Design", level: 85 },
      { name: "3D Modeling", level: 78 },
      { name: "Shader Programming", level: 72 },
      { name: "Animation", level: 75 },
    ],
  },
  {
    category: "Designing Tools & Frontend",
    items: [
      { name: "Photoshop", level: 95 },
      { name: "Figma", level: 95 },
      { name: "HTML/CSS", level: 98 },
      { name: "JavaScript", level: 82 },
      { name: "React", level: 78 },
    ],
  },
  
]

const technologies = [
  "Unity", "Meta Quest 3", "Meta XR Interaction Toolkit", "Blender", "Unreal Engine",
  "C#", "TypeScript", "React", "Next.js", "Tailwind CSS", "Git", "Figma",
  "WebXR", "OpenXR", "VR UI Design", "3D Modeling", "Shader Graph"
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Skills & Technologies</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="glass-card rounded-xl p-6 hover:glow-border transition-all duration-500"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground text-sm">{skill.name}</span>
                        <span className="text-primary font-mono text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "oklch(0.75 0.18 195 / 0.2)" }}
                  className="px-4 py-2 glass rounded-full text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
