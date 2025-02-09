import { TicketFiltersResponse } from '@/types/ticket'
import { api } from '../api'

export async function fetchTickes(page:number, transportType?: string, afterDay?: string): Promise<TicketFiltersResponse> {
  try {
    const { data } = await api.patch('app/travel/filter', {
      Page: page,
      RouteKind: transportType,
      afterDay: afterDay,
    })

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Login erro to user')
  }
}
