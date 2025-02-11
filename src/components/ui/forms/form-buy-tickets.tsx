'use client'

import { createTicketFormSchema } from '@/hooks/use-person-form'
import { Person } from '@/types/person'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '../input'
import { Button } from '../button'
import { useEffect } from 'react'

type TicketFormProps = {
  submitFunction: (data: Person) => void
  clientData?: Person
}

export function TicketForm({ submitFunction, clientData }: TicketFormProps) {
  const { handleSubmit, register, setValue } = useForm<Person>({
    resolver: zodResolver(createTicketFormSchema),
  })

  useEffect(() => {
    if (clientData) {
      setValue('Name', clientData.Name)
      setValue('Age', clientData.Age)
      setValue('CPF', clientData.CPF)
    }
  }, [clientData, setValue])

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
      <Input
        variant='minimalist'
        placeholder='Idade'
        type='number'
        {...register('Age', { valueAsNumber: true })}
      />
      <Input
        variant='minimalist'
        type='text'
        placeholder='CPF'
        {...register('CPF')}
      />
      <Button type='submit' variant='simple-orange'>
        Confirmar
      </Button>
    </form>
  )
}
