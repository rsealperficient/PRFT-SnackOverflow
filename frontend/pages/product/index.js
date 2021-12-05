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
        <Box>Filter</Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={1} bg="tomato">
            Filter
          </GridItem>
          <GridItem colSpan={4} bg="papayawhip">
            <ProductsList products={products} />
            <Box>Pagination 3</Box>
            <Pagination page={page} total={total} />
          </GridItem>
        </Grid>
      </Container>
    </PageLayout>
  )
}

export default ProductPage


export async function getServerSideProps({ query: { page = 1 } }) {
  //calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PAGE_SIZE;

  // Fetch Total
  const totalRes = await fetch(`${API_URL}/products/count`);
  const total = await totalRes.json();

  // Fetch Products
  const productsRes = await fetch(
      `${API_URL}/products?_limit=${PAGE_SIZE}&_start=${start}`
  );
  const products = await productsRes.json();

  return {
    props: { products, page: +page, total },
  };
}

// export async function getStaticProps() {
//   const products = await getProducts()
//   return { props: { products } }
// }

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
