
import { api } from '@/services/api'
import { LoginFormSchema } from '@/validators/login-validators'

type RegisterUserResponse = {
  Description: string
  UserToken: string
}

export async function loginUser(
  formData: LoginFormSchema
): Promise<RegisterUserResponse> {
  try {
    const { data } = await api.patch('app/user/auth/login', formData)
    localStorage.setItem('@token', data.UserToken)
    console.log(data.UserToken)

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Login erro to user')
  }
}
