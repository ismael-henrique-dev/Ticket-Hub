import { Info } from 'lucide-react'
import { Button } from '../ui'

export function DeleteWarningCard() {
  return (
    <div className='flex justify-between items-center px-6 py-3 border border-zinc-300 rounded-xl'>
      <div className='flex gap-3 items-center'>
        <Info className='text-zinc-700' />
        <span className='max-w-4xl text-sm'>
          Ao excluir sua conta, todas as suas transações, metas, contas e outros
          dados serão permanentemente perdidos. Portanto, você não poderá
          recuperar seus dados nem fazer login novamente.
        </span>
      </div>
      <Button variant='square-red' type='button'>
        Excluir conta
      </Button>
    </div>
  )
}
