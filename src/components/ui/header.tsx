'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import logo from '../../assets/logo.svg'
import Image from 'next/image'

export function Header() {
  const router = useRouter()
  const pathname = usePathname()

  const isActiveLink = (href: string) =>
    pathname === href
      ? 'relative text-orange-500 font-bold after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-1 after:bg-orange-500'
      : 'relative text-black hover:text-orange-500'

  return (
    <header className='bg-zinc-100 flex justify-between px-6 py-4 m-2 rounded-md md:flex-row flex-col gap-4'>
      <Link href='/'>
        <Image src={logo} alt='logo' />
      </Link>
      <nav className='flex gap-11 justify-between'>
        <Link href='/' className={isActiveLink('/')}>
          Home
        </Link>
        <Link href='/my-tickets' className={isActiveLink('/my-tickets')} onMouseEnter={() => {
          router.prefetch('/my-tickets')
        }}>
          Meus Bilhetes
        </Link>
        <Link href='/account' className={isActiveLink('/account')} onMouseEnter={() => {
          router.prefetch('/account')
        }}>
          Conta
        </Link>
      </nav>
    </header>
  )
}
