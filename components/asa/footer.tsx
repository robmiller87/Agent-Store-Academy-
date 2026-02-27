export function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-border">
      <div className="mx-auto max-w-2xl text-center space-y-4">
        <div className="flex justify-center gap-6 text-sm">
          <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
          <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
        </div>
        <p className="text-sm text-muted-foreground">
          Built by{" "}
          <a
            href="https://linkedin.com/in/rm16/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Robert Miller
          </a>
          {" "}+{" "}
          <a
            href="https://agent-george.com?utm_source=agentstore_academy&utm_medium=referral&utm_campaign=built_by_george"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            George
          </a>
        </p>
        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Agent Store Academy
        </p>
      </div>
    </footer>
  )
}
