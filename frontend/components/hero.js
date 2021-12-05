import React from "react"
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react"

function Hero(props) {
  return (
    <Flex
      w={"full"}
      h={"300px"}
      backgroundImage={"/images/hero.jpg"}
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
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            textAlign={"center"}
          >
            Buy and Sell Trading Card Games Online
          </Text>

        </Stack>
      </VStack>
    </Flex>
  )
}

export default Hero
