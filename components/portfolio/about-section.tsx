"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">About Me</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed text-lg">
                I&apos;m a <span className="text-primary">Software Engineering</span> master&apos;s student 
                at Hochschule Heilbronn with a deep passion for creating immersive digital experiences. 
                My journey into technology began with a curiosity about how virtual worlds are built, 
                which led me to specialize in <span className="text-primary">VR development</span> and 
                interactive 3D applications.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                I thrive at the intersection of creativity and technology, combining my skills in 
                game development, UI/UX design, and frontend engineering to build experiences that 
                push the boundaries of what&apos;s possible in the digital realm.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                When I&apos;m not coding or designing in VR, I explore new technologies, contribute 
                to open-source projects, and continuously expand my knowledge in emerging XR trends.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8 glow-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Quick Facts</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-primary font-mono text-sm mt-1">→</span>
                    <div>
                      <span className="text-foreground font-medium">Education</span>
                      <p className="text-muted-foreground text-sm">M.Sc. Software Engineering, Hochschule Heilbronn</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-primary font-mono text-sm mt-1">→</span>
                    <div>
                      <span className="text-foreground font-medium">Focus Area</span>
                      <p className="text-muted-foreground text-sm">VR Development, Interactive 3D Applications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-primary font-mono text-sm mt-1">→</span>
                    <div>
                      <span className="text-foreground font-medium">Primary Tools</span>
                      <p className="text-muted-foreground text-sm">Unity, Meta Quest 3, Meta XR Interaction Toolkit</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-primary font-mono text-sm mt-1">→</span>
                    <div>
                      <span className="text-foreground font-medium">Location</span>
                      <p className="text-muted-foreground text-sm">Heilbronn, Germany</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-lg" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-lg blur-sm" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
