import clsx from 'clsx'

interface TicketCardIconProps {
  Icon: React.ElementType
  variant: 'primary' | 'secondary'
  size?: number
}

export function TicketCardIcon({
  Icon,
  variant,
  size = 40,
}: TicketCardIconProps) {
  return (
    <Icon
      size={size}
      variant
      className={clsx({
        'text-orange-500': variant === 'primary',
      })}
    />
  )
}
