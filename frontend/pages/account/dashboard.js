import React from "react"
import PageLayout from "@/components/page-layout"

function DashboardPage({ order }) {
  return (
    <PageLayout title="User Dashboard">
      <div>
        <h1>Dashboard</h1>
        <h3>My order</h3>
      </div>
    </PageLayout>
  )
}
export default DashboardPage
