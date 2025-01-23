import { ComponentProps } from 'react'

interface TicketFilterLabelProps extends ComponentProps<'label'> {
  children: React.ReactNode
}

export function TicketFilterLabel({
  children,
  ...rest
}: TicketFilterLabelProps) {
  return (
    <label className='text-lx font-semibold' {...rest}>
      {children}
    </label>
  )
}
