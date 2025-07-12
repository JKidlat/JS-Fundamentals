// 8-square.js

// Get the first command-line argument and attempt to convert it to an integer.
const size = parseInt(process.argv[2]);

// First, validate the input for 'size'.
// If 'size' is not a number (NaN)
if (isNaN(size)) {
  console.log("Missing size");
} else if (size > 0) {
  // If 'size' is a valid positive integer, proceed to draw the square.
  // Outer loop for rows: This loop will run 'size' times.
  for (let i = 0; i < size; i++) {
    let row = ''; // Initialize an empty string for the current row

    // Inner loop for columns: This loop will run 'size' times for EACH row.
    // It builds the string for one row.
    for (let j = 0; j < size; j++) {
      row += 'X'; // Add an 'X' to the current row string
    }
    // After the inner loop completes, 'row' now contains 'size' number of 'X's.
    console.log(row); // Print the completed row. console.log adds a newline automatically.
  }
}
// If size is 0 or negative, the 'else if (size > 0)' condition is false,
// and no 'else' block is present, so nothing is printed, fulfilling that requirement.