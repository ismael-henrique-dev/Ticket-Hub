import { TicketsListHome, TicketListFilters } from '@/components/home'
import { Search } from '@/components/ui'

export default function Home() {
  return (
    <main className='flex flex-col gap-16 md:p-20 p-4'>
      <Search />
      <div className='flex flex-1 justify-between gap-16 md:flex-row flex-col-reverse'>
        <div className='flex flex-1 flex-col gap-8'>
          <TicketsListHome />
        </div>
        <TicketListFilters />
      </div>
    </main>
  )
}
