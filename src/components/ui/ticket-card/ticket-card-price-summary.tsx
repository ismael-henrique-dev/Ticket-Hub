// import { Boat, Bus, Train, AirplaneTilt } from '@phosphor-icons/react'

import clsx from 'clsx'
import { BusFront, Plane, Ship, Train } from 'lucide-react'
import { TicketCard } from '.'
import { priceFormatter } from '@/lib/formatter'


interface TicketCardPriceSummaryProps {
  transportType: 'Air' | 'Rail' | 'Land' | 'Naval'
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
      {transportType === 'Naval' && (
        <TicketCard.Icon variant={variant} Icon={Ship} />
      )}
      {transportType === 'Land' && (
        <TicketCard.Icon variant={variant} Icon={BusFront} />
      )}
      {transportType === 'Air' && (
        <TicketCard.Icon variant={variant} Icon={Plane} />
      )}
      {transportType === 'Rail' && (
        <TicketCard.Icon variant={variant} Icon={Train} />
      )}
      <strong
        className={clsx('text-3xl font-semibold', {
          'text-orange-500': variant === 'primary',
        })}
      >
        {priceFormatter.format(price)}
      </strong>
    </div>
  )
}
