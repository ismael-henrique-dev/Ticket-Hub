'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useRef } from 'react'

export function useFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const initialSearchParamsRef = useRef(searchParams.toString())

  function setFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set(key, value)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const deleteParam = useCallback(
    (key: string) => {
      const params = new URLSearchParams(initialSearchParamsRef.current)
      params.delete(key)
      router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [pathname, router]
  )

  return {
    setFilter,
    deleteParam,
  }
}
