import { Container, Button } from "@chakra-ui/react"
import PageLayout from "@/components/page-layout"
import ProductsList from "@/components/products-list"
import { API_URL, PAGE_SIZE } from "@/config/index"
import Pagination from "@/components/pagination"
import { MdKeyboardArrowLeft } from "react-icons/md"
import React from "react"
import { useRouter } from "next/router"

function ProductPage({ products, page, total }) {
  const router = useRouter()

  return (
    <PageLayout>
      <Container maxW={"container.xl"} pt={"8"} pb={"20"}>
        <Button onClick={() => router.back()} variant={"link"} size={"small"}>
          <MdKeyboardArrowLeft /> Back
        </Button>
        <ProductsList products={products} />
        <Pagination page={page} total={total} />
      </Container>
    </PageLayout>
  )
}

export default ProductPage

export async function getServerSideProps({ query: { page = 1 } }) {
  //calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PAGE_SIZE

  // Fetch Total
  const totalRes = await fetch(`${API_URL}/products/count`)
  const total = await totalRes.json()

  // Fetch Products
  const productsRes = await fetch(
    `${API_URL}/products?_limit=${PAGE_SIZE}&_start=${start}`
  )
  const products = await productsRes.json()

  return {
    props: { products, page: +page, total },
  }
}
