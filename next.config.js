/* eslint-disable dot-notation */
const path = require('path')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const settings = require('./app.settings.json')

const nextConfig = {
  serverRuntimeConfig: { // Will only be available on the server side
    secret: process.env.SECRET,
    settings: settings[process.env.NODE_ENV] || settings['development']
  },
  publicRuntimeConfig: { // Will be available on both server and client
    env: process.env.NODE_ENV
  },
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  },
  webpack(config) {
    config.resolve.alias['components'] = path.join(__dirname, 'components') // eslint-disable-line no-param-reassign, dot-notation
    config.resolve.alias['containers'] = path.join(__dirname, 'containers') // eslint-disable-line no-param-reassign, dot-notation
    config.resolve.alias['utils'] = path.join(__dirname, 'utils') // eslint-disable-line no-param-reassign, dot-notation
    return config
  }
}

module.exports = withBundleAnalyzer(nextConfig)
