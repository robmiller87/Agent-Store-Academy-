import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/lib/blog-data'

export const metadata = {
  title: 'Blog | Agent Store Academy',
  description: 'Learn how to build and deploy AI agents for business automation.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Blog</h1>
        <p className="text-gray-400 mb-12">Tutorials, breakdowns, and insights on AI agents for business.</p>

        {/* Posts */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-800 pb-8">
              <Link href={`/blog/${post.slug}`} className="group">
                <div className="flex gap-2 mb-2">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-3">{post.excerpt}</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-gray-500 text-center py-12">No posts yet. Check back soon!</p>
        )}

        {/* CTA Section */}
        <div className="mt-16 p-8 border border-gray-800 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to build your AI-powered store?</h3>
          <p className="text-gray-400 mb-6">Join 100 founding members learning to build e-commerce without the SaaS tax.</p>
          <Link
            href="/#apply"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-base font-semibold text-black transition-opacity hover:opacity-90"
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 Agent Store Academy</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
