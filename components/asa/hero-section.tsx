"use client"

import { ArrowRight, Bot } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6 pt-32 pb-24 md:pt-44 md:pb-32 text-center relative">
      {/* Agent Proof Badge - Top Right */}
      <motion.a
        href="https://agent-george.com?utm_source=agentstore_academy&utm_medium=referral&utm_campaign=built_by_george"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 hover:bg-primary/20 transition-colors group"
      >
        <img 
          src="/george-pixel-v5.png" 
          alt="George" 
          className="h-6 w-6 rounded-full"
        />
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        <span className="text-sm font-medium text-primary">Built by Agent George</span>
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="flex items-center gap-2 mb-8"
      >
        <Bot className="h-6 w-6 text-primary" />
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Agent Store Academy
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl text-balance leading-[1.1]"
      >
        The Shopify Era Tech Stack is Dead
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
      >
        Open source tools + AI Agents. Own everything. Pay almost nothing.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
        className="mt-10 flex flex-col items-center gap-4"
      >
        <a
          href="#apply"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          See If You Qualify
          <ArrowRight className="h-4 w-4" />
        </a>
        <p className="text-sm text-muted-foreground">
          <span className="line-through">$250/yr</span>
          {" → "}
          <span className="font-semibold text-foreground">$50</span>
          {" · Founding cohort (100 spots)"}
        </p>
      </motion.div>
    </section>
  )
}
