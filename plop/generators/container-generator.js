/* @flow */
'use strict'

export function componentGenerator () {
  return {
    description: 'Create new container files',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the container name?',
        validate: function (value) {
          if ((/.+/).test(value)) { return true }
          return 'name is required'
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/client/js/containers/{{dashCase name}}-container.js',
        template: `/* @flow */
'use strict'

import m from 'mithril'

const {{camelCase name}}Container = {
  view: () => m(\`.\${style.container\}\`)
}

export default {{camelCase name}}Container

`
      },
      {
        type: 'add',
        path: 'src/client/js/containers/tests/{{dashCase name}}-container.spec.js',
        template: `/* @flow */
'use strict'

import test from 'ava'
import mq from 'mithril-query'

import {{camelCase name}}Container from '../{{dashCase name}}-container'

test(t => {
  t.isNot(mq({{camelCase name}}Container).has('div'))
})

`
      }
    ]
  }
}
