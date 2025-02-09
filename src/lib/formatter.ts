import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'
dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const formattedRelativeDate = (relativeDate: string) => {
  const date = dayjs(relativeDate)

  return `Viajar em ${date.format('DD MMMM')}`
}


export const formattedRelativeHour = (relativeDate: string) => {
  const date = dayjs(relativeDate)

  return `${date.format('HH:mm')}`
}