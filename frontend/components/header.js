import { React, useContext } from "react"
import NextLink from "next/link"
import SearchBar from "@/components/search-bar"
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react"
import AppContext from "@/context/app-context"
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons"
import { MdShoppingCart } from "react-icons/md"
function Header(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user, logoutUser } = useContext(AppContext)
  return (
    <Box bg={useColorModeValue("white", "gray.900")} px={4} py={3}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Box border="4px" p={2} borderColor="gray.900">
              <Heading
                size={4}
                fontWeight="semibold"
                textTransform={"uppercase"}
              >
                <NextLink href="/">Art Market</NextLink>
              </Heading>
            </Box>
          </HStack>
        </HStack>
        <Box w="60%">
          <SearchBar />
        </Box>
        <Flex alignItems={"center"}>
          <HStack spacing="24px">
            {user ? (
              <>
                <Button
                  colorScheme={"blue"}
                  px={6}
                  variant={"outline"}
                  onClick={() => logoutUser()}
                >
                  Log out
                </Button>
              </>
            ) : (
              <NextLink href={"/account/login"}>Log in</NextLink>
            )}
            <Button
              colorScheme={"blue"}
              size={"md"}
              mr={4}
              className="snipcart-checkout "
              variant={"ghost"}
              px={6}
              leftIcon={<MdShoppingCart />}
              borderRadius={"none"}
            >
              Cart
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
