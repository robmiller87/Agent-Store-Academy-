import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog-data'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }
  
  return {
    title: `${post.title} | Agent Store Academy`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Meta */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
          <div className="flex gap-4 text-gray-400">
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:text-white prose-headings:font-bold
          prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-gray-300 prose-p:leading-relaxed
          prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white
          prose-code:text-emerald-400 prose-code:bg-gray-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800
          prose-blockquote:border-emerald-400 prose-blockquote:bg-gray-900/50 prose-blockquote:py-1
          prose-ul:text-gray-300 prose-li:text-gray-300
        ">
          {post.content.split('\n').map((line, i) => {
            // Headers
            if (line.startsWith('# ')) {
              return <h1 key={i}>{line.slice(2)}</h1>
            }
            if (line.startsWith('## ')) {
              return <h2 key={i}>{line.slice(3)}</h2>
            }
            if (line.startsWith('### ')) {
              return <h3 key={i}>{line.slice(4)}</h3>
            }
            // Code blocks
            if (line.startsWith('```')) {
              return null // Skip code fence markers
            }
            if (line.startsWith('→')) {
              return <p key={i} className="text-gray-300 pl-4 border-l-2 border-emerald-400/50 my-1">{line}</p>
            }
            // Empty lines
            if (line.trim() === '') {
              return <div key={i} className="h-4" />
            }
            // Bold text
            const processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            // Italic
            const withItalic = processedLine.replace(/\*(.*?)\*/g, '<em>$1</em>')
            // Code
            const withCode = withItalic.replace(/`(.*?)`/g, '<code>$1</code>')
            
            return <p key={i} dangerouslySetInnerHTML={{ __html: withCode }} />
          })}
        </div>

        {/* CTA */}
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

        {/* Back */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <Link href="/blog" className="text-gray-400 hover:text-white">
            ← Back to all posts
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-8">
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
