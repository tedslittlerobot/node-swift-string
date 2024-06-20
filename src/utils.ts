
export function prepareSwiftString(template: TemplateStringsArray, parameters: any[]): [string, string[] | undefined] {
	const compiled = compileTemplate(template, parameters);
	const lines = getLines(compiled);

	return [compiled, lines];
}

/**
 * Compile the tag template as per normal
 */
export function compileTemplate(template: TemplateStringsArray, parameters: any[]) {
	return template.map((item, index) => `${item}${parameters[index] ?? ''}`).join('');
}

/**
 * Split the string into lines. Returns undefined if the string is not a swift-style string
 */
export function getLines(raw: string): string[] | undefined {
	const lines = raw.split('\n');

	// If the first line isn't empty, then this isn't a swift-style string - just return it.
	if (lines[0] !== '') {
		return undefined;
	}

	// Remove the first line
	lines.shift();

	// If the last line is not empty, remove it
	if (lines.at(-1)?.trim() === '') {
		lines.pop();
	}

	// If there are no lines left, then it's also not a swift-style string
	if (lines.length === 0) {
		return undefined;
	}

	return lines;
}

/**
 * Gets a line trimming function based on the given array of lines
 */
export function getStrimmer(lines: string[]): ((item: string) => string) | undefined {
	// Get the leading whitespace
	const match = /^(\s+)\S.*$/.exec(lines[0]);

	// If there is no leading whitespace, then just put it all back together
	if (!match) {
		return undefined;
	}

	// Extract the leading whitespace
	const prefix = match[1];

	// Remove matching leading whitespace from all lines, preserving any lines which don't have an exact match
	return item => item.startsWith(prefix) ? item.slice(prefix.length) : item;
}
