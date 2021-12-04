import React from "react"
import PageLayout from "@/components/page-layout"
import { Heading, Container } from "@chakra-ui/react"
function NotFoundPage(props) {
  return (
    <PageLayout>
      <Container maxW={"container.xl"}>
        <Heading>Not Found</Heading>
      </Container>
    </PageLayout>
  )
}

export default NotFoundPage
