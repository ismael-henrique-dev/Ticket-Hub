interface TicketFilterItemProps {
  children: React.ReactNode
}

export function TicketFilterItem({ children }: TicketFilterItemProps) {
  return <div className="flex flex-col gap-4">{children}</div>
}
