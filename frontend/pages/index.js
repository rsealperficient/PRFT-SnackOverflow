import PageLayout from "@/components/page-layout"
import { Box, Container, Grid, Heading, Flex, GridItem } from "@chakra-ui/react"
import ProductsList from "@/components/products-list";
import {getProducts} from "@/utils/api";

function HomePage({products}) {
  return (
    <PageLayout>
      <Container maxW={"container.xl"}>
        {/*<Flex>*/}
        {/*  <Box w={'200px'}>Sidebar</Box>*/}
        {/*  <Box bg={'blue.200'}>Product List</Box>*/}
        {/*</Flex>*/}
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
