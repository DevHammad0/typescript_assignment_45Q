"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one
False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
Object.defineProperty(exports, "__esModule", { value: true });
//Tests for equality and inequality with strings
let name2 = "Ali";
console.log("Is name == 'Ali'? I predict True.");
console.log(name2 == "Ali"); // true 
console.log("Is name2 != 'Ali'? I predict False.");
console.log(name2 != "Ali"); // false
//Tests using the lower case function
let name3 = "Fatima";
let name4 = "Aisha";
console.log("Is name4.toLowerCase() == 'fatima'? I predict True.");
console.log(name3.toLowerCase() == "fatima"); // true 
console.log("Is name3.toLowerCase() != 'aisha'? I predict False.");
console.log(name4.toLowerCase() != "aisha"); // false 
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age1 = 18;
let age2 = 21;
let age3 = 25;
console.log("Is age2 >= 21? I predict True.");
console.log(age2 >= 21); // true 
console.log("Is age3 <= 25? I predict True.");
console.log(age3 <= 25); // true 
console.log("Is age1 == 19? I predict False.");
console.log(age1 == 19); // false
console.log("Is age2 != 20? I predict True.");
console.log(age2 != 20); // true
//Tests using "and" and "or" operators
let country1 = "Pakistan";
let country2 = "India";
let language1 = "Urdu";
let language2 = "Hindi";
console.log("Is language1 == 'Urdu' && country1 == 'Pakistan'? I predict True.");
console.log(language1 == "Urdu" && country1 == "Pakistan"); // true 
console.log("Is language2 == 'Urdu' && country2 == 'India'? I predict True.");
console.log(language2 == "Urdu" && country2 == "India"); // false
console.log("Is language2 == 'Urdu' || country2 == 'India'? I predict True.");
console.log(language2 == "Urdu" || country2 == "India"); // true
//Test whether an item is in a array
let ages = [18, 21, 25, 30, 35, 40];
let search1 = 22;
let search2 = 18;
console.log("Is search1 in names? I predict False.");
console.log(ages.includes(search1)); // false 
console.log("Is search2 in names? I predict True.");
console.log(ages.includes(search2)); // true
//Test whether an item is not in a array
console.log("Is search1 in names? I predict False.");
console.log(!ages.includes(search1)); // true 
console.log("Is search2 in names? I predict True.");
console.log(!ages.includes(search2)); // false
