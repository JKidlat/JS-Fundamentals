// 7-multi_c.js

// Get the first command-line argument and attempt to convert it to an integer.
const x = parseInt(process.argv[2]);

// Check if 'x' is not a number (NaN)
// This covers cases where no argument is provided, or the argument is not a valid number string.
if (isNaN(x)) {
  console.log("Missing number of occurrences"); // First allowed console.log
} else if (x > 0) {
  // Only proceed if 'x' is a valid positive integer.
  // This handles the case where x is 0 or negative (printing nothing).

  let outputString = ""; // Initialize an empty string to build our output

  // Loop 'x' times to append "C is fun" followed by a newline.
  for (let i = 0; i < x; i++) {
    outputString += "C is fun\n";
  }

  // Remove the trailing newline character from the last "C is fun".
  // The slice(0, -1) method creates a new string that is a copy of outputString
  // from the beginning (index 0) up to, but not including, the last character (index -1).
  const finalOutput = outputString.slice(0, -1);

  console.log(finalOutput); // Second allowed console.log
}
// If x is 0 or negative, the 'else if (x > 0)' condition is false,
// and no 'else' block is present, so nothing is printed, fulfilling that requirement.