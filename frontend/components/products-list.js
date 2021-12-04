import React from "react"
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Grid,
  Box,
} from "@chakra-ui/react"
import NextLink from "next/link"
import Image from "next/image"

function ProductsList({ products }) {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {products.map((_product) => (
        <Box key={_product.id}>
          <NextLink href={`/product/${_product.slug}`}>
            <a>
              <div className="w-full bg-white">
                <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
                  <Image
                    src={
                      _product.image
                        ? _product.image.formats.thumbnail.url
                        : "/images/black-lotus.jpg"
                    }
                    width={200}
                    height={270}
                  />
                </div>
              </div>
              <div>
                <h4>{_product.title}</h4>
                {/*<div>{_product.description}</div>*/}
              </div>
            </a>
          </NextLink>
        </Box>
      ))}
    </Grid>
  )
}

export default ProductsList
