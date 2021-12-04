import Document, { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "@chakra-ui/react"
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">

          <Head>
              <link rel="preconnect" href="https://app.snipcart.com" />
              <link rel="preconnect" href="https://cdn.snipcart.com" />
              <link
                  rel="stylesheet"
                  href="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css"
              />
              <script
                  async
                  src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js"
              />
          </Head>

        <body>
          {/* Make Color mode to persists when refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
