import Document, { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "@chakra-ui/react"
import React from "react"
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=optional"
            rel="stylesheet"
          />

          <script
            async
            src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"
          ></script>
        </Head>

        <body>
          {/* Make Color mode to persists when refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />

          <div
            id="snipcart"
            data-config-modal-style="side"
            data-api-key="OTAyMWZlNGQtZmQwNy00MTI0LWIyNzAtMGYxYzA0YWEyMGMwNjM3NzQyMzQ5OTQ3NDYwNzkx"
            data-config-add-product-behavior="none"
          ></div>
        </body>
      </Html>
    )
  }
}
