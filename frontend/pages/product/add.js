import { useState } from "react"
import { useRouter } from "next/router"
import NextLink from "next/link"
import { API_URL } from "@/config/index"
import PageLayout from "@/components/page-layout"
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  useToast,
  Container,
  Textarea,
} from "@chakra-ui/react"
function AddProductPage({ products }) {
  const [values, setValues] = useState({
    name: "",

    description: "",
  })

  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
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
      <Container maxW={"container.xl"}>
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
