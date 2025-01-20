import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MainNav } from '@/components/main-nav'
import { MainFooter } from '@/components/main-footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Campus Day 2025',
  description: 'Tagline di sini',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <MainNav />
        <main>
          {children}
        </main>
        <MainFooter/>
      </body>
    </html>
  )
}

