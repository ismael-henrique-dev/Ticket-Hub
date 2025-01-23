import { TicketFilter } from './ticket-filter'

export function TicketFiltersList() {
  return (
    <TicketFilter.Root>
      <TicketFilter.Item>
        <TicketFilter.Label>Preço</TicketFilter.Label>
        <TicketFilter.Select></TicketFilter.Select>
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
        <TicketFilter.Select></TicketFilter.Select>
      </TicketFilter.Item>  
    </TicketFilter.Root>
  )
}
