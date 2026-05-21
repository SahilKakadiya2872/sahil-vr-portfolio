"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink, Calendar } from "lucide-react"

const certifications = [
  {
    title: "Unity VR Development",
    issuer: "Unity Technologies",
    date: "2025",
    credentialId: "UC-XXXXX",
    link: "https://www.credly.com/go/5D76S9ZR",
  },
  {
    title: "Unity Essentials",
    issuer: "Unity Technologies",
    date: "2024",
    credentialId: "META-XXXXX",
    link: "https://www.credly.com/go/8y3n3Tis",
  },
  {
    title: "GIM & Web Designing",
    issuer: "Red & White Multimedia Educations",
    date: "2022",
    credentialId: "BF-XXXXX",
    link: "https://drive.google.com/file/d/1ERIo5CXrDKKxrsEID4GiO0WOesjvAW-E/view?usp=sharing",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Glow effect */}
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">05.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Certifications</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card rounded-xl p-6 h-full hover:glow-border transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-1 truncate">
                        {cert.title}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-3">
                        {cert.issuer}
                      </p>
                      
                      <div className="flex items-center gap-4 text-muted-foreground text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {cert.date}
                        </span>
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Verify
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
