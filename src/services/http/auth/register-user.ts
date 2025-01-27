import { RegisterFormSchema } from '@/validators/register-validators'
import { api } from '@/services/api'

type RegisterUserResponse = {
  Description: string
  UserToken: string
}

export async function registerUser(
  formData: RegisterFormSchema
): Promise<RegisterUserResponse> {
  try {
    const { data } = await api.post('/app/user/register', formData)

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Erro ao registrar usuario')
  }
}
