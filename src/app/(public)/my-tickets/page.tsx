import { TicketsListMyTickets } from '@/components/my-tickets'
import { PaginationDemo, Search } from '@/components/ui'

export default function MyTickets() {
  return (
    <main className='flex flex-col gap-16 p-20'>
      <Search />
      <div className='flex flex-1 justify-between gap-16'>
        <div className='flex flex-1 flex-col gap-8'>
          <TicketsListMyTickets />
          <PaginationDemo />
        </div>
      </div>
    </main>
  )
}
