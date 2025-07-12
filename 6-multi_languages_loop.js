// 6-multi_languages_loop.js

// 1. Create a constant array of strings with the required messages.
const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// 2. Initialize an empty string that will hold all the combined messages.
let outputString = "";

// 3. Use a for loop to iterate through each message in the array.
//    'i' will be our index, starting at 0 and going up to (but not including) messages.length.
for (let i = 0; i < messages.length; i++) {
  // Append the current message from the array to our outputString.
  // Add a newline character ('\n') after EACH message.
  // This will result in an extra '\n' at the very end, which we'll remove later.
  outputString += messages[i] + "\n";
}

// 4. Remove the last newline character from the outputString.
//    The slice(0, -1) method creates a new string that is a copy of outputString
//    from the beginning (index 0) up to, but not including, the last character (index -1).
const finalOutput = outputString.slice(0, -1);

// 5. Use a single console.log() to print the entire combined string without the extra newline.
console.log(finalOutput);