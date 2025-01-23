import { TicketFilterCombobox } from './ticket-filter-combobox'
import { TicketFilterContainer } from './ticket-filter-container'
import { TicketFilterDatePicker } from './ticket-filter-data-picker'
import { TicketFilterItem } from './ticket-filter-item'
import { TicketFilterLabel } from './ticket-filter-label'
import { TicketFilterSelect } from './ticket-filter-select'

export const TicketFilter = {
  Root: TicketFilterContainer,
  Item: TicketFilterItem,
  Label: TicketFilterLabel,
  Select: TicketFilterSelect,
  DataPicker: TicketFilterDatePicker,
  Combobox: TicketFilterCombobox
}
