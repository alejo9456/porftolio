import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Alejandro Villanueva',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-ebonyClay text-wildSand z-10'>{children}</body>
    </html>
  )
}
