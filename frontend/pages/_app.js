import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return <ChakraProvider resetCSS theme={theme}>
    <ColorModeProvider
        options={{
          useSystemColorMode: false,
        }}
    >
      <Component {...pageProps} />
    </ColorModeProvider>
  </ChakraProvider>
}

export default MyApp
