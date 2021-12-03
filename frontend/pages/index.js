import PageLayout from "@/components/page-layout"
import { Box, Container, Grid, Heading, Flex, GridItem } from "@chakra-ui/react"

function HomePage() {
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
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
              <Box w="100%" h="10" bg="blue.500" />
            </Grid>
            <Box>Pagination</Box>
          </GridItem>
        </Grid>
      </Container>
    </PageLayout>
  )
}

export default HomePage
