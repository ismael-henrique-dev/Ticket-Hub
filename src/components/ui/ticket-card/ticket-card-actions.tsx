import { CircleChevronDown, Pencil, Ticket, X } from 'lucide-react'
import { Button } from '../button'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shadcn-ui/dialog'

export function TicketCardActions() {
  return (
    <div className='bg-zinc-50 p-3 flex items-center justify-center w-24 gap-4 rounded-xl'>
      <Button variant='minimalist'>
        <Pencil size={20} className='text-orange-500' />
      </Button>
      <Button variant='minimalist'>
        <CircleChevronDown size={20} className='text-orange-500' />
      </Button>
    </div>
  )
}

export function TicketCardAction() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='default'>
          Reservar
          <Ticket size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-xl px-14 py-10'>
        <DialogHeader className='items-center justify-between'>
          <DialogTitle>Preencha este formulário</DialogTitle>
          <DialogClose>
            <X size={24} />
          </DialogClose>
        </DialogHeader>
        <div className='flex flex-col items-center gap-8 p-8 border border-zinc-300 rounded-xl'>
          <h2>Resumo</h2>
          <strong>R$ 440,00</strong>
          <div className='flex-1 flex flex-col gap-4 w-full'>
            <h2 className='text-center'>3 Pessoa(s)</h2>
            <div className='flex items-center justify-between w-full px-4'>
              <span className='text-sm text-zinc-500'>Arthur Morgan (eu)</span>
              <span className='text-sm text-zinc-500'>R$ 440,00</span>
            </div>
            <div className='flex items-center justify-between w-full px-4'>
              <span className='text-sm text-zinc-500'>Arthur Morgan (eu)</span>
              <span className='text-sm text-zinc-500'>R$ 440,00</span>
            </div>
            <div className='flex items-center justify-between w-full px-4'>
              <span className='text-sm text-zinc-500'>Arthur Morgan (eu)</span>
              <span className='text-sm text-zinc-500'>R$ 440,00</span>
            </div>
          </div>
          <div className='flex-1 flex flex-col items-center w-full'>
            <Button variant='simple'>Adicionar acompanhantes</Button>
            <Button>Adicionar acompanhantes</Button>
          </div>
        </div>
        {/* <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="square-red">
              Close
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>

    // <Button variant='default'>
    //   Reservar
    //   <Ticket size={20} />
    // </Button>
  )
}
