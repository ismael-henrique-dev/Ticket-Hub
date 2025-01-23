'use client'

import { Building2, Calendar, MapPinHouse, Timer } from 'lucide-react'
import { TicketCard } from '../ui'

export function TicketsListMyTickets() {
  return (
    <section className='grid grid-cols-2 gap-8'>
      {Array.from({ length: 4 }).map((_, index) => (
        <TicketCard.Root variant='secondary' key={index}>
          <TicketCard.Content>
            <TicketCard.Info infoTitle='23/06/2009'>
                <TicketCard.Icon Icon={MapPinHouse} variant='secondary' size={40} />
              </TicketCard.Info>
            <TicketCard.Info infoTitle='23/06/2009'>
              <TicketCard.Icon
                Icon={Calendar}
                variant='secondary'
                size={40}
              />
            </TicketCard.Info>
            <TicketCard.Info infoTitle='23/06/2009'>
              <TicketCard.Icon Icon={Timer} variant='secondary' size={40} />
            </TicketCard.Info>
            <TicketCard.Info infoTitle='23/06/2009'>
              <TicketCard.Icon
                Icon={Building2}
                variant='secondary'
                size={40}
              />
            </TicketCard.Info>
            <TicketCard.Actions />
          </TicketCard.Content>
          <TicketCard.PriceSummary
            variant='secondary'
            transportType='ship'
            price={200}
          />
        </TicketCard.Root>
      ))}
    </section>
  )
}
