export type City = {
  Id: string
  Name: string
  Description: string
  Ports: boolean
  Railroads: boolean
  Airports: boolean
}

export type TransportType = 'Air' | 'Rail' | 'Land' | 'Naval'

export type Ticket = {
  CompanyName: string
  BeginningPoint: City
  FinishingPoint: City
  TravelBasePrice: number
  TravelDay: string
  Transport: TransportType
  Id: string
}

export type TicketFiltersResponse = {
  Description: string
  response: {
    response: Ticket[]
    totalTravels: number
    totalPages: number
  }
}
