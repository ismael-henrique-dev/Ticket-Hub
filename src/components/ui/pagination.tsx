'use client'

import {
  Pagination as PaginationContainer,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem, 
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../shadcn-ui/pagination'

type PaginationProps = {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  // colocar loading aqui

  return (
    <PaginationContainer>
      <PaginationContent>
        {currentPage > 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious href={`?page=${currentPage - 1}`} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`?page=${currentPage - 1}`}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink href={`?page=${currentPage}`} isActive={true}>
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {totalPages !== currentPage && (
          <>
            <PaginationItem>
              <PaginationLink href={`?page=${currentPage + 1}`}>
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href={`?page=${currentPage + 1}`} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </PaginationContainer>
  )
}
