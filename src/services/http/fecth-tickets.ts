import { TicketFiltersResponse, TransportType } from '@/types/ticket'
import { api } from '../api'

type RequestBody = {
  Page: number
  after?: string
  RouteKind?: TransportType
  beforeDay?: string
  SearchQuery?: string
}

export async function fetchTickes(
  page: string,
  transportType: string | null,
  afterDay: string,
  beforeDay: string,
  query: string
): Promise<TicketFiltersResponse> {
  try {
    const requestBody: RequestBody = { Page: Number(page) }

    if (afterDay) {
      requestBody.after = afterDay
    }

    if (beforeDay) {
      requestBody.beforeDay = beforeDay
    }

    if (query) {
      requestBody.SearchQuery = query
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
