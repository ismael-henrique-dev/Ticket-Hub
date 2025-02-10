'use client'

import * as React from 'react'
import { addDays, format } from 'date-fns'
import { cn } from '../../../lib/utils'
import { Calendar } from '../../shadcn-ui/calendar'

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '../../shadcn-ui/popover'
import { Calendar1Icon } from 'lucide-react'
import { DateRange } from 'react-day-picker'
import { useFilters } from '@/hooks/use-filters'

export function TicketFilterDatePicker() {
  // const [date, setDate] = React.useState<Date>()

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2025, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  const { setFilter } = useFilters()

  React.useEffect(() => {
    if (date?.from) {
      const formattedFromDate = format(date.from, 'yyyy-MM-dd')
      console.log(formattedFromDate)

      setFilter("ticketStartDay",formattedFromDate)
    }

    if (date?.to) {
      const formattedFromDate = format(date.to, 'yyyy-MM-dd')
      console.log(formattedFromDate)

      setFilter("ticketFinishDay",formattedFromDate)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]) // Added setFilter to the dependency array

  return (
    // <Popover>
    //   <PopoverTrigger asChild>
    //     <button
    //       className={cn(
    //         'w-80 h-10 bg-orange-500 text-zinc-50 rounded-xl border-none flex items-center p-3',
    //         !date && 'text-zinc-50'
    //       )}
    //     >
    //       <Calendar1Icon className='mr-2 h-4 w-4' />
    //       {date ? format(date, 'PPP') : <span>Pick a date</span>}
    //     </button>
    //   </PopoverTrigger>
    //   <PopoverContent className='w-auto p-0'>
    //     <Calendar
    //       mode='single'
    //       selected={date}
    //       onSelect={setDate}
    //       initialFocus
    //     />
    //   </PopoverContent>
    // </Popover>

    <div className={cn('grid gap-2')}>
      <Popover>
        <PopoverTrigger asChild>
          <button
            id='date'
            className={cn(
              'w-80 h-10 bg-orange-500 text-zinc-50 rounded-xl border-none flex items-center p-3 gap-3',
              !date && 'text-zinc-50'
            )}
          >
            <Calendar1Icon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='end'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
