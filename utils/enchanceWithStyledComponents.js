const enchanceWithStyledComponents = (initialProps, ctx, sheet) => {
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
    })

  return {
    ...initialProps,
    styles: [...initialProps.styles, ...sheet.getStyleElement()]
  }
}

export default enchanceWithStyledComponents
