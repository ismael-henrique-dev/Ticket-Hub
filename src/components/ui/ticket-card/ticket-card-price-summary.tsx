// import { Boat, Bus, Train, AirplaneTilt } from '@phosphor-icons/react'

import clsx from 'clsx'
import { BusFront, Plane, Ship, Train } from 'lucide-react'
import { TicketCard } from '.'


interface TicketCardPriceSummaryProps {
  transportType: 'train' | 'bus' | 'airplane' | 'ship'
  variant: 'primary' | 'secondary'
  price: number
}

export function TicketCardPriceSummary({
  transportType,
  variant,
  price,
}: TicketCardPriceSummaryProps) {
  return (
    <div className='flex flex-col justify-between items-end'>
      {transportType === 'ship' && (
        <TicketCard.Icon variant={variant} Icon={Ship} />
      )}
      {transportType === 'bus' && (
        <TicketCard.Icon variant={variant} Icon={BusFront} />
      )}
      {transportType === 'airplane' && (
        <TicketCard.Icon variant={variant} Icon={Plane} />
      )}
      {transportType === 'train' && (
        <TicketCard.Icon variant={variant} Icon={Train} />
      )}
      <strong
        className={clsx('text-3xl font-semibold', {
          'text-orange-500': variant === 'primary',
        })}
      >
        {price}
      </strong>
    </div>
  )
}
