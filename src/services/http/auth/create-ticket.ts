'use server'

import { api } from '@/services/api'
import { Person } from '@/types/person'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

type RegisterUserResponse = {
  Description: string
  UserToken: string
}

export type Ticket = {
  TravelId: string
  CompanionsList: Person[]
}

export async function createTicket(
  formData: Ticket
): Promise<RegisterUserResponse> {
  try {
    const cookie = await cookies()
    const token = cookie.get('userId') as RequestCookie

    const { data } = await api.post('/app/ticket/create', formData, {
      headers: { Authorization: `Bearer ${token.value}` },
    })

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Erro ao criar ticket ')
  }
}
