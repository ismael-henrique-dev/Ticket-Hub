export const dynamic = 'force-dynamic'

import { Card } from '@/components/account'
// import { Button } from '@/components/ui'
import { FormAccount } from '@/components/ui/forms'
import { LoadingSpinner } from '@/components/ui/loading'
import { userLogout } from '@/lib/actions'
import { fetchUserProfile } from '@/services/http/fetch-user-profile'
import { Info, Lock, LogOut } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function Account() {
  const data = await fetchUserProfile()
  console.log(data.response)
  return (
    <main className='flex flex-col max-w-screen-2xl m-auto gap-10 p-6'>
      <Suspense fallback={<LoadingSpinner />}>
        <section className='flex flex-col gap-8'>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-semibold'>Conta</h2>
            <Link href='/' onClick={userLogout} className='flex gap-3'>
              <LogOut />
              Sair
            </Link>
          </div>
          <FormAccount data={data.response} />
          <h2 className='text-2xl font-semibold'>Alterar senha</h2>
          <Card
            Icon={Lock}
            description='Ao alterar sua senha, certifique-se de escolher uma combinação segura. Sua nova senha substituirá a atual e será necessária para futuros acessos. Para sua segurança, evite reutilizar senhas antigas e não compartilhe suas credenciais com terceiros.'
            buttonText='Alterar senha'
            actionType='redirect'
          />
          <h2 className='text-2xl font-semibold'>Exluir conta</h2>
          <Card
            Icon={Info}
            description=' Ao excluir sua conta, todas as suas transações, metas, contas e outros
          dados serão permanentemente perdidos. Portanto, você não poderá
          recuperar seus dados nem fazer login novamente.'
            buttonText='Excluir conta '
            actionType='click'
          />
        </section>
      </Suspense>
    </main>
  )
}
