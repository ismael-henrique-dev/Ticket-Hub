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
}

export function Pagination(props: PaginationProps) {
  return (
    <PaginationContainer>
      <PaginationContent>
        {props.currentPage > 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious href={`?page=${props.currentPage - 1}`} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`?page=${props.currentPage - 1}`}>
                {props.currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink href={`?page=${props.currentPage}`} isActive={true}>
            {props.currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`?page=${props.currentPage + 1}`}>
            {props.currentPage + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`?page=${props.currentPage + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </PaginationContainer>
  )
}
