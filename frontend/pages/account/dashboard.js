import React from "react"
import PageLayout from "@/components/page-layout"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    HStack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react"
function DashboardPage({ order }) {
    return (
        <PageLayout title="User Dashboard">
            <Flex
                minH={"calc(100vh - 120px)"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}
            >
                <HStack>
                    <h1>Dashboard</h1>
                    <h3>My order</h3>
                </HStack>
            </Flex>
        </PageLayout>
    )
}
export default DashboardPage
