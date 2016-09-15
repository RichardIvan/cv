/* @flow */
'use strict'

import m from 'mithril'

import toolbarComponent from '../../components/toolbar-component/toolbar-component'

const toolbarContainer = {
  view: ({ attrs }) => m(toolbarComponent, { ...attrs })
}

export default toolbarContainer

