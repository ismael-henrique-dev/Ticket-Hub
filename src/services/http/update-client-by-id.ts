import { api } from '../api'

type EditClientData = {
  CPF?: string
  Age?: number
  PersonName?: string
}

export async function editClient(
  clientId: string,
  updatedData: EditClientData
) {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmOTA4Y2ExYi1jMDhmLTQ5Y2MtYWZmYS1jYjVkZGUyMDY1YTciLCJpYXQiOjE3MzkxOTUwMTV9.lFnGh5WErQSPCobxciywIOGdF5jd26pNUScaMyY0JT0'

  try {
    const { data } = await api.put(
      `/app/client/update/${clientId}`,
      updatedData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
