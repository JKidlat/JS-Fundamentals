// 10-factorial.js

// Define the recursive factorial function.
// It takes one parameter, 'n'.
function factorial(n) {
  // Base Case 1: If n is NaN (Not-a-Number), return 1 as per requirement.
  // This covers cases where no argument is provided or the argument is non-numeric.
  if (isNaN(n)) {
    return 1;
  }

  // Base Case 2: If n is 0 or 1, the factorial is 1.
  // This also implicitly handles negative numbers by returning 1,
  // as factorials are typically defined for non-negative integers.
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive Step: For n > 1, factorial(n) is n multiplied by factorial(n - 1).
  return n * factorial(n - 1);
}

// Get the first command-line argument and convert it to an integer.
// If no argument is provided or it's not a number, parseInt will return NaN.
const num = parseInt(process.argv[2]);

// Call the factorial function with the parsed number and print the result.
console.log(factorial(num));