// 4-concat.js

// Access the first user-provided argument (at index 2)
// If not provided, this will be 'undefined'.
const firstArg = process.argv[2];

// Access the second user-provided argument (at index 3)
// If not provided, this will also be 'undefined'.
const secondArg = process.argv[3];

// Use a template literal to format the output string.
// If firstArg or secondArg are undefined, they will be printed as "undefined".
console.log(`${firstArg} is ${secondArg}`);