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
                  <button
                      className="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"
                      data-item-id={product.id}
                      data-item-price={product.price}
                      // data-item-url={router.asPath}
                      // data-item-description={product.description}
                      // data-item-image={getStrapiMedia(
                      //     product.image.formats.thumbnail.url
                      // )}
                      data-item-name={product.name}
                      v-bind="customFields"
                  >
                    Add to cart
                  </button>
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
