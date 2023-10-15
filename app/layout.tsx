import { Footer, Navbar } from '@/Components'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Busworld',
  description: 'Coachbus Booking App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
