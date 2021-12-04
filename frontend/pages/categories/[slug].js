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

function CategorySingle({ product }) {
  return (
    <PageLayout>
      <Container maxW={"container.xl"}>
        <Heading>Category by Products</Heading>
      </Container>
    </PageLayout>
  )
}

export default CategorySingle
