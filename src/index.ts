import {getStrimmer, prepareSwiftString} from './utils.js';

export default function s(template: TemplateStringsArray, ...parameters: any[]): string {
	const [compiled, lines] = prepareSwiftString(template, parameters);

	if (!lines) {
		return compiled;
	}

	const strimmer = getStrimmer(lines);

	// If there is no string trimming function, then just put it all back together
	if (!strimmer) {
		return lines.join('\n');
	}

	return lines
		// eslint-disable-next-line unicorn/no-array-callback-reference
		.map(strimmer)
		// Put it all back together
		.join('\n');
}
