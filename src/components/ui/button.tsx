import clsx from 'clsx'

interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode
  variant?: 'default' | 'submit' | 'minimalist' | 'cancel' | 'square-red'
}

export function Button({
  children,
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx({
        'border bg-orange-500 rounded-3xl w-full': variant === 'submit',
        'text-orange-500': variant === 'minimalist',
        'flex items-center justify-center rounded-3xl gap-2 text-zinc-50 bg-orange-500 mt-2 px-4 py-2':
          variant === 'default',
        'bg-zinc-700 text-zinc-50 rounded-lg text-sm font-bold px-6 py-2': variant === 'cancel',
        'bg-red-700 text-zinc-50 rounded-lg text-sm font-bold px-6 py-2': variant === 'square-red',
      })}
    >
      {children}
    </button>
  )
}
