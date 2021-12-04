// import { useRouter } from "next/router"
// import ErrorPage from "next/error"
// import Container from "@/components/container"
// import PostBody from "@/components/post-body"
// import MoreStories from "@/components/more-stories"
// import Header from "@/components/header"
// import PostHeader from "@/components/post-header"
// import SectionSeparator from "@/components/section-separator"
// import Layout from "@/components/layout"
// import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api"
// import PostTitle from "@/components/post-title"
// import Head from "next/head"
// import { CMS_NAME } from "@/lib/constants"
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

function ProductSingle({ product }) {
  return (
    <PageLayout>
      <Container maxW={"container.xl"}>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <GridItem colSpan={1}>
            <Image
              // loader={myLoader}
              src="https://picsum.photos/200/300"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Heading>
              {product.name} - ${product.price}
            </Heading>

            <Text>{product.description}</Text>
            <Divider></Divider>

            <VStack>
              <Flex
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderRadius={"xl"}
                w={"full"}
              >
                <Box p="2">
                  <Heading size="md">Arcade Collectibles</Heading>
                </Box>
                <Box p="2">
                  <Heading size="md">$3.00</Heading>
                </Box>
                <Spacer />
                <Box>
                  <Button colorScheme="teal" mr="4" variant="outline">
                    Add to Cart
                  </Button>
                </Box>
              </Flex>
              <Flex
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderRadius={"xl"}
                w={"full"}
              >
                <Box p="2">
                  <Heading size="md">Arcade Collectibles</Heading>
                </Box>
                <Box p="2">
                  <Heading size="md">$3.00</Heading>
                </Box>
                <Spacer />
                <Box>
                  <Button colorScheme="teal" mr="4" variant="outline">
                    Add to Cart
                  </Button>
                </Box>
              </Flex>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </PageLayout>
  )
}

export default ProductSingle

export async function getStaticPaths() {
  const products = await getProducts()
  return {
    paths: products.map((_product) => {
      return {
        params: { slug: _product.slug },
      }
    }),
    fallback: true,
  }
}
export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug)
  return { props: { product } }
}
