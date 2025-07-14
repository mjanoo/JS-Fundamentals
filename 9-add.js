/* Write a script that prints a square
    The first argument is the size of the square
    If the first argument can’t be converted to an integer, print “Missing size”
    You must use the character X to print the square
    You must use console.log(...) to print all output
    You are not allowed to use var
    You must use a loop (while, for, etc.)
 */

   const agrCount = process.argv;
const firstArg = process.argv[2];

let num = Number(firstArg);

if (!isNaN(num)) {
    for (let i = 0; i < num; i++) {
        let row = ""; // عملنا دا عشان نعرف ان روو دا سترينج 
        for (let j = 0; j < num; j++) {
        row += "X"; // عملنا دى عشان مش هنقدر نطبع كل عدداكس جمب بعض فى سطر واحد 
        }
        console.log(row); // فبنضطر نخلى مجموعة اكس مع بعض سطر واحد و نطبع السطر على بعضه
    }
}
else{
    console.log("Missing size");
}