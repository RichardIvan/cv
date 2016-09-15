/* @flow */
'use strict'

import test from 'ava'
import mq from 'mithril-query'

import toolbarHelper from '../toolbar-helper'

test(t => {
  t.is(mq(toolbarHelper), true)
})

