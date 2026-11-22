# Recursion Tests - The Odin Project

## Fibonacci

1. Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
2. Write another function fibsRec which solves the same problem recursively.
3. Test both versions of your functions by passing in various lengths as arguments.

## Merge Sort

Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

Test Examples:

    mergeSort([]) → []
    mergeSort([73]) → [73]
    mergeSort([1, 2, 3, 4, 5]) → [1, 2, 3, 4, 5]
    mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) → [0, 1, 1, 2, 3, 5, 8, 13]
    mergeSort([105, 79, 100, 110]) → [79, 100, 105, 110]

## NPM Packages and Scripts

1. Install dependencies:

```bash
npm install
```

---

2. Available npm run scripts:

Run Jest tests:

```bash
npm run test
```

Run Jest watch:

```bash
npm run watch
```

Run Lint:

```bash
npm run lint
```

Format with Prettier:

```bash
npm run format
```

## Runing Functions with Node REPL

1. Navigate to the folder containing the .js file you are currently working with
2. When in that file location run:

```bash
node
```

3. In Node's console, if using `export default`, run:

```javascript
> let funcName = (await import(`./fileName.js?t=${Date.now()}`)).default;

// If you update the .js file, run this again to load the latest version:
> funcName = (await import(`./fileName.js?t=${Date.now()}`)).default;
```

If using named exports (`export`), run:

```javascript
> let { funcName1, funcName2 } = await import(
  `./fileName.js?t=${Date.now()}`
);

// If you update the .js file, run this to reload the functions:
> ({ funcName1, funcName2 } = await import(
  `./fileName.js?t=${Date.now()}`
));
```

4. You can run the imported functions normally in the console:

```javascript
> funcName("parameters"); // Prints the function's return value
```

5. To exit, use Node's:

```javascript
> .exit
```
