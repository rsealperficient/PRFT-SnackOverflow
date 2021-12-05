import PageLayout from "@/components/page-layout"
import CategoryRow from "@/components/category-row"
import {
  Box,
  Container,
  Grid,
  Heading,
  Flex,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react"
import ProductsList from "@/components/products-list"
import { getCategories, getCategory, getProducts } from "@/utils/api"
import Hero from "@/components/hero"

function HomePage({ products, categories }) {
  return (
    <PageLayout>
      <Hero />
      <Flex
        minH={"calc(100vh - 88px - 56px - 300px)"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Container maxW={"container.xl"}>
          <CategoryRow categories={categories} />
        </Container>
      </Flex>
    </PageLayout>
  )
}

export default HomePage

export async function getStaticProps() {
  const products = await getProducts()
  const categories = await getCategories()
  return { props: { products, categories } }
}
