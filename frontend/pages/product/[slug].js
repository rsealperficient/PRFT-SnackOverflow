import React, { useContext } from "react"
import { getMedia } from "@/utils/get-media"
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
  Center,
  Spinner,
} from "@chakra-ui/react"
import { API_URL } from "@/config/index"
import { MdKeyboardArrowLeft } from "react-icons/md"

import Image from "next/image"
import PageLayout from "@/components/page-layout"
import { getProducts, getProduct } from "@/utils/api"
import { useRouter } from "next/router"
import NextLink from "next/link"
import NextImage from "@/utils/image"
import AppContext from "@/context/app-context"
function ProductSingle({ product }) {
  const router = useRouter()
  const toast = useToast()
  const { user } = useContext(AppContext)

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
    return (
      <Center h={"100vh"}>
        <Spinner size="xl" />
      </Center>
    )
  }

  return (
    <PageLayout title={product.title}>
      <Container
        maxW={"container.xl"}
        py={"8"}
        minH={"calc(100vh - 88px - 56px)"}
      >
        <Container bg={"white"} w={"full"} maxW={"container.xl"} p={"12"}>
          <Grid templateColumns="repeat(7, 1fr)" gap={8}>
            <GridItem colSpan={"7"}>
              <Button
                onClick={() => router.back()}
                variant={"link"}
                size={"small"}
              >
                <MdKeyboardArrowLeft /> Back
              </Button>
            </GridItem>
            <GridItem colSpan={3}>
              <NextImage media={product.image} width="240" height="240" />
            </GridItem>
            <GridItem colSpan={4}>
              <VStack alignItems={"start"} spacing={6}>
                <HStack justifyContent={"space-between"} w={"full"}>
                  <Heading>{product.title}</Heading>
                  <Heading size={"md"} fontWeight={500}>
                    ${product.price}
                  </Heading>
                </HStack>

                <Text fontSize="18">{product.description}</Text>
                <Divider></Divider>
              </VStack>

              {product.status === "published" ? (
                <Button
                  mt="8"
                  className="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-price={product.price}
                  data-item-url={router.asPath}
                  data-item-description={product.description}
                  data-item-image={getMedia(
                    product.image.formats.thumbnail.url
                  )}
                  data-item-name={product.title}
                  v-bind="customFields"
                  w={"full"}
                  size={"md"}
                  rounded={"none"}
                  bg={"gray.900"}
                  color={"white"}
                  _hover={{ bg: "gray.100", color: "gray.900" }}
                >
                  Add to cart
                </Button>
              ) : (
                <>
                  <Center mt={"12"}> Coming soon...</Center>
                  <Button
                    mt="8"
                    className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-url={router.asPath}
                    data-item-description={product.description}
                    data-item-image={getMedia(
                      product.image.formats.thumbnail.url
                    )}
                    data-item-name={product.title}
                    v-bind="customFields"
                    w={"full"}
                    size={"md"}
                    rounded={"none"}
                    disabled
                  >
                    Add to cart
                  </Button>
                </>
              )}
            </GridItem>
          </Grid>
          {user && (
            <>
              <Box>
                <NextLink href={`/product/edit/${product.id}`}>
                  Edit Product
                </NextLink>
                <Link href="#" onClick={() => setIsOpen(true)}>
                  Delete Product
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
                      Are you sure? You can&apos;t undo this action afterwards.
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
            </>
          )}
        </Container>
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
