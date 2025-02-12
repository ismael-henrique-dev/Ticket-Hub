"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { sendCodeByEmail } from "@/services/http/auth/send-code-by-emai"

import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
// import { showErrorToast, showInfoToast } from "@/components/ui/toasts"

const forgotPasswordFormSchema = z.object({
  email: z.string().email(),
})

type ForgotPasswordFormData = z.infer<typeof forgotPasswordFormSchema>

export default function ForgotPassword() {
  const { back, push } = useRouter()
  const { register, handleSubmit } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordFormSchema),
  })

  async function handleSendEmail(data: ForgotPasswordFormData) {
    try {
      const response = await sendCodeByEmail(data.email)
      localStorage.setItem('@code', response.response)
      console.log(response)
      push("forgot-password/send-code")
      // const code = response.CodeSent
      // Cookies.set("verificationCode", code, { expires: 1 })
      // showInfoToast("Código enviado! Verifique na sua caixa de emails.")
      // push("forgot-password/send-code")
    } catch {
      // showErrorToast("Ops! Algo deu errado ao enviar o código.")
    }
  }

  return (
    <div className="flex flex-col text-left justify-center min-h-screen">
      <div className="flex flex-col text-left justify-center m-auto gap-8 bg-zinc-50 border border-zinc-200 p-8 w-auto md:w-1/3 rounded-3xl ">
        <section className="flex items-center gap-4">
          <button
            onClick={() => back()}
            className="flex items-center justify-center size-8 bg-orange-500 text-zinc-50 rounded-full"
          >
            <ArrowLeft />
          </button>
          <strong>Recuperação de senha</strong>
        </section>
        <form
          action=""
          onSubmit={handleSubmit(handleSendEmail)}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="email">
              Informe o email para recuperar sua senha.
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Informe seu email"
              variant="minimalist"
              {...register("email")}
            />
          </div>
          <Button>Confirmar</Button>
        </form>
      </div>
    </div>
  )
}
