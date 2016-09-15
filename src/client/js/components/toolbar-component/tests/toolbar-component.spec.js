/* @flow */
'use strict'

import test from 'ava'
import mq from 'mithril-query'

import toolbarComponent from '../toolbar-component'

test(t => {
  t.isNot(mq(toolbarComponent).has('div'))
})

