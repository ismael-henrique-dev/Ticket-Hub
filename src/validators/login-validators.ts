import { z } from 'zod'

export const loginFormSchema = z.object({
  Email: z.string().email('Digite o email corretamente.'),
  Password: z.string().min(1, 'Digite sua senha.'),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
