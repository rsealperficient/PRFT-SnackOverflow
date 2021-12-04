import React from "react"
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
  Link,
  ListItem,
  Divider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Img,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react"
import { API_URL } from "@/config/index"

import Image from "next/image"
import PageLayout from "@/components/page-layout"
import { getProducts, getProduct } from "@/utils/api"
import { useRouter } from "next/router"
import NextLink from "next/link"
function ProductSingle({ product }) {
  const router = useRouter()
  const toast = useToast()

  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()

  const deleteProduct = async (e) => {
    const res = await fetch(`${API_URL}/products/${product.id}`, {
      method: "DELETE",
    })

    const data = await res.json()
    if (!res.ok) {
      toast({
        title: data.message,
        status: "warning",
        position: "top",
        isClosable: true,
      })
    } else {
      router.push("/product")
    }
  }
  if (router.isFallback) {
    return <div>Loading product...</div>
  }

  return (
    <PageLayout title={product.title}>
      <Container maxW={"container.xl"}>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <GridItem colSpan={1}>
            <Img
              rounded={"lg"}
              // boxSize="250px"
              objectFit={"cover"}
              src={
                product.image
                  ? product.image.formats.small.url
                  : "https://via.placeholder.com/15"
              }
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Heading>
              {product.name} - ${product.price}
            </Heading>

            <Text>{product.description}</Text>
            <Divider></Divider>
            <NumberInput defaultValue={1} min={1} max={1000} width="100px">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button
              colorScheme="green"
              mt="2"
              className="snipcart-add-item"
              data-item-id={product.id}
              data-item-price={product.price}
              data-item-url={router.asPath}
              data-item-description={product.description}
              data-item-image={
                product.image
                  ? product.image.formats.small.url
                  : "https://via.placeholder.com/15"
              }
              data-item-name={product.name}
              v-bind="customFields"
            >
              Add to cart
            </Button>

            {/*<VStack>*/}
            {/*  <Flex*/}
            {/*    bg={useColorModeValue("gray.50", "gray.700")}*/}
            {/*    py={4}*/}
            {/*    borderRadius={"xl"}*/}
            {/*    w={"full"}*/}
            {/*  >*/}
            {/*    <Box p="2">*/}
            {/*      <Heading size="md">Arcade Collectibles</Heading>*/}
            {/*    </Box>*/}
            {/*    <Box p="2">*/}
            {/*      <Heading size="md">$3.00</Heading>*/}
            {/*    </Box>*/}
            {/*    <Spacer />*/}
            {/*    <Box>*/}
            {/*      <Button colorScheme="teal" mr="4" variant="outline">*/}
            {/*        Add to Cart*/}
            {/*      </Button>*/}
            {/*    </Box>*/}
            {/*  </Flex>*/}
            {/*  <Flex*/}
            {/*    bg={useColorModeValue("gray.50", "gray.700")}*/}
            {/*    py={4}*/}
            {/*    borderRadius={"xl"}*/}
            {/*    w={"full"}*/}
            {/*  >*/}
            {/*    <Box p="2">*/}
            {/*      <Heading size="md">Arcade Collectibles</Heading>*/}
            {/*    </Box>*/}
            {/*    <Box p="2">*/}
            {/*      <Heading size="md">$3.00</Heading>*/}
            {/*    </Box>*/}
            {/*    <Spacer />*/}
            {/*    <Box>*/}
            {/*      <Button colorScheme="teal" mr="4" variant="outline">*/}
            {/*        Add to Cart*/}
            {/*      </Button>*/}
            {/*      <button*/}
            {/*          className="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"*/}
            {/*          data-item-id={product.id}*/}
            {/*          data-item-price={product.price}*/}
            {/*          // data-item-url={router.asPath}*/}
            {/*          // data-item-description={product.description}*/}
            {/*          // data-item-image={getStrapiMedia(*/}
            {/*          //     product.image.formats.thumbnail.url*/}
            {/*          // )}*/}
            {/*          data-item-name={product.name}*/}
            {/*          v-bind="customFields"*/}
            {/*      >*/}
            {/*        Add to cart*/}
            {/*      </button>*/}
            {/*    </Box>*/}
            {/*  </Flex>*/}
            {/*</VStack>*/}
          </GridItem>
        </Grid>
        <Box>
          <NextLink href={`/product/edit/${product.id}`}>Edit Event</NextLink>
          <Link href="#" onClick={() => setIsOpen(true)}>
            Delete Event
          </Link>
        </Box>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Product
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={deleteProduct} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Container>
    </PageLayout>
  )
}

export default ProductSingle

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug)
  return { props: { product } }
}

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
