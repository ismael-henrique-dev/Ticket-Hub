interface TicketCardInfoProps {
  children?: React.ReactNode
  infoTitle: string
}

export function TicketCardInfo({ children, infoTitle }: TicketCardInfoProps) {
  return (
    <div className='flex items-center gap-4'>
      {children}
      <span className='md:text-xl font-medium'>{infoTitle}</span>
    </div>
  )
}
