import React, { useContext, useEffect, useState } from "react"
import PageLayout from "@/components/page-layout"
import AppContext from "@/context/app-context"
import NextLink from "next/link"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react"
function LoginPage() {
  const toast = useToast()
  const { loginUser, error } = useContext(AppContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    error &&
      toast({
        title: error,
        status: "warning",
        position: "top",
        isClosable: true,
      })
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser({ email, password })
  }

  return (
    <PageLayout title="User Login">
      <Flex
        minH={"calc(100vh - 88px - 56px)"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Log in to your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    errorBorderColor="red.300"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    errorBorderColor="red.300"
                  />
                </FormControl>
                <Stack spacing={10} mt={3}>
                  <Text>
                    Don't have account?{" "}
                    <NextLink href={"/account/register"}>
                      <Link color={"blue.400"}>Sign up</Link>
                    </NextLink>
                  </Text>
                  <Button
                    type="submit"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </PageLayout>
  )
}

export default LoginPage
