import clsx from 'clsx'

interface InputProps extends React.ComponentProps<'input'> {
  variant: 'outline' | 'minimalist'
  icon?: React.ElementType
}

export function Input({ variant, icon: Icon, ...props }: InputProps) {
  return (
    <div
      className={clsx('flex-1 p-2 flex', {
        'border border-green-700 rounded-3xl w-full': variant === 'outline',
        'border border-zinc-300 rounded-xl': variant === 'minimalist',
      })}
    >
      {Icon && <Icon className='mx-2 text-orange-500' />}
      <input {...props} className='w-full outline-none' />
    </div>
  )
}
