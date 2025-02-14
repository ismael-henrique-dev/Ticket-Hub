import {
  TicketListFilters,
  TicketsListMyTickets,
} from '@/components/my-tickets'
import { Search } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meus bilhetes',
  description: 'Página de tickets',
}

export default function MyTickets() {
  return (
    // <main className='flex flex-col gap-16 p-20'>
    //   <Search />
    //   <div className='flex flex-1 justify-between gap-16'>
    //     <div className='flex flex-1 flex-col gap-8'>
    //       <TicketsListMyTickets />
    //       <Pagination />
    //     </div>
    //   </div>
    // </main>
    <main className='flex flex-col gap-16 md:p-20 p-4'>
      <Search />
      <div className='flex flex-1 justify-between gap-16 md:flex-row flex-col-reverse'>
        <div className='flex flex-1 flex-col gap-8'>
          <TicketsListMyTickets />
        </div>
        <TicketListFilters />
      </div>
    </main>
  )
}
