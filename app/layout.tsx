import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Agent Store Academy - The Shopify Era Tech Stack is Dead',
  description: 'Open source tools + AI Agents. Own everything. Pay almost nothing. Join the founding cohort of 100 builders.',
  openGraph: {
    title: 'The Shopify Era Tech Stack is Dead',
    description: 'Open source tools + AI Agents. Own everything. Pay almost nothing. Join the founding cohort of 100 builders.',
    url: 'https://agentstore.academy',
    siteName: 'Agent Store Academy',
    images: [
      {
        url: 'https://agentstore.academy/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agent Store Academy - The Shopify Era Tech Stack is Dead',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Shopify Era Tech Stack is Dead',
    description: 'Open source tools + AI Agents. Own everything. Pay almost nothing.',
    images: ['https://agentstore.academy/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
