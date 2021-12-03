import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from "@chakra-ui/react";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
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
