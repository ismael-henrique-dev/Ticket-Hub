import { z } from 'zod'

export const registerFormSchema = z.object({
  Email: z.string().email('Digite o email corretamente.'),
  Password: z.string().min(1, 'Digite sua senha.'),
  Nome: z.string().min(1, 'Digite no mínimo 3 caracteres.'),
  CPF: z.string().min(1)
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
