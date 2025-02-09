import { ComponentProps } from 'react'

interface TicketFilterContainerProps extends ComponentProps<'section'> {
  children: React.ReactNode
}

export function TicketFilterContainer({
  children,
  ...rest
}: TicketFilterContainerProps) {
  return (
    <section className='flex md:flex-col gap-6 p-2 max-w-full overflow-scroll' {...rest}>
      {children}
    </section>
  )
}
