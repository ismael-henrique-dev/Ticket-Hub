import { Lock, Mail, UserRound } from 'lucide-react'
import { Button } from '../button'
import { Input } from '../input'

export function FormAccount() {
  return (
    <form
      action=''
      className='flex flex-col gap-8 p-10 flex-1 border border-zinc-300 rounded-xl'
    >
      <div className='flex gap-3 flex-col'>
        <label htmlFor="" className='text-sm font-semibold'>Email</label>
        <Input
          type='email'
          placeholder='Digite seu email'
          variant='minimalist'
          icon={Mail}
        />
        <label htmlFor="" className='text-sm font-semibold'>Senha</label>
        <Input
          type='password'
          placeholder='Digite sua senha'
          variant='minimalist'
          icon={Lock}
        />
        <label htmlFor="" className='text-sm font-semibold'>Nome</label>
        <Input
          type='password'
          placeholder='Digite sua senha'
          variant='minimalist'
          icon={UserRound}
        />
      </div>
      <div className='flex gap-4'>
        <Button variant='cancel'>Cancelar</Button>
        <Button variant='square-red' type='submit'>Entrar</Button>
      </div>
    </form>
  )
}
