'use client'

import { Building2, Calendar, MapPinHouse, Timer } from 'lucide-react'
import { TicketCard } from '../ui'
import { useEffect, useState } from 'react'
import { Ticket } from '@/types/ticket'
import { fetchTickes } from '@/services/http/fecth-tickets'
import { formattedRelativeDate, formattedRelativeHour } from '@/lib/formatter'

export function TicketsListHome() {
  const [ticketList, setTicketList] = useState<Ticket[]>([])

  async function getFetchTickes() {
    const data = await fetchTickes(2)

    setTicketList(data.response)
  }

  useEffect(() => {
    getFetchTickes()
  }, [])

  return (
    <section id='tickets-list-home' className='flex flex-1 flex-col gap-8'>
      {ticketList.map((ticket, index) => (
        <TicketCard.Root variant='primary' key={index}>
          <TicketCard.Content>
            <TicketCard.Info
              infoTitle={`${ticket.BeginningPoint.Name} - ${ticket.FinishingPoint.Name}`}
            >
              <TicketCard.Icon Icon={MapPinHouse} variant='primary' size={40} />
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
  )
}
