import Document from 'next/document'
 
const enchanceWithStyledComponents = async (ctx, sheet) => {
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)
  return {
    ...initialProps,
    styles: [...initialProps.styles, ...sheet.getStyleElement()]
  }
}

export default enchanceWithStyledComponents
