/* Write a script that computes and prints a factorial
    The first argument is integer (argument can be cast as integer) used for computing the factorial
    Factorial of NaN is 1
    You must do it recursively
    You must use a function
    You must use console.log(...) to print all output
    You are not allowed to use var
 */

    // Define the recursive factorial function
function factorial(n) {
  if (isNaN(n)) {
    return 1;
  }
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Get the input from the command line argument
const input = parseInt(process.argv[2]);

// Call the function and print the result
console.log(factorial(input));
