/* @flow */
'use strict'

export function componentGenerator () {
  return {
    description: 'Create new component files',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?',
        validate: function (value) {
          if ((/.+/).test(value)) { return true }
          return 'name is required'
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/client/js/components/{{dashCase name}}-component/{{dashCase name}}-component.js',
        template: `/* @flow */
'use strict'

import m from 'mithril'

import style from './{{dashCase name}}-style.sass'

const {{camelCase name}}Component = {
  view: () => m(\`.\${style.container\}\`)
}

export default {{camelCase name}}Component

`
      },
      {
        type: 'add',
        path: 'src/client/js/components/{{dashCase name}}-component/{{dashCase name}}-style.sass',
        template: `.container
  background: pink

`
      },
      {
        type: 'add',
        path: 'src/client/js/components/{{dashCase name}}-component/tests/{{dashCase name}}-component.spec.js',
        template: `/* @flow */
'use strict'

import test from 'ava'
import mq from 'mithril-query'

import {{camelCase name}}Component from '../{{dashCase name}}-component'

test(t => {
  t.isNot(mq({{camelCase name}}Component).has('div'))
})

`
      },
      {
        type: 'add',
        path: 'src/client/js/containers/{{dashCase name}}-container/{{dashCase name}}-container.js',
        template: `/* @flow */
'use strict'

import m from 'mithril'

import {{camelCase name}}Component from '../../components/{{dashCase name}}-component/{{dashCase name}}-component'

const {{camelCase name}}Container = {
  view: ({ attrs }) => m({{camelCase name}}Component, { ...attrs })
}

export default {{camelCase name}}Container

`
      },
      {
        type: 'add',
        path: 'src/client/js/containers/{{dashCase name}}-container/helpers/{{dashCase name}}-helper.js',
        template: `/* @flow */
'use strict'

export function {{camelCase name}}Helper () {
  return true
}

`
      },
      {
        type: 'add',
        path: 'src/client/js/containers/{{dashCase name}}-container/helpers/tests/{{dashCase name}}-helper.spec.js',
        template: `/* @flow */
'use strict'

import test from 'ava'
import mq from 'mithril-query'

import { {{camelCase name}}Helper } from '../{{dashCase name}}-helper'

test(t => {
  t.is(mq({{camelCase name}}Helper), true)
})

`
      }
    ]
  }
}
