'use client'

import React, { useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerUser } from '@/services/http/auth/register-user'
import {
  registerFormSchema,
  RegisterFormSchema,
} from '@/validators/register-validators'
import { useRouter } from 'next/navigation'
import { showErrorToast, showSuccessToast } from '../toasts'

export function FormRegister() {
  const { push } = useRouter()
  const [cpf, setCpf] = useState('')

  const { register, handleSubmit, formState, setValue } =
    useForm<RegisterFormSchema>({
      resolver: zodResolver(registerFormSchema),
    })

  // Função para aplicar máscara no CPF
  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, '')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d{2})$/, '$1-$2')
    setCpf(value)
    setValue('CPF', value, { shouldValidate: true }) 
  }

  async function handleSubmitFormRegister(data: RegisterFormSchema) {
    try {
      await registerUser(data)
      showSuccessToast('Conta criada com sucesso!')
      push('/auth/login')
    } catch {
      showErrorToast('Erro ao criar conta.')
    }
  }

  return (
    <form
      action='/'
      onSubmit={handleSubmit(handleSubmitFormRegister)}
      className='flex flex-col gap-8 flex-1'
    >
      <div className='flex gap-3 flex-col'>
        <span className='text-xs font-semibold text-zinc-600'>
          Nome, email e senha necessários para fazer o cadastro
        </span>
        <Input
          type='text'
          placeholder='Informe seu nome'
          variant='minimalist'
          {...register('Nome')}
        />
        {formState.errors.Nome && (
          <p className='text-red-500 text-xs'>
            {formState.errors.Nome.message}
          </p>
        )}
        <Input
          type='email'
          placeholder='Informe seu email'
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
          placeholder='Crie sua senha'
          variant='minimalist'
          {...register('Password')}
        />
        {formState.errors.Password && (
          <p className='text-red-500 text-xs'>
            {formState.errors.Password.message}
          </p>
        )}
        <Input
          type='text'
          placeholder='Digite seu CPF'
          variant='minimalist'
          value={cpf}
          onChange={handleCpfChange}
        />
        {formState.errors.CPF && (
          <p className='text-red-500 text-xs'>
            {formState.errors.CPF.message}
          </p>
        )}
      </div>
      <Button type='submit'>Cadastrar</Button>
    </form>
  )
}
