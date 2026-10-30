import type { Metadata } from 'next'
import { Inter, Calistoga } from 'next/font/google'
import './globals.css'
// IMPORT CONFIG
import { userData } from '@/userConfig'

// 1. Load the Fonts (Matches your screenshots)
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const calistoga = Calistoga({ 
  weight: '400', 
  subsets: ['latin'], 
  variable: '--font-calistoga' 
})

// 2. Generate Dynamic Keywords from the Skills List
const generateKeywords = () => {
  // Extracts all skill items (e.g., "SQL", "Python") into a single list
  const skillKeywords = userData.skills.flatMap(category => category.items)
  return [userData.role, 'Portfolio', 'Data Analyst', ...skillKeywords]
}

// 3. Dynamic Metadata (This fixes the browser tab name)
export const metadata: Metadata = {
  title: `${userData.name} | ${userData.role}`,
  description: userData.summary,
  keywords: generateKeywords(),
  authors: [{ name: userData.name }],
  openGraph: {
    title: `${userData.name} | ${userData.role}`,
    description: userData.summary,
    type: 'website',
    // Uses the profile picture as the social share image if available
    images: userData.profileUrl ? [userData.profileUrl] : [],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      {/* 4. Apply Fonts to Body */}
      <body className={`${inter.variable} ${calistoga.variable} font-sans antialiased bg-surface-900 text-white`}>
        {children}
      </body>
    </html>
  )
}
