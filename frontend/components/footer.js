import {
  Box,
  Container,
  Stack,
  Link,
  useColorModeValue,
  Text,
} from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa"

function Footer(props) {
  return (
    <Box
      bg={useColorModeValue("blue.800", "gray.900")}
      color={useColorModeValue("gray.100", "gray.200")}
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
        <Stack direction={"row"} spacing={4}>
          <Link href={"https://github.com/rsealperficient/PRFT-SnackOverflow"}>
            <FaGithub />
          </Link>
        </Stack>
        <Text>© 2021 Made with Next.js and Chakra UI.</Text>
      </Container>
    </Box>
  )
}

export default Footer
