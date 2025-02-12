import { priceTypes, setors } from '@/constants'
import { TicketFilter } from './ticket-filter'

export function TicketListFilters() {
  return (
    <TicketFilter.Root>
      <TicketFilter.Item>
        <TicketFilter.Label>Preço</TicketFilter.Label>
        <TicketFilter.Select data={priceTypes} filterName='priceOrder' />
      </TicketFilter.Item>
      <TicketFilter.Item>
        <TicketFilter.Label>Data</TicketFilter.Label>
        <TicketFilter.DataPicker></TicketFilter.DataPicker>
      </TicketFilter.Item>
      <TicketFilter.Item>
        <TicketFilter.Label>Origem</TicketFilter.Label>
        <TicketFilter.Combobox />
      </TicketFilter.Item>
      <TicketFilter.Item>
        <TicketFilter.Label>Destino</TicketFilter.Label>
        <TicketFilter.Combobox />
      </TicketFilter.Item>
      <TicketFilter.Item>
        <TicketFilter.Label>Setor</TicketFilter.Label>
        <TicketFilter.Select data={setors} filterName='transportType' />
      </TicketFilter.Item>
    </TicketFilter.Root>
  )
}
