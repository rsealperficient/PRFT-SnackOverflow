import NextLink from "next/link"

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
  useDisclosure,
  Link,
  Grid,
  GridItem,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react"
import { React } from "react"
import Image from "next/image"

const CategoryRow = ({ categories = [] }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      {categories.map((_category) => (
        // <NextLink href={"/account/login"}>Log in</NextLink>

        <GridItem>
          {/*<NextLink href={`/categories/${_category.slug}`} key={_category.id}>*/}
          {/*  <Link>{_category.name}</Link>*/}

          {/*</NextLink>*/}


          <Center>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
              <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'230px'}

                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}>
                <Image
                    src={
                      _category.image
                          ? _category.image.formats.thumbnail.url
                          : "/images/black-lotus.jpg"
                    }
                    width={200}
                    height={270}
                />

              </Box>
              <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Brand
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  Nice Chair, pink
                </Heading>
                <Stack direction={'row'} align={'center'}>
                  <Text fontWeight={800} fontSize={'xl'}>
                    $57
                  </Text>
                  <Text textDecoration={'line-through'} color={'gray.600'}>
                    $199
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Center>
        </GridItem>
      ))}
    </Grid>
  )
}

export default CategoryRow
