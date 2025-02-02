'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useRef } from 'react'

export function useTicketParam() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Salva os searchParams iniciais apenas na primeira renderização
  const initialSearchParamsRef = useRef(searchParams.toString())

  function setParam(ticketId: string) {
    const params = new URLSearchParams(searchParams.toString()) // Usa o valor atualizado
    params.set('ticket', ticketId)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const deleteParam = useCallback(() => {
    const params = new URLSearchParams(initialSearchParamsRef.current) // Usa o valor fixo
    params.delete('ticket')
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, [pathname, router])

  return {
    setParam,
    deleteParam,
  }
}
