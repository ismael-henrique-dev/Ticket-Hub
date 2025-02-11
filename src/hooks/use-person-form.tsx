'use client'

import { useEffect, useState } from 'react'
import { Person } from '@/types/person'
import { z } from 'zod'

export const createTicketFormSchema = z.object({
  Name: z.string().min(1),
  Age: z.number(),
  CPF: z.string(),
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
