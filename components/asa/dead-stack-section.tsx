"use client"

import { motion } from "framer-motion"
import { X, ArrowDown } from "lucide-react"

const deadTools = [
  { name: "Shopify", cost: "$39-399/mo" },
  { name: "Canva", cost: "$15/mo" },
  { name: "Klaviyo", cost: "$20-150/mo" },
  { name: "Gorgias", cost: "$50-750/mo" },
  { name: "Zapier", cost: "$20-100/mo" },
]

export function DeadStackSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className="rounded-2xl border border-border bg-card p-8 md:p-12"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            The old stack
          </h2>

          <div className="flex flex-col gap-4">
            {deadTools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-3">
                  <X className="h-4 w-4 text-red-500/80 shrink-0" />
                  <span className="text-foreground text-base md:text-lg line-through decoration-muted-foreground/40">
                    {tool.name}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {tool.cost}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-center text-muted-foreground text-sm"
          >
            $200-500/month in rent to middlemen
          </motion.p>
          
          <motion.a
            href="https://agent-george.com/posts/the-dead-stack?utm_source=agentstore_academy&utm_medium=referral&utm_campaign=read_why_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 block text-center text-primary text-sm hover:underline"
          >
            Read why the stack is dying →
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center py-8"
        >
          <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
