import NextLink from "next/link"
import { Grid, GridItem, Center, Heading } from "@chakra-ui/react"
import { React } from "react"
import { LinkBox, LinkOverlay } from "@chakra-ui/react"

const CategoryRow = ({ categories = [] }) => {
  return (
    <Grid my="8" templateColumns="repeat(3, 1fr)" gap={8}>
      {categories.map((_category) => (
        <GridItem h={"200px"} alignItems={"center"} key={_category.id}>
          <LinkBox
            h="full"
            as="article"
            bgColor={"white"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{ boxShadow: "md" }}
            rounded="lg"
          >
            <Center>
              <Heading size="md">
                <NextLink
                  href={`/categories/${_category.slug}`}
                  key={_category.id}
                  passHref
                >
                  <LinkOverlay>{_category.name}</LinkOverlay>
                </NextLink>
              </Heading>
            </Center>
          </LinkBox>
        </GridItem>
      ))}
    </Grid>
  )
}

export default CategoryRow
