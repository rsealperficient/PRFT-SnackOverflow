import React from "react"
import { PAGE_SIZE } from "@/config/index"
import NextLink from "next/link"
import Link from "@chakra-ui/react"
function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PAGE_SIZE)
  return (
    <>
      {page > 1 && (
        <NextLink href={`/product?page=${page - 1}`}>
          Prev
        </NextLink>
      )}
      {page < lastPage && (
        <NextLink href={`/product?page=${page + 1}`}>
          Next
        </NextLink>
      )}
    </>
  )
}

export default Pagination
