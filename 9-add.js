/* Write a script that prints a square
    The first argument is the size of the square
    If the first argument can’t be converted to an integer, print “Missing size”
    You must use the character X to print the square
    You must use console.log(...) to print all output
    You are not allowed to use var
    You must use a loop (while, for, etc.)
 */

// Define the add function
function add(a, b) {
  return a + b;
}

// Get the command-line arguments
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

// Call the function and print the result
console.log(add(a, b));
