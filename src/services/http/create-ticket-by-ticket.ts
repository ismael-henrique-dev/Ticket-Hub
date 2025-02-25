'use server'

import { api } from '@/services/api'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

type CreateTicketResponse = {
  Description: string
  Client: string
}

export type TicketFormData = {
  TicketId: string
  Age: number
  CPF: string
  IsCompanion: boolean
  PersonName: string
}

export async function createTicketByMyTicket(
  formData: TicketFormData
): Promise<CreateTicketResponse> {
  try {
    const cookie = await cookies()
    const token = cookie.get('userId') as RequestCookie

    const { data } = await api.post('app/client/create', formData, {
      headers: { Authorization: `Bearer ${token.value}` },
    })

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Erro ao criar ticket ')
  }
}
