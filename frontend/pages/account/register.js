import React, { useContext, useEffect, useState } from "react"
import PageLayout from "@/components/page-layout"
import { FaUser } from "react-icons/fa"

function RegisterPage() {
  return (
    <PageLayout title="User Registration">
      <h1>
        <FaUser /> Register
      </h1>
    </PageLayout>
  )
}

export default RegisterPage
