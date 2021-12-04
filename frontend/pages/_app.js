import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react"
import theme from "../theme"
import { AuthProvider } from "@/context/AuthContext"
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
        }}
      >   <AuthProvider>

        <Component {...pageProps} />
      </AuthProvider>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
