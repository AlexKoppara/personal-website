import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex Koppara',
  description: "Alex Koppara's personal website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta property="og:title" content="Alex Koppara" />
      <meta property="og:type" content="profile" />
      <meta property="og:url" content="https://alexkoppara.com" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
