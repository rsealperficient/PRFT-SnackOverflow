import Document, { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "@chakra-ui/react"
import React from "react"
import { SNIPCART_API } from "@/config/index"
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
        </Head>

        <body>
          {/* Make Color mode to persists when refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"
          ></script>
          <div
            hidden
            id="snipcart"
            data-config-modal-style="side"
            data-api-key={SNIPCART_API}
            // data-config-add-product-behavior="none"
          ></div>
        </body>
      </Html>
    )
  }
}
