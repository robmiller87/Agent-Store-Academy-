import type { Metadata } from "next"
import { Header } from "@/components/asa/header"

export const metadata: Metadata = {
  title: "Blog | Agent Store Academy",
  description: "Tutorials, breakdowns, and insights on AI agents for business.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Header />
      {children}
    </div>
  )
}
