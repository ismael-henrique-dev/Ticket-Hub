'use client'

import { Button } from '../button'
import { Input } from '../input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormSchema, loginFormSchema } from '@/validators/login-validators'
import { loginUser } from '@/services/http/auth/login-user'
import { showErrorToast, showSuccessToast } from '../toasts'
import { useRouter } from 'next/navigation'

export function FormLogin() {
  const { push } = useRouter()
  const { register, handleSubmit, formState } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleSubmitFormLogin(data: LoginFormSchema) {
    try {
      await loginUser(data)
      showSuccessToast('Login efetuado com sucesso!')
      push('/')
    } catch {
      showErrorToast('Credencias incorretas.')
    }
  }

  return (
    <form
      action='/'
      onSubmit={handleSubmit(handleSubmitFormLogin)}
      className='flex flex-col gap-8 flex-1'
    >
      <div className='flex gap-3 flex-col'>
        <span className='text-xs font-semibold text-zinc-600'>
          Email e senha necessários para entrar
        </span>

        <Input
          type='email'
          placeholder='Digite seu email'
          variant='minimalist'
          {...register('Email')}
        />
        {formState.errors.Email && (
          <p className='text-red-500 text-xs'>
            {formState.errors.Email.message}
          </p>
        )}
        <Input
          type='password'
          placeholder='Digite sua senha'
          variant='minimalist'
          {...register('Password')}
        />
        {formState.errors.Password && (
          <p className='text-red-500 text-xs'>
            {formState.errors.Password.message}
          </p>
        )}
        <a
          href='/auth/forgot-password'
          className='text-center text-balance underline'
        >
          Esqueci a senha
        </a>
      </div>
      <Button type='submit'>Entrar</Button>
    </form>
  )
}
