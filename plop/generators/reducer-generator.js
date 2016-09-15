/* @flow */
'use strict'

export function reducerGenerator () {
  return {
    description: 'Create new reducer',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name?',
        validate: function (value) {
          if ((/.+/).test(value)) { return true }
          return 'name is required'
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/client/js/reducers/{{dashCase name}}/{{dashCase name}}-reducer.js',
        template: `/* @flow */
'use strict'

export const initialState = true

const {{camelCase name}}Reducer = (state = initialState, action) => {
  if (!action || !action.type) return state

  return state
}

export default {{camelCase name}}Reducer

`
      },
      {
        type: 'add',
        path: 'src/client/js/reducers/{{dashCase name}}/tests/{{dashCase name}}-reducer.spec.js',
        template: `/* @flow */
'use strict'

import test from 'ava'

import {{camelCase name}}Reducer from '../{{dashCase name}}-reducer'

test(t => {
  t.is({{camelCase name}}Reducer(), false)
})

`
      },
      {
        type: 'add',
        path: 'src/client/js/reducers/{{dashCase name}}/helpers/{{dashCase name}}-reducer-helper.js',
        template: `/* @flow */
'use strict'

export function {{camelCase name}}Helper () {
  return true
}

`
      },
      {
        type: 'add',
        path: 'src/client/js/reducers/{{dashCase name}}/helpers/tests/{{dashCase name}}-reducer-helper.spec.js',
        template: `/* @flow */
'use strict'

import test from 'ava'

import { {{camelCase name}}Helper } from '../{{dashCase name}}-reducer-helper'

test(t => {
  t.is({{camelCase name}}Helper(), false)
})

`
      }
    ]
  }
}
