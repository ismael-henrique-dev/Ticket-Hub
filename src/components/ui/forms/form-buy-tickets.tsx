'use client'

import React, { useState } from 'react'
import { createTicketFormSchema } from '@/hooks/use-person-form'
import { Person } from '@/types/person'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '../input'
import { Button } from '../button'

type TicketFormProps = {
  submitFunction: (data: Person) => void
}

export function TicketForm({ submitFunction }: TicketFormProps) {
  const [cpf, setCpf] = useState('')

  const {
    handleSubmit,
    register,
    formState,
    setValue,
  } = useForm<Person>({
    resolver: zodResolver(createTicketFormSchema),
  })

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, '') 
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d{2})$/, '$1-$2')
    setCpf(value)
    setValue('CPF', value, { shouldValidate: true }) 
  }

  return (
    <form
      onSubmit={handleSubmit(submitFunction)}
      className='flex-1 flex flex-col gap-4 border border-zinc-300 rounded-xl p-4'
    >
      <h2 className='font-semibold'>Acompanhante</h2>
      <Input
        variant='minimalist'
        placeholder='Nome'
        type='text'
        {...register('Name')}
      />
      {formState.errors.Name && (
        <p className='text-red-500 text-xs'>
          {formState.errors.Name.message}
        </p>
      )}
      <Input
        variant='minimalist'
        placeholder='Idade'
        type='number'
        {...register('Age', { valueAsNumber: true })}
      />
      {formState.errors.Age && (
        <p className='text-red-500 text-xs'>{formState.errors.Age.message}</p>
      )}
      <Input
        variant='minimalist'
        type='text'
        placeholder='CPF'
        value={cpf}
        onChange={handleCpfChange}
      />
      {formState.errors.CPF && (
        <p className='text-red-500 text-xs'>{formState.errors.CPF.message}</p>
      )}
      <Button type='submit' variant='simple-orange'>
        Confirmar
      </Button>
    </form>
  )
}
