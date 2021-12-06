import {
  Container,
  Flex,
  Heading,
  Button,
  VStack,
  Center,
  Spinner,
  Stack,
} from "@chakra-ui/react"
import PageLayout from "@/components/page-layout"
import { getProductsByQuery } from "@/utils/api"
import ProductsList from "@/components/products-list"
import qs from "qs"
import { useRouter } from "next/router"

import React from "react"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { API_URL } from "@/config/index"

function ProductSearchPage({ products }) {
  const router = useRouter()
  if (router.isFallback) {
    return (
      <Center h={"100vh"}>
        <Spinner size="xl" />
      </Center>
    )
  }
  return (
    <PageLayout>
      <Flex
        w={"full"}
        h={"20vh"}
        bgGradient="linear(to-r, teal.300, cyan.700, purple.500)"
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={"8"}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Heading
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={"4xl"}
            >
              Search Results for {router.query.term}
            </Heading>
          </Stack>
        </VStack>
      </Flex>
      <Container
        maxW={"container.xl"}
        pt={"8"}
        pb={"20"}
        minH={"calc(100vh - 88px - 117px - 56px )"}
      >
        <Button onClick={() => router.back()} variant={"link"} size={"small"}>
          <MdKeyboardArrowLeft /> Back
        </Button>
        {products.length === 0 && <Heading>No products to show</Heading>}
        <ProductsList products={products} />
      </Container>
    </PageLayout>
  )
}

export default ProductSearchPage

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { title_contains: term },
        { description_contains: term },
        { slug_contains: term },
      ],
    },
  })

  const res = await fetch(`${API_URL}/products?${query}`)

  const products = await res.json()

  return {
    props: { products },
  }
}
