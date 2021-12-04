import PageLayout from "@/components/page-layout"
import React, { useState } from "react"
import { useRouter } from "next/router"
import NextLink from "next/link"
import { API_URL } from "@/config/index"
import {
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
  SimpleGrid,
  AlertDialogContent,
  AlertDialogOverlay,
  useColorModeValue,
  useToast,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react"

function EditProductPage({ product }) {
  const toast = useToast()
  const router = useRouter()
  const [imagePreview, setimagePreview] = useState(
    product.image ? product.image.formats.thumbnail.url : null
  )
  const [values, setValues] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    )
    if (hasEmptyFields) {
      toast({
        title: "Fill all required fields",
        status: "warning",
        position: "top",
        isClosable: true,
      })
    }

    const res = await fetch(`${API_URL}/products/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      toast({
        title: "Error",
        status: "warning",
        position: "top",
        isClosable: true,
      })
    } else {
      const product = await res.json()
      router.push(`/product/${product.slug}`)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }
  return (
    <PageLayout title="Add New Product">
      <Container maxW={"container.xl"} bg={"white"}>
        <NextLink href={"/product"}>Go Back</NextLink>

        <Heading>Edit Product</Heading>
        <SimpleGrid columns={2} spacing={10}>
          <Box>
            {imagePreview ? (
              <Img
                // boxSize="250px"
                objectFit={"cover"}
                src={imagePreview}
              />
            ) : (
              <div>
                <p>No image uploaded</p>
              </div>
            )}

            <div>
              <Button>Set Image</Button>
            </div>
          </Box>

          <form onSubmit={handleSubmit}>
            <FormControl id="name" isRequired>
              <FormLabel>Product Name</FormLabel>
              <Input
                type="name"
                name="name"
                id="name"
                value={values.name}
                onChange={handleInputChange}
                errorBorderColor="red.300"
              />
            </FormControl>

            <FormControl id="description">
              <FormLabel>Description</FormLabel>
              <Textarea
                type="description"
                name="description"
                id="description"
                value={values.description}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="price" isRequired>
              <FormLabel>Price</FormLabel>
              <Input
                type="price"
                name="price"
                id="price"
                value={values.price}
                onChange={handleInputChange}
                errorBorderColor="red.300"
              />
            </FormControl>

            <Button
              type="submit"
              loadingText="Submitting"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Update Product
            </Button>
          </form>
        </SimpleGrid>
      </Container>
    </PageLayout>
  )
}

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`${API_URL}/products/${id}`)
  const product = await res.json()

  return {
    props: { product },
  }
}
export default EditProductPage
