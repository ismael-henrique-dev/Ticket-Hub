import { api } from '@/services/api'
import { Person } from '@/types/person'

type RegisterUserResponse = {
  Description: string
  UserToken: string
}

export type Ticket = {
  TravelId: string
  CompanionsList: Person[]
}

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmOTA4Y2ExYi1jMDhmLTQ5Y2MtYWZmYS1jYjVkZGUyMDY1YTciLCJpYXQiOjE3MzkxOTUwMTV9.lFnGh5WErQSPCobxciywIOGdF5jd26pNUScaMyY0JT0'

export async function createTicket(
  formData: Ticket
): Promise<RegisterUserResponse> {
  try {
    const { data } = await api.post('/app/ticket/create', formData, {
      headers: { Authorization: `Bearer ${token}` },
    })

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Erro ao criar ticket ')
  }
}
