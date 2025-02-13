'use client'

import { Search as SearchIcon, SendHorizontal } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

type SearchFormData = {
  query: string
}

export function Search() {
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  function handleSearch(data: SearchFormData) {
    console.log(`Searching... ${data.query}`)
    
    const params = new URLSearchParams(searchParams.toString())

    if (data.query) {
      params.set('query', data.query)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  const { register, handleSubmit } = useForm<SearchFormData>({
    defaultValues: {
      query: searchParams.get('query') || ''
    }
  })

  return (
    <form onSubmit={handleSubmit(handleSearch)} className='bg-orange-500 flex items-center justify-between rounded-3xl px-6 py-3 text-zinc-50'>
      <div className='flex items-center gap-3'>
        <SearchIcon />
        <input
          type='text'
          className='bg-transparent flex-1 outline-none placeholder:text-zinc-100'
          placeholder='Pesquise por uma cidade'
          {...register('query')}
        />
      </div>
      <button type='submit'>
        <SendHorizontal />
      </button>
    </form>
  )
}
