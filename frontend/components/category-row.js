import NextLink from "next/link"

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Link,
  Grid,
  GridItem,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react"
import { React } from "react"
import Image from "next/image"
import { LinkBox, LinkOverlay } from "@chakra-ui/react"

const CategoryRow = ({ categories = [] }) => {
  return (
    <Grid my="8" templateColumns="repeat(3, 1fr)" gap={8}>
      {categories.map((_category) => (
        // <NextLink href={"/account/login"}>Log in</NextLink>

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
