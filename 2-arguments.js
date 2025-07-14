/* Write a script that prints a message depending of the number of arguments passed:
If no arguments are passed to the script, print “No argument”
If only one argument is passed to the script, print “Argument found”
Otherwise, print “Arguments found”
You must use console.log(...) to print all output
You are not allowed to use var */
 
const { argv } = require('node:process');
if (argv.length <= 2) {
  console.log('No argument');
}
else if (argv.length === 3) {
  console.log('Argument found');
}
else {
  console.log('Arguments found');

