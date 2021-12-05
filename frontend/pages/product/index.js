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
import { API_URL, PAGE_SIZE } from "@/config/index"
import Pagination from "@/components/pagination"

function ProductPage({ products, page, total }) {
  return (
    <PageLayout>
      <Container maxW={"container.xl"}>
        <ProductsList products={products} />
        <Pagination page={page} total={total} />
      </Container>
    </PageLayout>
  )
}

export default ProductPage

export async function getServerSideProps({ query: { page = 1 } }) {
  //calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PAGE_SIZE

  // Fetch Total
  const totalRes = await fetch(`${API_URL}/products/count`)
  const total = await totalRes.json()

  // Fetch Products
  const productsRes = await fetch(
    `${API_URL}/products?_limit=${PAGE_SIZE}&_start=${start}`
  )
  const products = await productsRes.json()

  return {
    props: { products, page: +page, total },
  }
}
