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
        <div
            hidden
            id="snipcart"
            data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
        />
    </>
  )
}

PageLayout.defaultProps = {
  title: "Card Market",
  description: "Online Store for Trading Card Games",
}

export default PageLayout
