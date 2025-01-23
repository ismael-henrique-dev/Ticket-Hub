interface TicketCardContentProps {
  children: React.ReactNode
}

export function TicketCardContent({ children }: TicketCardContentProps) {
  return <div className='flex flex-col gap-4'>{children}</div>
}
