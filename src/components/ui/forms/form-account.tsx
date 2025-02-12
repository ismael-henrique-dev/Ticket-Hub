'use client'

import { Mail, UserRound } from 'lucide-react'
import { Button } from '../button'
import { Input } from '../input'
import { User } from '@/types/user'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { updateUserAccount } from '@/services/http/auth/update-user-account'

type FormAccountProps = {
  data: User
}

const updateAccountFormSchema = z.object({
  Nome: z.string().min(3, 'O nome deve conter pelo menos 3 caracteres.').optional(),
  Email: z.string().email().optional(),
})

type UpdateAccountFormSchema = z.infer<typeof updateAccountFormSchema>

export function FormAccount({ data }: FormAccountProps) {
  const { register, watch, handleSubmit, formState } = useForm<UpdateAccountFormSchema>({
    resolver: zodResolver(updateAccountFormSchema),
    defaultValues: {
      Nome: data.Nome,
      Email: data.Email,
    },
  })

  const watchedValues = watch()

  function getChangedValues(): Partial<UpdateAccountFormSchema> {
    const changedValues: Partial<UpdateAccountFormSchema> = {}

    if (watchedValues.Nome !== data.Nome) {
      changedValues.Nome = watchedValues.Nome
    }
    if (watchedValues.Email !== data.Email) {
      changedValues.Email = watchedValues.Email
    }

    return changedValues
  }

  const hasChanges = Object.keys(getChangedValues()).length > 0

  async function handleTest() {
    const updatedData = getChangedValues()
    if (Object.keys(updatedData).length > 0) {
      console.log('Dados enviados:', updatedData)
    }

    await updateUserAccount(updatedData)
  }

  return (
    <form
      onSubmit={handleSubmit(handleTest)}
      className='flex flex-col gap-8 p-10 flex-1 border border-zinc-300 rounded-xl'
    >
      <div className='flex gap-3 flex-col'>
        <label htmlFor='email' className='text-sm font-semibold'>
          Email
        </label>
        <Input
          id='email'
          type='email'
          placeholder='Digite seu email'
          variant='minimalist'
          defaultValue={data.Email}
          {...register('Email')}
          icon={Mail}
        />
        <label htmlFor='nome' className='text-sm font-semibold'>
          Nome
        </label>
        <Input
          id='nome'
          type='text'
          placeholder='Digite seu nome'
          variant='minimalist'
          defaultValue={data.Nome}
          {...register('Nome')}
          icon={UserRound}
        />
        {formState.errors.Nome && (
          <p className='text-red-500 text-xs'>
            {formState.errors.Nome.message}
          </p>
        )}
      </div>
      <div className='flex gap-4'>
        <Button variant='cancel' disabled={!hasChanges}>Cancelar</Button>
        <Button variant='square-red' type='submit' disabled={!hasChanges}>
          Alterar
        </Button>
      </div>
    </form>
  )
}
