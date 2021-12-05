import React from "react"
import { PAGE_SIZE } from "@/config/index"
import NextLink from "next/link"
import { HStack, Link, Button } from "@chakra-ui/react"
function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PAGE_SIZE)
  return (
    <HStack justifyContent={"center"} py={10}>
      <NextLink href={`/product?page=${page - 1}`}>
        <Button
          variant="outline"
          borderColor={"black"}
          borderRadius={"none"}
          _hover={{
            bg: "white",
          }}
          isDisabled={page > 1 ? false : true}
        >
          Prev{" "}
        </Button>
      </NextLink>

      <NextLink href={`/product?page=${page + 1}`}>
        <Button
          variant="outline"
          borderColor={"black"}
          borderRadius={"none"}
          _hover={{
            bg: "white",
          }}
          isDisabled={page < lastPage ? false : true}
        >
          Next
        </Button>
      </NextLink>
    </HStack>
  )
}

export default Pagination
