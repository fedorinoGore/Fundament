/* eslint-disable react/no-danger */
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import enchanceWithStyledComponents from 'utils/enchanceWithStyledComponents'
import fonts from '../styles/fonts'

// TODO: reset browser styles on every page?
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    try {
      const initialProps = await Document.getInitialProps(ctx)
      const styledProps = enchanceWithStyledComponents(initialProps, ctx, sheet)
      return styledProps
    } finally {
      sheet.seal()
    }
  }
  
  // TODO: replace lang attribute with dynamic value after adding localization
  render() {
    return (
      <html lang='en-US'>
        <Head>
          <link rel="icon" type="image/x-icon" href="./static/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
          <style dangerouslySetInnerHTML={{ __html: `${fonts}`}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
