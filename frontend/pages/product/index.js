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

function ProductPage({ products }) {
  return (
    <PageLayout>
      <Container maxW={"container.xl"}>
        <Box>Filter</Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={1} bg="tomato">
            Filter
          </GridItem>
          <GridItem colSpan={4} bg="papayawhip">
            <ProductsList products={products} />
            <Box>Pagination</Box>
          </GridItem>
        </Grid>
      </Container>
    </PageLayout>
  )
}

export default ProductPage

export async function getStaticProps() {
  const products = await getProducts()
  return { props: { products } }
}

// export async function getStaticPaths() {
//   const products = await getProducts()
//   return {
//     paths: products.map((_product) => {
//       return {
//         params: { slug: _product.slug },
//       }
//     }),
//     fallback: true,
//   }
// }
// export async function getStaticProps({ params }) {
//   const product = await getProduct(params.slug)
//   return { props: { product } }
// }
