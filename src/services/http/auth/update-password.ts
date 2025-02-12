// import { api } from '@/services/api'

type UpdatePasswordResponse = {
  message: string
}

type UpdatePasswordData = {
  refCode: string
  newPassword: string
}

export async function updateUserPassword(
  updatePasswordData: UpdatePasswordData
): Promise<UpdatePasswordResponse> {
  try {
    const response = await fetch('https://tickethub-prodapi.onrender.com/app/auth/password', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(updatePasswordData),
       // Garante que os cookies sejam enviados
    })

    if (!response.ok) {
      throw new Error('Erro ao atualizar a senha do usuário')
    }

    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Erro ao atualizar a senha do usuário')
  }
}

