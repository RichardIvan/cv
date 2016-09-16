/* @flow */
'use strict'

import { html } from '../src/server/helpers/html'

function CustomHtmlPlugin (options) {
  // Configure your plugin with options...
}

CustomHtmlPlugin.prototype.apply = function (compiler) {
  // ...
  compiler.plugin('compilation', function (compilation) {
    // console.log('The compiler is starting a new compilation...')

    compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
      htmlPluginData.html += html
      // console.log(htmlPluginData.html)
      callback(null, htmlPluginData)
    })
  })
}

module.exports = CustomHtmlPlugin
