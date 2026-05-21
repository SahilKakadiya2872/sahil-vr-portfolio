import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Sahil Kakadiya | VR Developer & Software Engineer',
  description: 'Portfolio of Sahil Kakadiya - Software Engineering Master\'s student specializing in VR development, Unity, Meta Quest 3, and interactive 3D applications.',
  keywords: ['VR Developer', 'Unity', 'Meta Quest 3', 'Software Engineer', 'Game Development', 'Blender', 'Unreal Engine'],
  authors: [{ name: 'Sahil Kakadiya' }],
  openGraph: {
    title: 'Sahil Kakadiya | VR Developer & Software Engineer',
    description: 'Portfolio showcasing VR development, game development, and interactive 3D applications.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d1117',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
