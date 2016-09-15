/* @flow */
'use strict'

import {
  actionGenerator,
  componentGenerator,
  reducerGenerator,
  selectorGenerator,
  helperGenerator
} from './plop/generators'

module.exports = function (plop) {
  plop.setGenerator('New Action', actionGenerator()),
  plop.setGenerator('New Component', componentGenerator()),
  plop.setGenerator('New Reducer', reducerGenerator()),
  plop.setGenerator('New Selector', selectorGenerator())
  // plop.setGenerator('New Helper', helperGenerator())
}
