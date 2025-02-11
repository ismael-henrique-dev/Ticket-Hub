import { api } from '@/services/api'
import { UserProfileResponse } from '@/types/user'
import { revalidatePath } from 'next/cache'

type UpdateUser = {
  Email?: string
  Nome?: string
}

export async function updateUserAccount(
  updateData: UpdateUser
): Promise<UserProfileResponse> {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmOTA4Y2ExYi1jMDhmLTQ5Y2MtYWZmYS1jYjVkZGUyMDY1YTciLCJpYXQiOjE3MzkxOTUwMTV9.lFnGh5WErQSPCobxciywIOGdF5jd26pNUScaMyY0JT0'

    const { data } = await api.put('app/user/update', updateData, {
      headers: { Authorization: `Bearer ${token}` },
    })

    revalidatePath('/account')

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Profile erro to user')
  }
}
