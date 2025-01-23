
import { ArrowLeft } from 'lucide-react'
import { Button } from '../button'
import { Input } from '../input'

interface FormForgotPassword {
  formDescription: string
  submitButtonTitle: string
  submitFunction: () => void // trocar para: () => Promise<data>
}

export function FormForgotPassword({
  formDescription,
  submitButtonTitle,
}: FormForgotPassword) {
 

  return (
    <div className='flex flex-col text-left justify-center min-h-screen'>
      <div className='flex flex-col text-left justify-center m-auto gap-8 bg-zinc-50 border border-zinc-200 p-8 w-auto md:w-1/3 rounded-3xl '>
        <section className='flex items-center gap-4'>
          <button
           
            className='flex items-center justify-center size-8 bg-green-700 text-zinc-50 rounded-full'
          >
            <ArrowLeft />
          </button>
          <strong>Recuperação de senha</strong>
        </section>
        <form action='' className='flex flex-col gap-8'>
          <div className='flex flex-col gap-3'>
            <label htmlFor='email'>{formDescription}</label>
            <Input
              type='email'
              id='email'
              placeholder='Informe seu email'
              variant='minimalist'
            />
            <Input
              type='password'
              id='password'
              placeholder='Crie uma nova senha'
              variant='minimalist'
            />
          </div>
          <Button type='submit' variant='submit'>
            {submitButtonTitle}
          </Button>
        </form>
      </div>
    </div>
  )
}
