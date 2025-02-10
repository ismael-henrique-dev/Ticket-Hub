import { DeleteWarningCard } from '@/components/account'
import { FormAccount } from '@/components/ui/forms'
import { LoadingSpinner } from '@/components/ui/loading'
import { fetchUserProfile } from '@/services/http/fetch-user-profile'
import { Suspense } from 'react'

export default async function Account() {
  const data = await fetchUserProfile()
  console.log(data.response)
  return (
    <main className='flex flex-col max-w-screen-2xl m-auto gap-10 p-6'>
      <Suspense fallback={<LoadingSpinner />}>
        <section>
          <h2 className='text-2xl font-semibold mb-8'>Conta</h2>
          <FormAccount data={data.response} />
        </section>
        <DeleteWarningCard />
      </Suspense>
    </main>
  )
}
