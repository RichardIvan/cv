/* @flow */
'use strict'

import test from 'ava'

import { isPlaying } from '../game-selector'

const state = {
  value: true
}

test(t => {
  t.is(isPlaying(state), false)
})

