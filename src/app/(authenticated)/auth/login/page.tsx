import { FormLogin } from '@/components/ui'

export default function Login() {
  return (
    <div className='flex flex-col text-left justify-center min-h-screen'>
      <div className='flex flex-col text-left justify-center m-auto gap-8 bg-zinc-50 border border-zinc-200 p-8 w-auto md:w-1/3 rounded-3xl '>
        <h1 className='text-xl font-semibold'>Login</h1>
        <FormLogin />
        <span className='text-center'>
          Ainda não tenho uma conta -{' '}
          <a href='/auth/register' className='text-balance underline'>
            Cadastre-se
          </a>
        </span>
      </div>
    </div>
  )
}
