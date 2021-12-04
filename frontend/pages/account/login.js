import React, { useContext, useEffect, useState } from "react"
import PageLayout from "@/components/page-layout"
import { FaUser } from "react-icons/fa"

function LoginPage() {
  return (
    <PageLayout title="User Login">
      <div>
        <h1>
          <FaUser /> Log In
        </h1>
      </div>
    </PageLayout>
  )
}

export default LoginPage
