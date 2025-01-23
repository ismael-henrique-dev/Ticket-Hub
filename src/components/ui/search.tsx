import { Search as SearchIcon ,SendHorizonal } from 'lucide-react'

export function Search() {
  return (
    <form className='bg-orange-500 flex items-center justify-between rounded-3xl px-6 py-3 text-zinc-50'>
      <div className='flex items-center gap-3'>
        <SearchIcon />
        <input
          type='text'
          className='bg-transparent flex-1 outline-none placeholder:text-zinc-100'
          placeholder='Pesquise por uma cidade'
        />
      </div>
      <button type='submit'>
        <SendHorizonal />
      </button>
    </form>
  )
}
