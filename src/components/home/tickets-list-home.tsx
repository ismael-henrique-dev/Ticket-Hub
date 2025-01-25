'use client'

import { Building2, Calendar, MapPinHouse, Timer } from 'lucide-react'
import { TicketCard } from '../ui'

export function TicketsListHome() {
  return (
    <section id='tickets-list-home' className='flex flex-1 flex-col gap-8'>
      {Array.from({ length: 4 }).map((_, index) => (
        <TicketCard.Root variant='primary' key={index}>
          <TicketCard.Content>
            <TicketCard.Info infoTitle='23/06/2009'>
              <TicketCard.Icon Icon={MapPinHouse} variant='primary' size={40} />
            </TicketCard.Info>
            <TicketCard.Info infoTitle='23/06/2009'>
              <TicketCard.Icon Icon={Calendar} variant='primary' size={40} />
            </TicketCard.Info>
            <TicketCard.Info infoTitle='23/06/2009'>
              <TicketCard.Icon Icon={Timer} variant='primary' size={40} />
            </TicketCard.Info>
            <TicketCard.Info infoTitle='23/06/2009'>
              <TicketCard.Icon Icon={Building2} variant='primary' size={40} />
            </TicketCard.Info>
            <TicketCard.Modal />
          </TicketCard.Content>
          <TicketCard.PriceSummary
            variant='primary'
            transportType='ship'
            price={200}
          />
        </TicketCard.Root>
      ))}
    </section>
  )
}
