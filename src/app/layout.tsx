import './globals.css'
import type { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Ticket',
  description: 'Home',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body className={`antialiased`}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  )
}
