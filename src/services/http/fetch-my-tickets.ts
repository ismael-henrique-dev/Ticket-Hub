'use server'

import { cookies } from 'next/headers'
import { api } from '../api'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { TransportType } from '@/types/ticket'

interface Ticket {
  Id: string
  TotalTicketPrice: number
  Validated_at: string | null
  Completed_at: string | null
  userId: string
  TravelId: string
}

interface TravelRef {
  Id: string
  TravelBasePrice: number
  BeginningPointId: string
  FinnishPointId: string
  Travel_Day: string
  Transport: TransportType
}

interface Point {
  Id: string
  Name: string
  UF: string
  Description: string
  Ports: boolean
  Railroads: boolean
  Airports: boolean
  route_id: string
  order: number
}

export interface TicketItem {
  ticket: Ticket
  travelRef: TravelRef
  byCompany: string
  BegginingPoint: Point
  FinishPoint: Point
}

interface Config {
  maxPrice: number
}

interface ReturnedTicketList {
  Description: string
  Ticket: TicketItem[]
  config: Config
}

type RequestBody = {
  Page: number
  after?: string
  RouteKind?: TransportType
  beforeDay?: string
  SearchQuery?: string
}

export async function fetchMyTickes(
  page: string,
  transportType: string | null,
  afterDay: string,
  beforeDay: string,
  query: string
): Promise<ReturnedTicketList> {
  try {
    const cookie = await cookies()
    const token = cookie.get('userId') as RequestCookie

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

    const { data } = await api.patch(`app/ticket/list/${page}`, requestBody, {
      headers: { Authorization: `Bearer ${token.value}` },
    })

    console.log(data)

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Login erro to user')
  }
}
