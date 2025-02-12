
import { api } from '../api'

export type Client = {
  IsCompanion: boolean
  PersonName: string
  Age: number
  CPF: string
  Id?: string
}

type ClientResponse = {
  Description: string
  Client: Client
}

export async function deleteCLientById(
  clientId: string
): Promise<ClientResponse> {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmOTA4Y2ExYi1jMDhmLTQ5Y2MtYWZmYS1jYjVkZGUyMDY1YTciLCJpYXQiOjE3MzkxOTUwMTV9.lFnGh5WErQSPCobxciywIOGdF5jd26pNUScaMyY0JT0'

    const { data } = await api.delete(`app/client/delete/${clientId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Profile erro to user')
  }
}
