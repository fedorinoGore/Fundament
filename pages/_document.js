import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import enchanceWithStyledComponents from 'utils/enchanceWithStyledComponents'

// TODO: Add global styles - fonts Google Product Sans, Roboto
// TODO: reset browser styles on every page?
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Enchanting with Styled Components power and mutating ctx
    const sheet = new ServerStyleSheet() // TODO: maybe abstract away try...finaly also into enchanceWithStyledComponents
    try {
      const initialsWithStyled = await enchanceWithStyledComponents(ctx, sheet)
      return initialsWithStyled
    } finally {
      sheet.seal()
    }
  }
}
