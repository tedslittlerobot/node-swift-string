Node / JS Swift String
======================

Swift-style multiline strings in JS.

## Demonstration

When writing multiline strings in indented code like a function or control statement, multiline strings often break the visual flow of the code document.

```typescript
if (true) {
	return `First line
Second line
Final line`;
}

// Returns:
// First line
// Second line
// Final line
```

This tag function allows you to preserve your current indentation and compose multiline strings the same way you would, say, a function with fiddly arguments:

```typescript
import s from 'swift-string';

if (true) {
	return s`
		First line
		Second line
		Final line
	`;
}

// Still Returns:
// First line
// Second line
// Final line
```


## Installation

```bash
npm i swift-string
```

## Usage

The demonstration above shows the general gist of it, but a few details and caveats are listed here:

- Strings without a blank opening line are not swift strings, and will be returned verbatim
- The final line break is optional - you can close the template tag on the same line as the final string, or on the next - however, if the final line is made up of whitespace, **it will be removed**.
- You can use any kind of indentation (spaces, tabs, even mixed spaces and tabs etc.), but whatever whitespace is present on the first line will be removed from all subsequent lines. This means that the output of the first line will never have any indentation or leading whitespace.
- If any subsequent lines do not have the exact prefix of the first line, they will be returned verbatim
