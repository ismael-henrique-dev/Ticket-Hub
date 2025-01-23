import { Button } from '../button'
import { Input } from '../input'

export function FormLogin() {
  return (
    <form action='' className='flex flex-col gap-8 flex-1'>
      <div className='flex gap-3 flex-col'>
        <span className='text-xs font-semibold text-zinc-600'>
          Email e senha necessários para entrar
        </span>

        <Input
          type='email'
          placeholder='Digite seu email'
          variant='minimalist'
        />
        <Input
          type='password'
          placeholder='Digite sua senha'
          variant='minimalist'
        />
        <a
          href='/auth/forgot-password'
          className='text-center text-balance underline'
        >
          Esqueci a senha
        </a>
      </div>
      <Button type='submit'  >
        Entrar
      </Button>
    </form>
  )
}
