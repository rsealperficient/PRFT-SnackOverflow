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
import { getCategories, getCategory } from "@/utils/api"
import ProductsList from "@/components/products-list";
import Pagination from "@/components/pagination";

function CategorySingle({ category , page, total}) {
  return (
    <PageLayout>
      <Container maxW={"container.xl"}>
        <Heading>Category by Products</Heading>
        <Box>Filter</Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={1} bg="tomato">
            Filter
          </GridItem>
          <GridItem colSpan={4} bg="papayawhip">
            <ProductsList products={category.products} />
            <Pagination page={page} total={total} />
          </GridItem>
        </Grid>
      </Container>
    </PageLayout>
  )
}

export default CategorySingle
export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug)
  return { props: { category } }
}

export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map((_category) => {
      return {
        params: { slug: _category.slug },
      }
    }),
    fallback: true,
  }
}
