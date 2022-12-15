// Conversão de tipos
/*
    * Para number - Number()
    * Para string - String()
    * Para boolean - Boolean()
 */

console.log("Number(\"50\")", "- " + Number("50")); // number 50
console.log("Boolean(\" \")", "- " + Boolean(" ")); // boolean true
console.log("Boolean(1)", "- " + Boolean(1)); // boolean true
console.log("Boolean(\"\")", "- " + Boolean("")); // boolean false
console.log("Boolean(0)", "- " + Boolean(0)); // boolean false
console.log("String(50)", "- " + String(50)); // string "50"

/* Conversão com !! (Double Not) */
console.log("\n--- Conversão para Boolean com !! (Double Not) ---");
console.log(!!" "); // true
console.log(!!1); // true
console.log(!!""); // false
console.log(!!0); // false
console.log(!!null); // false
console.log(!!undefined); // false