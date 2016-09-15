/* @flow */
'use strict'

export function actionGenerator () {
  return {
    description: 'Create new action file',
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
        name: 'actionName',
        message: 'What is the action name?',
        validate: function (value) {
          if ((/.+/).test(value)) { return true }
          return 'name is required'
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/client/js/actions/{{dashCase filename}}.js',
        template: `/* @flow */
'use strict'

export function {{camelCase actionName}} () {
  return true
}

`
      },
      {
        type: 'add',
        path: 'src/client/js/actions/tests/{{dashCase filename}}.spec.js',
        template: `/* @flow */
'use strict'

import test from 'ava'

import { {{camelCase actionName}} } from '../{{dashCase filename}}'

test(t => {
  t.is({{camelCase actionName }}(), false)
})

`
      }
    ]
  }
}
