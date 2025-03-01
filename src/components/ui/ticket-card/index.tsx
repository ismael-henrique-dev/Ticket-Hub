import {
  TicketCardActions,
  TicketCardReservationModal,
} from './ticket-card-actions'
import { TicketCardContent } from './ticket-card-content'
import { TicketCardIcon } from './ticket-card-icon'
import { TicketCardInfo } from './ticket-card-info'
import { TicketCardPriceSummary } from './ticket-card-price-summary'
import { TicketCardRoot } from './ticket-card-root'

export const TicketCard = {
  Root: TicketCardRoot,
  Content: TicketCardContent,
  Icon: TicketCardIcon,
  PriceSummary: TicketCardPriceSummary,
  Modal: TicketCardReservationModal,
  Actions: TicketCardActions,
  Info: TicketCardInfo,
}
