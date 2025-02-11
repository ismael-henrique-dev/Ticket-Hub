'use client'

import * as React from 'react'
import { format } from 'date-fns'
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
  const [date, setDate] = React.useState<DateRange | undefined>(undefined)

  const { setFilter, deleteFilter } = useFilters()

  React.useEffect(() => {
    if (date?.from) {
      setFilter('afterDay', format(date.from, 'yyyy-MM-dd'))
      if (date.to) {
        setFilter('beforeDay', format(date.to, 'yyyy-MM-dd'))
      }
    } else {
      deleteFilter('afterDay')
      deleteFilter('beforeDay')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date?.from])

  React.useEffect(() => {
    if (date?.to) {
      setFilter('beforeDay', format(date.to, 'yyyy-MM-dd'))
      if (date.to) {
        setFilter('beforeDay', format(date.to, 'yyyy-MM-dd'))
      }
    } else {
      deleteFilter('beforeDay')
      deleteFilter('afterDay')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date?.to])

  return (
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
              <span>Selecione uma data</span>
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
