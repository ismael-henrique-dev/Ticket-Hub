'use client'

import { useEffect, useState } from 'react'
import { usePersonForm } from '@/hooks/use-person-form'
import { useTicketParam } from '@/hooks/use-ticket-param'
import { TicketForm } from '../forms/form-buy-tickets'
import { Ban, Pencil, Ticket, X } from 'lucide-react'
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
        <Ban size={20} className='text-orange-500' />
      </Button>
    </div>
  )
}

export type PersonDatailsComponentProps = {
  name: string
  ticketPrice: number
}

export function PersonDatailsComponent({
  name,
  ticketPrice,
}: PersonDatailsComponentProps) {
  return (
    <div className='flex items-center justify-between w-full px-4'>
      <span className='text-sm text-zinc-500'>{name}</span>
      <span className='text-sm text-zinc-500'>R$ {ticketPrice}</span>
    </div>
  )
}

export function TicketCardReservationModal() {
  const [open, setOpen] = useState(false)
  const [openForm, setOpenForm] = useState(false)
  const { personsList, handleSubmitData } = usePersonForm()
  const { setParam, deleteParam } = useTicketParam()

  const maxPersonsQuantity = personsList.length !== 3

  useEffect(() => {
    if (!open) {
      deleteParam()
    }
  }, [open, deleteParam])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='default' onClick={() => setParam('121212')}>
          Reservar
          <Ticket size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader className='items-center justify-between'>
          <DialogTitle>Preencha este formulário</DialogTitle>
          <DialogClose>
            <X size={24} />
          </DialogClose>
        </DialogHeader>
        <div className='flex flex-col items-center gap-8 p-8 border border-zinc-300 rounded-xl'>
          <h2 className='font-semibold'>Resumo</h2>
          <strong className='text-orange-500 text-2xl font-semibold'>
            R$ 440,00
          </strong>
          {personsList.map((person, index) => (
            <PersonDatailsComponent
              name={person.name}
              ticketPrice={person.age}
              key={index}
            />
          ))}
          <div className='flex-1 flex flex-col w-full gap-4'>
            {maxPersonsQuantity && (
              <Button variant='simple' onClick={() => setOpenForm(!openForm)}>
                {openForm ? 'Cancelar' : 'Adicionar acompanhantes'}
              </Button>
            )}
            <Button variant='simple-orange'>Reservar passagens</Button>
          </div>
          <div className='flex-1 flex flex-col w-full gap-4'>
            {openForm && maxPersonsQuantity && (
              <TicketForm submitFunction={handleSubmitData} />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
