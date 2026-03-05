import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-800/50">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          <span>Agent Store</span>
          <span className="text-emerald-400"> Academy</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-muted-foreground hover:text-white transition-colors">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
