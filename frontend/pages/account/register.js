import React, { useContext, useState, useEffect } from "react"
import PageLayout from "@/components/page-layout"
import AuthContext from "@/context/AuthContext"
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react"
import NextLink from "next/link"

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const { registerUser, error } = useContext(AuthContext)
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const toast = useToast()

  useEffect(
    () =>
      error &&
      toast({
        title: error,
        status: "warning",
        position: "top",
        isClosable: true,
      })
  )
  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== passwordConfirm) {
      toast({
        title: `Password does not match.`,
        status: "warning",
        position: "top",
        isClosable: true,
      })
      return
    }
    registerUser({ username, email, password })
  }
  return (
    <PageLayout title="User Registration">
      <Flex
        minH={"calc(100vh - 120px)"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} minW={"md"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Register</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                <FormControl id="username" isRequired>
                  <FormLabel>User Name</FormLabel>
                  <Input
                    type="username"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    errorBorderColor="red.300"
                  />
                </FormControl>
                <FormControl id="email" isRequired>
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
                <FormControl id="password" isRequired>
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
                <FormControl id="passwordConfirm" isRequired>
                  <FormLabel>Confirm password</FormLabel>
                  <Input
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    errorBorderColor="red.300"
                  />
                </FormControl>
                <Stack spacing={10} mt={3}>
                  <Text>
                    Already have an account?{" "}
                    <NextLink href={"/account/login"}>
                      <Link color={"blue.400"}>Log in</Link>
                    </NextLink>
                  </Text>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign up
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

export default RegisterPage
