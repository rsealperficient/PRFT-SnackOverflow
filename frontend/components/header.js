import { React, ReactNode, useEffect, useContext } from "react"
import NextLink from "next/link"
import SearchBar from "@/components/search-bar"
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
  Drawer,
  Text,
  DrawerOverlay,
  DrawerFooter,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react"
import AuthContext from "@/context/AuthContext"
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons"
const Links = ["Dashboard", "Projects", "Team"]
import { MdShoppingCart } from "react-icons/md"
function Header(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user, logoutUser } = useContext(AuthContext)
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
            <NextLink href="/">
              <Heading>TCG Market</Heading>
            </NextLink>
          </HStack>
        </HStack>
        <Box w="60%">
          <SearchBar />
        </Box>
        <Flex alignItems={"center"}>
          <HStack spacing="24px">
            {user ? (
              <>
                <NextLink href={"/account/dashboard"}>
                  <Button
                    colorScheme={"blue"}
                    // bg={"blue.400"}
                    px={6}
                    variant={"outline"}
                    // _hover={{
                    //   bg: "green.500",
                    // }}
                  >
                    My Account
                  </Button>
                </NextLink>

                <Button
                  colorScheme={"blue"}
                  // bg={"blue.400"}
                  px={6}
                  variant={"outline"}
                  // _hover={{
                  //   bg: "green.500",
                  // }}
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
              variant={"solid"}
              px={6}
              leftIcon={<MdShoppingCart />}
            >
              Cart{" "}
              <Text ml="2" as="span" className="snipcart-items-count"></Text>
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
