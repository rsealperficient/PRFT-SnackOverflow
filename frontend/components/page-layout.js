import React from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Box } from "@chakra-ui/react"
function PageLayout({ title, description, children }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Box bg={'gray.100'}>{children}</Box>
      <Footer />

    </>
  )
}

PageLayout.defaultProps = {
  title: "Card Market",
  description: "Online Store for Trading Card Games",
}

export default PageLayout
