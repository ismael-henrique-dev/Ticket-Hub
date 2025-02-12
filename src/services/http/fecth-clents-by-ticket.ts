'use server'

import { cookies } from 'next/headers'
import { api } from '../api'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

export type Client = {
  IsCompanion: boolean
  PersonName: string
  Age: number
  CPF: string
  Id?: string
}

type ClientResponse = {
  Description: string
  Client: Client[]
}

export async function fetchClientsByTicketId(
  ticketId: string
): Promise<ClientResponse> {
  try {
    const cookie = await cookies()
    const token = cookie.get('userId') as RequestCookie
    const { data } = await api.get(`app/client/ticket/${ticketId}`, {
      headers: { Authorization: `Bearer ${token.value}` },
    })

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Profile erro to user')
  }
}
