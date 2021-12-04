import { React, ReactNode, useEffect } from "react"
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
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons"
const Links = ["Dashboard", "Projects", "Team"]

function Header(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // let btnRef;

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
          {/*<Input placeholder="Search" size="md" />*/}

          <SearchBar />
        </Box>
        <Flex alignItems={"center"}>
          <NextLink href="/login" passHref>
            <Button variant={"solid"} colorScheme={"blue"} size={"sm"} mr={4}>
              Log In
            </Button>
          </NextLink>
          <Button
            variant={"outline"}
            colorScheme={"blue"}
            size={"sm"}
            mr={4}
            className="snipcart-checkout "
          >
            Cart <Text ml="2" as="span" className="snipcart-items-count"></Text>
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Link href={"#"}>asdf</Link>
          </Stack>
        </Box>
      ) : null}

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <NextLink href="/stores/checkout" passHref>
              <Button colorScheme="blue">Checkout</Button>
            </NextLink>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Header
