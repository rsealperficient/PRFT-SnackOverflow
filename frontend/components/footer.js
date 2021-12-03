import NextLink from "next/link"
import {
  Box,
  Container,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react"
function Footer(props) {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <NextLink href={"/"}>About</NextLink>
        </Stack>
        <Text>© 2021 Made with Next.js and Chakra UI.</Text>
      </Container>
    </Box>
  )
}

export default Footer
