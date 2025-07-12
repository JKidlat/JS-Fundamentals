// 6-multi_languages_loop.js

// 1. Create a constant array of strings with the required messages.
const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// 2. Use the join() method to combine all array elements into a single string,
//    using a newline character ('\n') as the separator between each element.
//    This automatically handles placing newlines between lines without an if/else.
const outputString = messages.join('\n');

// 3. Use a single console.log() to print the entire combined string.
console.log(outputString);