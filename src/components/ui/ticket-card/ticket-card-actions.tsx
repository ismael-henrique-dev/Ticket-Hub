'use client'

import { useEffect, useState } from 'react'
import { usePersonForm } from '@/hooks/use-person-form'
import { useTicketParam } from '@/hooks/use-ticket-param'
import { TicketForm } from '../forms/form-buy-tickets'
import { Ban, Pencil, Ticket, Trash, X } from 'lucide-react'
import { Button } from '../button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shadcn-ui/dialog'
import { priceFormatter } from '@/lib/formatter'
import { createTicket } from '@/services/http/auth/create-ticket'
import { createTicketByMyTicket } from '@/services/http/create-ticket-by-ticket'
import { Person } from '@/types/person'
import {
  Client,
  fetchClientsByTicketId,
} from '@/services/http/fecth-clents-by-ticket'
import { deleteCLientById } from '@/services/http/delete-client-by-id'
import { editClient } from '@/services/http/update-client-by-id'
import { showErrorToast, showSuccessToast } from '../toasts'
import { deleteTicketById } from '@/services/http/delete-ticket-bu-id'
// import { editClient } from '@/services/http/update-client-by-id'

export function TicketCardActions({
  basePrice,
  ticketId,
}: TicketCardReservationModalProps) {
  const [open, setOpen] = useState(false)
  const [openCreateForm, setOpenCreateForm] = useState(false)
  const [openEditForm, setOpenEditForm] = useState(false)
  const [personsList, setPersonsList] = useState<Client[]>([])

  // const [userUpdateData, setUserUpdateData] = useState<Person | null>(null)
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null)

  async function getClients() {
    const data = await fetchClientsByTicketId(ticketId)
    console.log(data.Client)
    setPersonsList(data.Client)
  }

  async function handleOpen() {
    setParam(ticketId)
    getClients()
  }

  const { setParam, deleteParam } = useTicketParam()

  const maxPersonsQuantity = personsList.length !== 3

  const totalPrice = personsList.reduce((total, person) => {
    const ticketPrice = person.Age < 18 ? basePrice * 0.5 : basePrice
    return total + ticketPrice
  }, 0)

  useEffect(() => {
    if (!open) {
      deleteParam()
    }
  }, [open, deleteParam])

  async function handleSubmitData(data: Person) {
    try {
      const ticket = {
        TicketId: ticketId,
        Age: data.Age,
        CPF: data.CPF,
        IsCompanion: true,
        PersonName: data.Name,
      }

      await createTicketByMyTicket(ticket)

      const newClient: Client = {
        IsCompanion: true,
        PersonName: data.Name,
        Age: data.Age,
        CPF: data.CPF,
      }

      setPersonsList((prevPersonsList) => [...prevPersonsList, newClient])
      showSuccessToast('Acompanhente adicionado com sucesso!')
    } catch {
      showErrorToast('Error ao adicionar acompanhante')
    }
  }

  async function handleDeleteClientById(id: string) {
    try {
      await deleteCLientById(id)
      const newClientsList = personsList.filter((client) => client.Id !== id)
      setPersonsList(newClientsList)
      showSuccessToast('Acompanhente deletado com sucesso!')
    } catch {
      showErrorToast('Erro ao deletar acompanhente!')
    }
  }

  async function handleOpenEditForm(clientId: string) {
    setSelectedClientId(clientId)
    setOpenEditForm(true)
  }

  async function handleSubmitEditData(data: Person) {
    if (!selectedClientId) return

    const updatedTicket = {
      TicketId: ticketId,
      Age: data.Age,
      CPF: data.CPF,
      IsCompanion: true,
      PersonName: data.Name,
    }

    try {
      await editClient(selectedClientId, updatedTicket)
      setPersonsList((prevList) =>
        prevList.map((client) =>
          client.Id === selectedClientId
            ? { ...client, ...updatedTicket }
            : client
        )
      )
      setOpenEditForm(false)
      setSelectedClientId(null)
      showSuccessToast('Acompanhante atualizado com sucesso!')
    } catch (error) {
      console.error('Erro ao editar cliente:', error)
      showErrorToast('Erro ao editar as informações di cliente!')
    }
  }

  async function handleDeleteTicketById() {
    try {
      await deleteTicketById(ticketId)
      showSuccessToast('Passagem cancelada com sucesso!')
    } catch {
      showErrorToast('Erro ao cancelar passagem!')
    }
  }

  // function handleSubmitEditData(data: Person) {
  //   setUserUpdateData(data)
  // }

  // async function handleOpenEditForm(clientId: string) {
  //   setOpenEditForm(!openEditForm)

  //   if (userUpdateData) {
  //     const updatedTicket = {
  //       TicketId: ticketId,
  //       Age: userUpdateData.Age,
  //       CPF: userUpdateData.CPF,
  //       IsCompanion: true,
  //       PersonName: userUpdateData.Name,
  //     }

  //     console.log(userUpdateData)

  //     try {
  //       await editClient(clientId, updatedTicket)
  //       setPersonsList((prevList) =>
  //         prevList.map((client) =>
  //           client.Id === clientId ? { ...client, ...updatedTicket } : client
  //         )
  //       )
  //     } catch (error) {
  //       console.error('Erro ao editar cliente:', error)
  //     }
  //   }
  // }

  return (
    <div className='bg-zinc-50 p-3 flex items-center justify-center w-24 gap-4 rounded-xl'>
      {/* <Button variant='minimalist'>
        <Pencil size={20} className='text-orange-500' />
      </Button> */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant='minimalist' onClick={handleOpen}>
            <Pencil size={20} className='text-orange-500' />
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
              {priceFormatter.format(totalPrice)}
            </strong>
            {personsList.map((person, index) => (
              <PersonDatailsComponent
                type='edit'
                name={person.PersonName}
                ticketPrice={person.Age < 18 ? basePrice * 0.5 : basePrice}
                key={index}
                onAction={() => handleOpenEditForm(person.Id as string)}
                onDeleteClient={() =>
                  handleDeleteClientById(person.Id as string)
                }
              />
            ))}
            <div className='flex-1 flex flex-col w-full gap-4'>
              {maxPersonsQuantity && (
                <Button
                  variant='simple'
                  onClick={() => setOpenCreateForm(!openCreateForm)}
                >
                  {openCreateForm ? 'Cancelar' : 'Adicionar acompanhantes'}
                </Button>
              )}
              <Button variant='simple-orange'>Reservar passagens</Button>
            </div>
            <div className='flex-1 flex flex-col w-full gap-4'>
              {openCreateForm && maxPersonsQuantity && (
                <TicketForm submitFunction={handleSubmitData} /> // create
              )}
              {openEditForm && maxPersonsQuantity && (
                <TicketForm submitFunction={handleSubmitEditData} /> // edit
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Button variant='minimalist' onClick={handleDeleteTicketById}>
        <Ban size={20} className='text-orange-500' />
      </Button>
    </div>
  )
}

export type PersonDatailsComponentProps = {
  type: 'edit' | 'create'
  name: string
  ticketPrice: number
  onAction?: () => void
  onDeleteClient?: () => void
}

export function PersonDatailsComponent({
  name,
  ticketPrice,
  type,
  onAction,
  onDeleteClient,
}: PersonDatailsComponentProps) {
  return (
    <div className='flex items-center justify-between w-full px-4'>
      <span className='text-sm text-zinc-500'>{name}</span>
      <div className='flex gap-4'>
        <span className='text-sm text-zinc-500'>
          {priceFormatter.format(ticketPrice)}
        </span>
        {type === 'edit' && (
          <>
            <button className='text-sm text-zinc-500' onClick={onAction}>
              <Pencil size={16} />
            </button>
            <button className='text-sm text-zinc-500' onClick={onDeleteClient}>
              <Trash size={16} />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

type TicketCardReservationModalProps = {
  ticketId: string
  basePrice: number
}

export function TicketCardReservationModal({
  ticketId,
  basePrice,
}: TicketCardReservationModalProps) {
  const [open, setOpen] = useState(false)
  const [openForm, setOpenForm] = useState(false)
  const { personsList, handleSubmitData } = usePersonForm()
  const { setParam, deleteParam } = useTicketParam()

  const maxPersonsQuantity = personsList.length !== 3

  const totalPrice = personsList.reduce((total, person) => {
    const ticketPrice = person.Age < 18 ? basePrice * 0.5 : basePrice
    return total + ticketPrice
  }, 0)

  useEffect(() => {
    if (!open) {
      deleteParam()
    }
  }, [open, deleteParam])

  const ticket = {
    TravelId: ticketId,
    CompanionsList: personsList,
  }

  async function handleCreateTicket() {
    try {
      await createTicket(ticket)
      localStorage.removeItem('@personsList')
      showSuccessToast('Passagem criada!')
    } catch {
      showErrorToast('Erro ao criar passagem!')
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='default' onClick={() => setParam(ticketId)}>
          Reservar
          <Ticket className='md:text-xl text-base' />
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
            {priceFormatter.format(totalPrice)}
          </strong>
          {personsList.map((person, index) => (
            <PersonDatailsComponent
              type='create'
              name={person.Name}
              ticketPrice={person.Age < 18 ? basePrice * 0.5 : basePrice}
              key={index}
            />
          ))}
          <div className='flex-1 flex flex-col w-full gap-4'>
            {maxPersonsQuantity && (
              <Button variant='simple' onClick={() => setOpenForm(!openForm)}>
                {openForm ? 'Cancelar' : 'Adicionar acompanhantes'}
              </Button>
            )}
            <Button variant='simple-orange' onClick={handleCreateTicket}>
              Reservar passagens
            </Button>
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
