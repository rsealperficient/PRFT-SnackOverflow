import React from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Hero from "@/components/hero"

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
      {router.pathname === "/" && <Hero />}
      <div>{children}</div>
      <Footer />
        <div id="snipcart" data-config-modal-style="side" data-api-key="OTAyMWZlNGQtZmQwNy00MTI0LWIyNzAtMGYxYzA0YWEyMGMwNjM3NzQyMzQ5OTQ3NDYwNzkx"
             data-config-add-product-behavior="none"
             hidden></div>

    </>
  )
}

PageLayout.defaultProps = {
  title: "Card Market",
  description: "Online Store for Trading Card Games",
}

export default PageLayout
