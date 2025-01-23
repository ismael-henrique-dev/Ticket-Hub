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

export function TicketFilterDatePicker() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            'w-80 h-10 bg-orange-500 text-zinc-50 rounded-xl border-none flex items-center p-3',
            !date && 'text-zinc-50'
          )}
        >
          <Calendar1Icon className='mr-2 h-4 w-4' />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
