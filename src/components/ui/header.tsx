import Link from 'next/link'
import logo from '../../assets/logo.svg'
import Image from 'next/image'

// type LinkProps = {
//   isActive: boolean
// }

export function Header() {
  // const isActiveLink = ({ isActive }: LinkProps) =>
  //   isActive
  //     ? "relative text-orange-500 font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-1 after:bg-orange-500"
  //     : 'relative text-black hover:text-orange-500'

  return (
    <header className='bg-zinc-100 flex justify-between px-6 py-4 m-2 rounded-md'>
      <Link href='/'>
        <Image src={logo} alt='logo' />
      </Link>
      <nav className='flex gap-11'>
        <Link href='/'>Home</Link>
        <Link href='/my-tickets'>Meus Bilhetes</Link>
        <Link href='/account'>Conta</Link>
      </nav>
    </header>
  )
}
