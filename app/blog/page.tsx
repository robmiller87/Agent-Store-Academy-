import Link from 'next/link'
import { getAllPosts } from '@/lib/blog-data'

export const metadata = {
  title: 'Blog | Agent Store Academy',
  description: 'Learn how to build and deploy AI agents for business automation.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span className="text-white">Agent Store</span>
            <span className="text-yellow-400"> Academy</span>
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <Link href="/blog" className="text-white">Blog</Link>
          </nav>
        </div>
      </header>

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
                    <span key={tag} className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-3">{post.excerpt}</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>•</span>
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
      </div>
    </main>
  )
}
