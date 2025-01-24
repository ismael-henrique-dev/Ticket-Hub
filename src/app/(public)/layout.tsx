import type { Metadata } from 'next'
import { Header } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Title',
  description: 'Generated by create next app',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
