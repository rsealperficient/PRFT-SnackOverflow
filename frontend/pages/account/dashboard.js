import React from "react"
import Layout from "@/components/page-layout"
import { API_URL } from "@/config/index"
import { parseCookies } from "@/utils/parse-cookie"

function DashboardPage({ products }) {
  const deleteProduct = async (id) => {
    console.log(id)
  }
  return (
    <Layout title="User Dashboard">
      <h1>Dashboard</h1>

      {products.map((product) => (
        <DashboardEvent
          key={product.id}
          product={product}
          handleDelete={deleteProduct}
        />
      ))}
    </Layout>
  )
}
export default DashboardPage

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)
  const res = await fetch(`${API_URL}/products/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const products = await res.json()
    console.log(products)
  return {
    props: { products },
  }
}
