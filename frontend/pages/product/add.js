import { useState } from "react"
import { useRouter } from "next/router"
import NextLink from "next/link"
import { API_URL } from "@/config/index"
import PageLayout from "@/components/page-layout"
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
  Container,
  Textarea,
} from "@chakra-ui/react"
function AddProductPage({ products }) {
  const toast = useToast()
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
  })

  const router = useRouter()
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

    const res = await fetch(`${API_URL}/products`, {
      method: "POST",
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
    <PageLayout title="Add Product">
      <Container maxW={"container.xl"} bg={"white"}>
        <NextLink href={"/product"}>Go Back</NextLink>

        <Heading>Add Product</Heading>

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
            Add Product
          </Button>
        </form>
      </Container>
    </PageLayout>
  )
}

export default AddProductPage
