import PageLayout from "@/components/page-layout"
import { Box, Container, Grid, Heading, Flex, GridItem } from "@chakra-ui/react"
import ProductsList from "@/components/products-list"
import { getProducts } from "@/utils/api"

function HomePage({ products }) {
  return (
    <PageLayout>
      <Container maxW={"container.xl"}>
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          <GridItem h="200" colSpan={1} bg="purple.100">
            All Products
          </GridItem>
          <GridItem colSpan={1} bg="purple.100">
            Sealed
          </GridItem>{" "}
          <GridItem colSpan={1} bg="purple.100">
            Singles
          </GridItem>
        </Grid>

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

export default HomePage

export async function getStaticProps() {
  const products = await getProducts()
  return { props: { products } }
}
