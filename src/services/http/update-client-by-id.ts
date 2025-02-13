'use server'

import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { api } from '../api'
import { cookies } from 'next/headers'

type EditClientData = {
  CPF?: string
  Age?: number
  PersonName?: string
}

export async function editClient(
  clientId: string,
  updatedData: EditClientData
) {
  try {
    const cookie = await cookies()
    const token = cookie.get('userId') as RequestCookie

    const { data } = await api.put(
      `/app/client/update/${clientId}`,
      updatedData,
      {
        headers: { Authorization: `Bearer ${token.value}` },
      }
    )

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
