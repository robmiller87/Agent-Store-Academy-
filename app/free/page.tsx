"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bot, Download, CheckCircle, ArrowRight } from "lucide-react"

export default function FreePage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setLoading(true)
    
    // Send to Tally or your email service
    // For now, redirect to the PDF directly after capturing intent
    try {
      // You can add Tally form submission here via API
      // await fetch('https://tally.so/r/YOUR_FORM_ID', ...)
      
      setSubmitted(true)
      
      // Open PDF in new tab after short delay
      setTimeout(() => {
        window.open('/playbook.pdf', '_blank')
      }, 1500)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Simple Header */}
      <header className="px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          <span className="font-semibold text-sm">Agent Store Academy</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full">
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm">
                  <Download className="h-4 w-4" />
                  Free Guide
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl md:text-5xl font-bold text-center text-foreground leading-tight mb-4">
                The $300/Month Stack is Dead
              </h1>
              
              <p className="text-lg text-muted-foreground text-center mb-8 max-w-md mx-auto">
                Learn how to replace Shopify, Canva, Klaviyo & Zapier with open source + AI agents.
              </p>

              {/* What's Inside */}
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  What's inside the playbook:
                </p>
                <ul className="space-y-3">
                  {[
                    "The exact open-source stack replacing $300/mo SaaS",
                    "How AI agents handle what you used to pay humans for",
                    "Setup guides for Medusa, n8n, and agent workflows",
                    "Real cost breakdown: $300/mo → $10/mo"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-4 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                />
                <button
                  type="submit"
                  disabled={loading || !email}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Get the Free Playbook
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Check your downloads!
              </h2>
              <p className="text-muted-foreground mb-6">
                The playbook is opening in a new tab. If it doesn't appear,{" "}
                <a href="/playbook.pdf" className="text-primary hover:underline">
                  click here to download
                </a>.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Learn about Agent Store Academy
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          )}
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="px-6 py-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          Built by{" "}
          <a href="https://agent-george.com?utm_source=agentstore_academy&utm_medium=referral&utm_campaign=free_playbook" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            George
          </a>
          {" "}🤖
        </p>
      </footer>
    </main>
  )
}
