// 5-to_integer.js

// Get the first command-line argument.
// This will be a string, or 'undefined' if no argument is provided.
const firstArgument = process.argv[2];

// Attempt to convert the first argument to an integer.
// parseInt() will return a number if successful, or NaN if not.
const convertedNumber = parseInt(firstArgument);

// Use isNaN() to check if the conversion resulted in 'Not a Number'.
// This handles cases where the argument was missing (undefined) or
// was a string that couldn't be parsed into a number.
if (isNaN(convertedNumber)) {
  // If convertedNumber is NaN, it means the argument was not a valid integer.
  console.log("Not a number");
} else {
  // If convertedNumber is a valid number, print it in the required format.
  console.log(`My number: ${convertedNumber}`);
}