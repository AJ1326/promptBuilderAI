import Nav from '@components/Nav'
import '@styles/global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create prompts like a pro.',
  description: 'Generate prompts and share them with your community.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='main'>
          <div className='gradient'></div>
        </div>
        <main className='app'>
          <Nav></Nav>
          {children}
        </main>
      </body>
    </html>
  )
}
