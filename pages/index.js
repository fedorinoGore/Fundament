import getConfig from 'next/config'

require('../utils/console')

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

console.color('SETTINGS:', serverRuntimeConfig.settings) // Will only be available on the server side
console.color('ENVIRONMENT: ', publicRuntimeConfig.env) // Will be available on both server and client
// console.color(process.env.NODE_ENV)

export default () => <div>Welcome to next.js!</div>
