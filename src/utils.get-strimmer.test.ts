/* eslint-disable ava/no-ignored-test-files */
import test from 'ava';
import {getStrimmer} from './utils.js';

test('with input with no whitespace, returns undefined', t => {
	const strimmer = getStrimmer(['foo']);

	t.true(strimmer === undefined, 'Strimmer should be undefined');
});

test('with input with space, trims matching inputs', t => {
	const strimmer = getStrimmer([' foo']);

	t.true(typeof strimmer === 'function', 'Strimmer should be a string trimming function');
	t.is(strimmer!(' foo'), 'foo');
	t.is(strimmer!(' bar'), 'bar');
	t.is(strimmer!('   indent'), '  indent');
	t.is(strimmer!(''), '');
	t.is(strimmer!('  '), ' ');
});

test('with input with space, leaves non-matching inputs alone', t => {
	const strimmer = getStrimmer(['  foo']);

	t.true(typeof strimmer === 'function', 'Strimmer should be a string trimming function');
	t.is(strimmer!('	foo'), '	foo');
	t.is(strimmer!(' foo'), ' foo');
	t.is(strimmer!(' bar'), ' bar');
	t.is(strimmer!('   indent'), ' indent');
});
