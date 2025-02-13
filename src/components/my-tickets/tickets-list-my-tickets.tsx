'use client'

import { Building2, Calendar, MapPinHouse, Timer } from 'lucide-react'
import { TicketCard } from '../ui'
import { useEffect, useState } from 'react'
import { fetchMyTickes, TicketItem } from '@/services/http/fetch-my-tickets'
import { formattedRelativeDate, formattedRelativeHour } from '@/lib/formatter'
import { useSearchParams } from 'next/navigation'
import { LoadingSpinner } from '../ui/loading'

export function TicketsListMyTickets() {
  const [myTicketsList, setMyTicketsList] = useState<TicketItem[]>([])
    // const [totalPages, setTotalPages] = useState(1)
    const searchParams = useSearchParams()
    const page = searchParams.get('page') || ('1' as string)
    const transportType = searchParams.get('transportType') as string
    const afterDay = searchParams.get('afterDay') as string
    const beforeDay = searchParams.get('beforeDay') as string
    const priceOrder = searchParams.get('priceOrder') as string
    const query = searchParams.get('query') as string

   useEffect(() => {
      async function getTickes() {
        const data = await fetchMyTickes(page, transportType, afterDay, beforeDay, query)
        let tickets = data.Ticket
        console.log(tickets)
  
        if (priceOrder === 'min') {
          tickets = tickets.sort((a, b) => a.ticket.TotalTicketPrice - b.ticket.TotalTicketPrice )
        }
  
        if (priceOrder === 'max') {
          tickets = tickets.sort((a, b) => b.ticket.TotalTicketPrice  - a.ticket.TotalTicketPrice )
        }
  
        setMyTicketsList(tickets)
        // setTotalPages(data.response.totalPages)
      }
  
      getTickes()
    }, [page, transportType, afterDay, beforeDay, priceOrder, query])

  return (
    <section
      id='tickets-list-my-tickets'
      className='flex flex-1 flex-col gap-8'
    >
      {myTicketsList.length === 0 && (
        <LoadingSpinner />
      )}
      {myTicketsList.map((ticket, index) => (
        <TicketCard.Root variant='secondary' key={index}>
          <TicketCard.Content>
            <TicketCard.Info
              infoTitle={`${ticket.BegginingPoint.Name} - ${ticket.FinishPoint.Name}`}
            >
              <TicketCard.Icon Icon={MapPinHouse} variant='secondary' />
            </TicketCard.Info>
            <TicketCard.Info
              infoTitle={formattedRelativeDate(ticket.travelRef.Travel_Day)}
            >
              <TicketCard.Icon Icon={Calendar} variant='secondary' size={40} />
            </TicketCard.Info>
            <TicketCard.Info
              infoTitle={formattedRelativeHour(ticket.travelRef.Travel_Day)}
            >
              <TicketCard.Icon Icon={Timer} variant='secondary' size={40} />
            </TicketCard.Info>
            <TicketCard.Info infoTitle={ticket.byCompany}>
              <TicketCard.Icon Icon={Building2} variant='secondary' size={40} />
            </TicketCard.Info>
            <TicketCard.Actions basePrice={ticket.ticket.TotalTicketPrice} ticketId={ticket.ticket.Id} />
          </TicketCard.Content>
          <TicketCard.PriceSummary
            variant='secondary'
            transportType={ticket.travelRef.Transport}
            price={ticket.ticket.TotalTicketPrice}
          />
        </TicketCard.Root>
      ))}
    </section>
  )
}
