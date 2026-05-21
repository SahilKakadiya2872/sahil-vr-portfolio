"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-border w-16 sm:w-32" />
            <span className="text-primary font-mono text-sm">06.</span>
            <div className="h-px bg-border w-16 sm:w-32" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I&apos;m always open to discussing new projects, creative ideas, or opportunities 
            to be part of your visions. Whether you have a question or just want to say hi, 
            feel free to reach out!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-8 sm:p-12 mb-12"
          >
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-muted-foreground text-sm">Email</p>
                  <a 
                    href="mailto:sahil.kakadiya@example.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    sahilkakadiya010@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="text-foreground">Heilbronn, Germany</p>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="mailto:sahilkakadiya010@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 glow"
              >
                <Send className="w-5 h-5" />
                Send Message
              </a>
            </motion.div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-6"
          >
            <Link
              href="https://github.com/SahilKakadiya2872"
              target="_blank"
              rel="noopener noreferrer"
              className="glass w-12 h-12 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sahil-kakadiya02/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass w-12 h-12 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
