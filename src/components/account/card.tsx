import Link from 'next/link'
import { Button } from '../ui'
import { deleteUser } from '@/services/http/delete-user'

type CardProps = {
  description: string
  buttonText: string
  actionType: 'redirect' | 'click'
  Icon: React.ElementType
}

export function Card({ Icon, description, buttonText, actionType }: CardProps) {
  return (
    <div className='flex justify-between md:items-center px-6 py-6 border border-zinc-300 rounded-xl md:flex-row flex-col gap-3'>
      <div className='flex gap-3 items-center'>
        <div className='md:flex hidden'>
          <Icon className='text-zinc-700' />
        </div>
        <span className='md:max-w-4xl text-sm'>{description}</span>
      </div>
      {actionType === 'click' && (
        <Button variant='square-red' type='button' onClick={deleteUser}>
          {buttonText}
        </Button>
      )}
      {actionType === 'redirect' && (
        <Link href='auth/forgot-password' className='bg-orange-500 text-zinc-50 rounded-lg text-sm font-bold px-6 py-2 flex items-center justify-center transition-all hover:bg-orange-600'>
          {buttonText}
        </Link>
      )}
    </div>
  )
}
