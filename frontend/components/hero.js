import React from "react"
import {
  Stack,
  Flex,
  Button,
  Text,
  Heading,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react"
import NextLink from "next/link"

function Hero(props) {
  return (
    <Flex
      w={"full"}
      h={"400px"}
      backgroundImage={"images/hero.jpg"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            align={"center"}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>
          <Stack direction={"row"}>
            <NextLink href={"/product"}>
              <Button
                colorScheme={"white"}
                bg={"gray.900"}
                round={"none"}
                _hover={{ bg: "gray.700" }}
                borderRadius={"none"}
                size="lg"
              >
                Shop All
              </Button>
            </NextLink>
          </Stack>
        </Stack>
      </VStack>
    </Flex>

  )
}

export default Hero
