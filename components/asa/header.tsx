import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          <span className="text-primary">Agent</span>Store Academy
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
            Blog
          </Link>
          <Link
            href="https://tally.so/r/wL1E1A"
            target="_blank"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Join €50
          </Link>
        </nav>
      </div>
    </header>
  )
}
