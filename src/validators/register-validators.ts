import { z } from 'zod'

export const registerFormSchema = z.object({
  Email: z.string().email('Digite o email corretamente.'),
  Password: z.string().min(1, 'A senha deve conter pelo menos 3 caracteres.'),
  Nome: z.string().min(1, 'Digite no mínimo 3 caracteres.'),
  CPF: z
    .string()
    .regex(
      /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
      'CPF inválido. Use o formato 000.000.000-00.'
    ),
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
