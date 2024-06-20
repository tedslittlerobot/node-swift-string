/* eslint-disable ava/no-ignored-test-files */
import test from 'ava';
import {getLines} from './utils.js';

test('with non swift-string (single line), returns undefined', t => {
	t.is(
		getLines('foo'),
		undefined,
	);
});

test('with non swift-string (empty), returns undefined', t => {
	t.is(
		getLines('\n'),
		undefined,
	);
});

test('with swift-string (single line), returns array', t => {
	t.deepEqual(
		getLines('\nfoo\n'),
		['foo'],
	);
});

test('with swift-string (multi line), returns array', t => {
	t.deepEqual(
		getLines('\nfoo\nbar\n\nbaz\n'),
		['foo', 'bar', '', 'baz'],
	);
});

test('with swift-string (multi line), does not trim last line if not empty', t => {
	t.deepEqual(
		getLines('\nfoo\nbar\nbaz'),
		['foo', 'bar', 'baz'],
	);
});
