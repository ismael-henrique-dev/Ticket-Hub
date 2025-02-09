'use client'

import { Building2, Calendar, MapPinHouse, Timer } from 'lucide-react'
import { Pagination, TicketCard } from '../ui'
import { useEffect, useState } from 'react'
import { Ticket } from '@/types/ticket'
import { fetchTickes } from '@/services/http/fecth-tickets'
import { formattedRelativeDate, formattedRelativeHour } from '@/lib/formatter'
import { useSearchParams } from 'next/navigation'

export function TicketsListHome() {
  const [ticketList, setTicketList] = useState<Ticket[]>([])
  const searchParams = useSearchParams()
  const page = searchParams.get('page') || '1'

  useEffect(() => {
    async function getFetchTickes() {
      const data = await fetchTickes(Number(page))

      setTicketList(data.response)
    }

    getFetchTickes()
  }, [page])

  return (
    <div className='flex flex-col gap-8'>
      <section id='tickets-list-home' className='flex flex-1 flex-col gap-8'>
        {ticketList.map((ticket, index) => (
          <TicketCard.Root variant='primary' key={index}>
            <TicketCard.Content>
              <TicketCard.Info
                infoTitle={`${ticket.BeginningPoint.Name} - ${ticket.FinishingPoint.Name}`}
              >
                <TicketCard.Icon
                  Icon={MapPinHouse}
                  variant='primary'
          
                />
              </TicketCard.Info>
              <TicketCard.Info
                infoTitle={formattedRelativeDate(ticket.TravelDay)}
              >
                <TicketCard.Icon Icon={Calendar} variant='primary' size={40} />
              </TicketCard.Info>
              <TicketCard.Info
                infoTitle={formattedRelativeHour(ticket.TravelDay)}
              >
                <TicketCard.Icon Icon={Timer} variant='primary' size={40} />
              </TicketCard.Info>
              <TicketCard.Info infoTitle={'Company'}>
                <TicketCard.Icon Icon={Building2} variant='primary' size={40} />
              </TicketCard.Info>
              <TicketCard.Modal ticketId={ticket.Id} />
            </TicketCard.Content>
            <TicketCard.PriceSummary
              variant='primary'
              transportType='ship'
              price={ticket.TravelBasePrice}
            />
          </TicketCard.Root>
        ))}
      </section>
      <Pagination currentPage={Number(page)} />
    </div>
  )
}
