import { FormRegister } from '@/components/ui'

export default function Register() {
  return (
    <div className='flex flex-col text-left justify-center min-h-screen'>
      <div className='flex flex-col text-left justify-center m-auto gap-8 bg-zinc-50 border border-zinc-200 p-8 w-auto md:w-1/3 rounded-3xl '>
        <h1 className='text-xl font-semibold'>Register</h1>
        <FormRegister />
        <span className='text-center'>
          Já tenho uma conta -{' '}
          <a href='/auth/login' className='text-balance underline'>
            Entrar
          </a>
        </span>
      </div>
    </div>
  )
}
