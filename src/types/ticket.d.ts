export type Ticket = {
  BeginningPoint: City
  FinishingPoint: City
  TravelBasePrice: number
  TravelDay: string
  Id: string
}

export type City = {
  Id: string
  Name: string
  Description: string
  Ports: boolean
  Railroads: boolean
  Airports: boolean
}

export type TicketFiltersResponse = {
  Description: string
  response: {
    response: Ticket[]
    totalTravels: number
    totalPages: 2
  }
}
