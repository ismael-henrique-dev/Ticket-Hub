
import { ArrowDownUp } from 'lucide-react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../../shadcn-ui/select'

export function TicketFilterSelect() {
  return (
    <Select>
      <SelectTrigger className='w-80 h-10 bg-orange-500 text-zinc-50 rounded-xl border-none'>
        <div className='flex items-center gap-1'>
          <ArrowDownUp />
          <SelectValue placeholder='Theme' />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='light'>Light</SelectItem>
        <SelectItem value='dark'>Dark</SelectItem>
        <SelectItem value='system'>System</SelectItem>
      </SelectContent>
    </Select>
  )
}
