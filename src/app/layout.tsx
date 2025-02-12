import './globals.css'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Toaster } from 'sonner'

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
        <Toaster />
      </body>
    </html>
  )
}
