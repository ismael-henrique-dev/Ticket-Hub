'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { updateUserPassword } from '@/services/http/auth/update-password'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const forgotPasswordFormSchema = z.object({
  newPassword: z.string().min(1),
})

type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordFormSchema>

export default function NewPassword() {
  const { back, push } = useRouter()
  const { register, handleSubmit } = useForm<ForgotPasswordFormSchema>({
    resolver: zodResolver(forgotPasswordFormSchema),
  })

  async function handleResetPassword(data: ForgotPasswordFormSchema) {
    try {
      const code = localStorage.getItem('@code')
      console.log(data.newPassword)
      console.log(code)

      if (code) {
        await updateUserPassword({
          newPassword: data.newPassword,
          refCode: code,
        })

        push('/auth/login')
      }

      // if (response.Description === "Successfully updated password") {
      //   await loginUser({
      //     Email: data.email,
      //     Password: data.password,
      //   })

      //   showSuccessToast("Senha recuperada com sucesso!")
      //   push("/")
      // }
    } catch (error) {
      // showErrorToast("Ops! Algo deu errado, tente novamente.")
      console.log(error)
    }
  }

  return (
    <div className='flex flex-col text-left justify-center min-h-screen'>
      <div className='flex flex-col text-left justify-center m-auto gap-8 bg-zinc-50 border border-zinc-200 p-8 w-auto md:w-1/3 rounded-3xl '>
        <section className='flex items-center gap-4'>
          <button
            onClick={() => back()}
            className='flex items-center justify-center size-8 bg-orange-500 text-zinc-50 rounded-full'
          >
            <ArrowLeft />
          </button>
          <strong>Recuperação de senha</strong>
        </section>
        <form
          action=''
          className='flex flex-col gap-8'
          onSubmit={handleSubmit(handleResetPassword)}
        >
          <div className='flex flex-col gap-3'>
            <label htmlFor='email'>
              Informe o email para recuperar sua senha.
            </label>
            <Input
              type='password'
              id='password'
              placeholder='Crie uma nova senha'
              variant='minimalist'
              {...register('newPassword')}
            />
          </div>
          <Button>Confirmar</Button>
        </form>
      </div>
    </div>
  )
}
