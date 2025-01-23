import { Button } from '../button'
import { Input } from '../input'

export function FormRegister() {
  return (
    <form action='' className='flex flex-col gap-8 flex-1'>
      <div className='flex gap-3 flex-col'>
        <span className='text-xs font-semibold text-zinc-600'>
          {' '}
          Nome, email e senha necessários para fazer o cadastro
        </span>
        <Input
          type='text'
          placeholder='Informe seu nome'
          variant='minimalist'
        />
        <Input
          type='email'
          placeholder='Informe seu email'
          variant='minimalist'
        />
        <Input
          type='password'
          placeholder='Crie sua senha'
          variant='minimalist'
        />
      </div>
      <a
        href='/auth/forgot-password'
        className='text-center text-balance underline'
      >
        Esqueci a senha
      </a>
      <Button type='submit' variant='submit'>
        Cadastrar
      </Button>
    </form>
  )
}
