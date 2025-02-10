import { UserProfileResponse } from '@/types/user'
import { api } from '../api'

export async function fetchUserProfile(): Promise<UserProfileResponse> {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmOTA4Y2ExYi1jMDhmLTQ5Y2MtYWZmYS1jYjVkZGUyMDY1YTciLCJpYXQiOjE3MzkxOTUwMTV9.lFnGh5WErQSPCobxciywIOGdF5jd26pNUScaMyY0JT0'

    const { data } = await api.get('app/user/profile', {
      headers: { Authorization: `Bearer ${token}` },
    })

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Profile erro to user')
  }
}
