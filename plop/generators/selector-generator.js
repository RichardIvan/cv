/* @flow */
'use strict'

export function selectorGenerator () {
  return {
    description: 'Create new selector files',
    prompts: [
      {
        type: 'input',
        name: 'filename',
        message: 'What is the filename?',
        validate: function (value) {
          if ((/.+/).test(value)) { return true }
          return 'name is required'
        }
      },
      {
        type: 'input',
        name: 'selectorName',
        message: 'What is the selector name?',
        validate: function (value) {
          if ((/.+/).test(value)) { return true }
          return 'name is required'
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/client/js/selectors/{{dashCase filename}}-selector/{{dashCase filename}}-selector.js',
        template: `/* @flow */
'use strict'

export function {{camelCase selectorName}} (state: Object) {
  return state.value
}

`
      },
      {
        type: 'add',
        path: 'src/client/js/selectors/{{dashCase filename}}-selector/tests/{{dashCase filename}}-selector.spec.js',
        template: `/* @flow */
'use strict'

import test from 'ava'

import { {{camelCase selectorName}} } from '../{{dashCase filename}}-selector'

const state = {
  value: true
}

test(t => {
  t.is({{camelCase selectorName }}(state), false)
})

`
      }
    ]
  }
}
