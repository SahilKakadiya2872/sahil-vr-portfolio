"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    type: "education",
    title: "M.Sc. Software Engineering",
    organization: "Hochschule Heilbronn",
    location: "Heilbronn, Germany",
    period: "Mar 2024 - Present",
    description: "Specializing in VR development and interactive 3D applications. Current GPA: 2.1 (German scale, equivalent to Good).",
    highlights: ["Mixed Reality Lab", "Realtime 3D-Engines", "Cloud Computing", "DevOps & SecOps", "Advanced Software Architecture"],
  },
  {
    type: "work",
    title: "VR Development Intern",
    organization: "UnityLab, Hochschule Heilbronn",
    location: "Heilbronn, Germany",
    period: "Aug 2025 - Feb 2026",
    description: "Developed an immersive VR environment (garden scene) for the TURTLE project, a university-wide VR learning platform targeting the Meta Quest 3 using Unity 6 and Meta XR Interaction Toolkit. Implemented VR player setup, teleportation locomotion, grabbable objects, and snap interaction systems. Collaborated using GitHub across an 18-member cross-functional development team.",
    highlights: ["Unity 6", "Meta Quest 3", "Meta XR Interaction Toolkit", "GitHub"],
  },
  {
    type: "work",
    title: "UI/UX Designer",
    organization: "Hevin Technoweb LLP",
    location: "Surat, Gujarat, India",
    period: "Jan 2023 - Sep 2023",
    description: "Designed wireframes and interactive prototypes using Figma and Adobe XD, covering complete user flows for web and mobile applications. Built responsive web and mobile interfaces using HTML, CSS, and JavaScript. Conducted user research and usability testing to identify friction points and improve UX quality.",
    highlights: ["Figma", "Adobe XD", "HTML/CSS/JS", "User Research", "Usability Testing"],
  },
  {
    type: "education",
    title: "Bachelor of Computer Applications",
    organization: "Rabindranath Tagore University",
    location: "India",
    period: "Sep 2019 - Apr 2022",
    description: "Completed Bachelor's degree in Computer Applications with focus on software development fundamentals, web technologies, and programming principles.",
    highlights: ["Computer Applications", "Web Development", "Software Engineering"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Experience</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.organization}-${exp.period}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-0 sm:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-primary glow hidden sm:flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background" />
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full glass flex items-center justify-center sm:hidden">
                    {exp.type === "education" ? (
                      <GraduationCap className="w-5 h-5 text-primary" />
                    ) : (
                      <Briefcase className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-xl p-6 hover:glow-border transition-all duration-500 ml-16 sm:ml-0"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg glass hidden sm:flex items-center justify-center">
                            {exp.type === "education" ? (
                              <GraduationCap className="w-4 h-4 text-primary" />
                            ) : (
                              <Briefcase className="w-4 h-4 text-primary" />
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                        </div>
                        <p className="text-primary font-medium">{exp.organization}</p>
                        <p className="text-muted-foreground text-sm">{exp.location}</p>
                      </div>
                      <span className="text-muted-foreground font-mono text-sm whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
