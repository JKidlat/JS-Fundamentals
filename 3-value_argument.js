// 3-value_argument.js

// Access the potential first user-provided argument.
// If no argument is provided, process.argv[2] will be 'undefined'.
const firstArgument = process.argv[2];

// Use an if-else statement to check if 'firstArgument' is undefined.
// The '===' operator performs a strict equality comparison,
// checking both value and type.
if (firstArgument === undefined) {
  // If firstArgument is undefined, it means no argument was passed by the user.
  console.log("No argument");
} else {
  // If firstArgument is not undefined, it means an argument was found.
  // Print the value of that argument.
  console.log(firstArgument);
}