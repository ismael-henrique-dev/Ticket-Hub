import { TicketFiltersResponse, TransportType } from '@/types/ticket'
import { api } from '../api'

type RequestBody = {
  Page: number
  after?: string
  RouteKind?: TransportType
}

export async function fetchTickes(
  page: string,
  transportType: string | null,
  afterDay?: string
): Promise<TicketFiltersResponse> {
  try {
    const requestBody: RequestBody = { Page: Number(page) }

    if (afterDay) {
      requestBody.after = afterDay
    }

    if (transportType && transportType !== 'All') {
      requestBody.RouteKind = transportType as TransportType
    }

    const { data } = await api.patch('app/travel/filter', requestBody)

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Login erro to user')
  }
}
