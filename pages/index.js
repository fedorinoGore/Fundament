/* eslint-disable no-console */
import styled from 'styled-components'

import getConfig from 'next/config'

require('../utils/console')

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

if (!process.browser) {
  console.color('SETTINGS:', serverRuntimeConfig.settings || 'not available') // Will only be available on the server side
} 
console.color('ENVIRONMENT: ', publicRuntimeConfig.env) // Will be available on both server and client
// console.color(process.env.NODE_ENV)

const Title = styled.h1`
  color: #FF6F61;
  font-size: 48px;
  font-weight: 300;
  margin: auto;
  max-width: 400px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export default () => <Title>NEXT.JS is cool</Title>
