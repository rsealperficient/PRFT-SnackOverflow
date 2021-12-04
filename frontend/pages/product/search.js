import {
  SimpleGrid,
  Box,
  Container,
  Grid,
  GridItem,
  Flex,
  Spacer,
  Heading,
  Button,
  ListIcon,
  Text,
  VStack,
  List,
  ListItem,
  Divider,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react"
import Image from "next/image"
import PageLayout from "@/components/page-layout"
import { getProducts, getProduct } from "@/utils/api"
import ProductsList from "@/components/products-list"
import qs from "qs"
import { useRouter } from "next/router"

import { API_URL } from "@/config/index"

function ProductSearchPage({ products }) {


  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading product...</div>
  }
  return (
    <PageLayout>
      <Container maxW={"container.xl"}>
        <Heading>Search Results for {router.query.term}</Heading>
        {products.length === 0 && <h3>No products to show</h3>}
        <ProductsList products={products} />
        <Button onClick={() => router.back()}>Go back</Button>
      </Container>
    </PageLayout>
  )
}


export default ProductSearchPage

export async function getServerSideProps({ query: { term } }) {
  // const query = qs.stringify({
  //   _where: {
  //     name_contains: term,
  //     // _or: [{ name_contains: term }],
  //   },
  // })

  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { set_contains: term },
        { description_contains: term },
        { rarity_contains: term },
      ],
    },
  });


  console.log(query)
  const res = await fetch(`${API_URL}/products?${query}`)
  const products = await res.json()
  console.log(products)

  return {
    props: { products },
  }
}
