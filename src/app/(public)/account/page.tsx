import { DeleteWarningCard } from '@/components/account'
import { FormAccount } from '@/components/ui/forms'
import { fetchUserProfile } from '@/services/http/fetch-user-profile'

export default async function Account() {
  const data = await fetchUserProfile()
  console.log(data.response)
  return (
    <main className='flex flex-col max-w-screen-2xl m-auto gap-10 p-6'>
      <section>
        <h2 className='text-2xl font-semibold mb-8'>Conta</h2>
        <FormAccount data={data} />
      </section>
      <DeleteWarningCard />
    </main>
  ) 
}
