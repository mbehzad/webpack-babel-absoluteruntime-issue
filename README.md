# Webpack throwing error when reading the babel generated imports when `absoluteRuntime` is used.

`npm install` and `npm run build` for reproducing build fail.

webpack error message:

```cmd
ERROR in ./src/index.mjs 1:0-114
Module not found: Error: Can't resolve '.../node_modules/@babel/runtime/regenerator' in '...\src'
Did you mean 'index.js'?
BREAKING CHANGE: The request '.../node_modules/@babel/runtime/regenerator' failed to resolve only because it was resolved as fully specified
(probably because the origin is a '*.mjs' file or a '*.js' file where the package.json contains '"type": "module"').
The extension in the request is mandatory for it to be fully specified.
Add the extension to the request.
```
