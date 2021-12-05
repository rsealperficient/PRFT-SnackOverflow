import {
  Container,
  Heading,
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Button,
  GridItem,
} from "@chakra-ui/react"
import PageLayout from "@/components/page-layout"
import { getCategories, getCategory } from "@/utils/api"
import ProductsList from "@/components/products-list"
import { MdKeyboardArrowLeft } from "react-icons/md"
import React from "react"
import {useRouter} from "next/router";

function CategorySingle({ category, page, total }) {
  const router = useRouter()

  return (
    <PageLayout>
      <Flex
        w={"full"}
        h={"20vh"}
        bgGradient="linear(to-r, teal.300, cyan.700, purple.500)"
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Heading
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              {category.name}
            </Heading>
          </Stack>
        </VStack>
      </Flex>

      <Container maxW={"container.xl"} pt={"8"} pb={"20"}   minH={"calc(100vh - 88px - 117px - 56px )"}>
        <Button onClick={() => router.back()} variant={"link"} size={"small"}>
          <MdKeyboardArrowLeft /> Back
        </Button>

        <ProductsList products={category.products} />
      </Container>
    </PageLayout>
  )
}

export default CategorySingle

export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug)
  return { props: { category } }
}

export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map((_category) => {
      return {
        params: { slug: _category.slug },
      }
    }),
    fallback: true,
  }
}
