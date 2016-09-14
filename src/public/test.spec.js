import test from 'ava'

import { demo, bro } from './demo'

// test('foo', t => {
//     t.pass();
// });
//
// test('bar', async t => {
//     const bar = Promise.resolve('bar');
//
//     t.is(await bar, 'bar');
// });
//
// test(t => {
//     const a = /foo/;
//     const b = 'bar';
//     const c = 'baz';
//     t.true(a.test(b) || b === c);
// });

test(t => {
  t.is(demo('hello'), 'hello')
})

test(t => {
  t.true(bro())
})
