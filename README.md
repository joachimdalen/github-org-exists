# github-org-exists

Check if a GitHub org name is taken.

## Installation

`npm install @joachimdalen/github-org-exists`

## Usage

```js
const githubOrgExists = require('@joachimdalen/github-org-exists');

(async () => {
	const res = await githubOrgExists('dalenapps');

	console.log(res);
	//=> true
})();
```

## Tests

`npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
