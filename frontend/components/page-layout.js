import React from "react"
import Head from "next/head"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Box } from "@chakra-ui/react"
import { SITE_NAME, SITE_DESCRIPTION } from "@/config/index"
function PageLayout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <Header />
      <Box bg={"gray.100"}>{children}</Box>
      <Footer />
    </>
  )
}

PageLayout.defaultProps = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
}

export default PageLayout
