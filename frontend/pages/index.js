import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Heading
} from '@chakra-ui/react'
export default function Index({ allPosts, preview }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <Heading>Lorem  </Heading>
    </>
  )
}

// export async function getStaticProps({ preview = null }) {
//   const allPosts = (await getAllPostsForHome(preview)) || []
//   return {
//     props: { allPosts, preview },
//   }
// }
