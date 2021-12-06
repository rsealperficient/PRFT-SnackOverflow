import React from "react"
import {
  Grid,
  Box,
  Link,
  GridItem,
  Center,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react"
import NextImage from "@/utils/image"
import NextLink from "next/link"

function ProductsList({ products }) {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={8}>
      {products.map((_product) => (
        <GridItem colSpan={1} key={_product.id}>
          <Center pt={12} minH={"300px"}>
            <NextLink href={`/product/${_product.slug}`} w={"full"}>
              <Link
                display={"block"}
                w={"full"}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Box
                  role={"group"}
                  p={6}
                  maxW={"330px"}
                  w={"full"}
                  minH={"340px"}
                  bg={"white"}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={"230px"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      background: "gray.300",
                      filter: "blur(15px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(30px)",
                      },
                      textDecoration: "none",
                    }}
                  >
                    <NextImage
                      media={_product.image}
                      width="240"
                      height="240"
                    />
                  </Box>
                  <Stack pt={10} align={"start"}>
                    <Heading
                      size={"sm"}
                      _groupHover={{
                        color: "blue.700",
                      }}
                    >
                      {_product.title}
                    </Heading>
                    <Stack direction={"row"} align={"center"}>
                      <Text>${_product.price}</Text>
                    </Stack>
                  </Stack>
                </Box>
              </Link>
            </NextLink>
          </Center>
        </GridItem>
      ))}
    </Grid>
  )
}

export default ProductsList
