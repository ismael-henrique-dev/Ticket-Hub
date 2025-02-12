'use client'

import { useEffect, useState } from 'react'
import { Person } from '@/types/person'
import { z } from 'zod'

export const createTicketFormSchema = z.object({
  Name: z.string().min(1, 'Informe o nome.'),
  Age: z.number().min(0, 'Informe uma idade válida.'),
  CPF: z
    .string()
    .regex(
      /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
      'CPF inválido. Use o formato 000.000.000-00.'
    ),
})

export type CreateTicketFormSchema = z.infer<typeof createTicketFormSchema>

export function usePersonForm() {
  const [personsList, setPersonsList] = useState<Person[]>([])

  function handleSubmitData(data: Person) {
    setPersonsList((prevPersonsList) => {
      const updatedList = [...prevPersonsList, data]
      localStorage.setItem('@personsList', JSON.stringify(updatedList))
      return updatedList
    })
  }

  function getListFromLocalStorage() {
    const listFromLocalStorage = localStorage.getItem('@personsList')
    if (listFromLocalStorage) {
      const list = JSON.parse(listFromLocalStorage)
      setPersonsList(list)
    }
  }

  useEffect(() => {
    getListFromLocalStorage()
  }, [])

  return {
    handleSubmitData,
    personsList,
  }
}
