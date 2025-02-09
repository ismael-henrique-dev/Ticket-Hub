'use client'

import { useState } from 'react'
import { ArrowDownUp } from 'lucide-react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../../shadcn-ui/select'
import { useFilters } from '@/hooks/use-filters'

type TicketFilterSelectProps = {
  data: {
    value: string
    label: string
  }[]
  filterName: string
}

export function TicketFilterSelect({ data, filterName }: TicketFilterSelectProps) {
  const [value, setValue] = useState('')
  const { setFilter } = useFilters()

  const handleChange = (selectedValue: string) => {
    setValue(selectedValue)
    setFilter(filterName, selectedValue)
    console.log('Valor do select: ' + selectedValue)
    console.log('Valor do useState: ' + value)
  }

  return (
    <Select onValueChange={handleChange} value={value}>
      <SelectTrigger className='w-80 h-10 bg-orange-500 text-zinc-50 rounded-xl border-none'>
        <div className='flex items-center gap-1'>
          <ArrowDownUp />
          <SelectValue placeholder='Theme' />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={'a'}>Nenhum</SelectItem>
        {data.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
