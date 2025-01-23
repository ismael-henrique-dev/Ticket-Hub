import { ComponentProps } from 'react'

interface TicketFilterContainerProps extends ComponentProps<'section'> {
  children: React.ReactNode
}

export function TicketFilterContainer({
  children,
  ...rest
}: TicketFilterContainerProps) {
  return (
    <section className='flex flex-col gap-6' {...rest}>
      {children}
    </section>
  )
}
