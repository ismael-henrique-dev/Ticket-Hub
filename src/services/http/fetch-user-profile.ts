'use server'

import { UserProfileResponse } from '@/types/user'
import { api } from '../api'
import { cookies } from 'next/headers'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

export async function fetchUserProfile(): Promise<UserProfileResponse> {
  try {
    const cookie = await cookies()
    const token = cookie.get('userId') as RequestCookie
    console.log(token?.value)

    // const token =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmOTA4Y2ExYi1jMDhmLTQ5Y2MtYWZmYS1jYjVkZGUyMDY1YTciLCJpYXQiOjE3MzkxOTUwMTV9.lFnGh5WErQSPCobxciywIOGdF5jd26pNUScaMyY0JT0'

    const { data } = await api.get('app/user/profile', {
      headers: { Authorization: `Bearer ${token.value}` },
    })

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Profile erro to user')
  }
}
