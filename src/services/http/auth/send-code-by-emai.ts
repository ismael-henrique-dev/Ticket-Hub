import { api } from '@/services/api'

type SendCodeResponse = {
  description: string
  response: string
}

export async function sendCodeByEmail(
  email: string
): Promise<SendCodeResponse> {
  try {
    const { data } = await api.get(`app/auth/password/${email}`)
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Profile erro to user')
  }
}
