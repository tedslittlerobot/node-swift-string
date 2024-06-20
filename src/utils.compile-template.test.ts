/* eslint-disable ava/no-ignored-test-files */
import test from 'ava';
import {compileTemplate} from './utils.js';

test('compiles with no substitutions', t => {
	t.is(
		compileTemplate(['foo'] as unknown as TemplateStringsArray, []),
		'foo',
	);
});

test('compiles with one substitution', t => {
	t.is(
		compileTemplate(['foo '] as unknown as TemplateStringsArray, ['bar']),
		'foo bar',
	);
	t.is(
		compileTemplate(['foo '] as unknown as TemplateStringsArray, [42]),
		'foo 42',
	);
});

test('compiles with multiple substitution pairs', t => {
	t.is(
		compileTemplate(['foo ', ' baz '] as unknown as TemplateStringsArray, ['bar', 'monkeys']),
		'foo bar baz monkeys',
	);
});

test('compiles with multiple substitution pairs and trailing template', t => {
	t.is(
		compileTemplate(['foo ', ' baz'] as unknown as TemplateStringsArray, ['bar']),
		'foo bar baz',
	);
});

test('compiles with multiple substitution pairs and double substitution', t => {
	t.is(
		compileTemplate(['foo ', ''] as unknown as TemplateStringsArray, ['bar', 'baz']),
		'foo barbaz',
	);
});
