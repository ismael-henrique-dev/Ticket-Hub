import clsx from 'clsx'

interface TicketCardRootProps {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
}

export function TicketCardRoot({ children, variant }: TicketCardRootProps) {
  return (
    <div
      className={clsx(
        'border-2 border-orange-500 rounded-3xl p-6 flex justify-between',
        {
          'bg-orange-500 text-zinc-50': variant === 'secondary',
        }
      )}
    >
      {children}
    </div>
  )
}
