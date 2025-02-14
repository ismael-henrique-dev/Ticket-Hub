import type { Metadata } from 'next'
import { Header } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Seja bem vindo ao TicketPass!',
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
