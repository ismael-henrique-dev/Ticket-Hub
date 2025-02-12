'use server'

import { api } from '@/services/api'
import { UserProfileResponse } from '@/types/user'
import { revalidatePath } from 'next/cache'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

type UpdateUser = {
  Email?: string
  Nome?: string
}

export async function updateUserAccount(
  updateData: UpdateUser
): Promise<UserProfileResponse> {
  try {
    const cookie = await cookies()
    const token = cookie.get('userId') as RequestCookie

    const { data } = await api.put('app/user/update', updateData, {
      headers: { Authorization: `Bearer ${token.value}` },
    })

    revalidatePath('/account')

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Profile erro to user')
  }
}
