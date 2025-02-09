import { TicketFiltersResponse } from '@/types/ticket'
import { api } from '../api'

export async function fetchTickes(page:string, transportType?: string | null, afterDay?: string): Promise<TicketFiltersResponse> {
  try {
    const { data } = await api.patch('app/travel/filter', {
      Page: Number(page),
      RouteKind: transportType,
      afterDay: afterDay,
    })

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Login erro to user')
  }
}
