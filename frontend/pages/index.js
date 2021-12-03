import PageLayout from "@/components/page-layout"
import { Box, Container, Grid, Heading } from "@chakra-ui/react"

function HomePage() {
  return (
    <PageLayout>
      <Container maxW={"container.xl"}>
        <Box p={4}>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <Heading>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              cumque debitis dicta dignissimos eum exercitationem iusto magni
              natus porro possimus quam quibusdam quis quisquam quod quos
              reiciendis, repellat unde velit.
            </Heading>
          </Grid>
        </Box>
      </Container>
    </PageLayout>
  )
}

export default HomePage
