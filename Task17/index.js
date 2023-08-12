/*Shrinking Guest List: You just found out that your new dinner table won’t arrive
in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message
saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your
list. Each time you pop a name from your list, print a message to that person
letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them
know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your
 list to make sure you actually have an empty list at the end of your program.*/
var guests2 = ["Saad", "Haris", "Fatima", "Huma"];
var canceledGuest1 = guests2.pop();
guests2.unshift("Sareena");
guests2.push("Ali", "Amir");
guests2.splice(2, 0, "Moin");
console.log("Hey Guys due to some reasons I can only invite two people for dinner");
for (var i_1 = guests2.length - 1; i_1 > 1; i_1--) {
    var n = guests2.pop();
    console.log("Sorry ".concat(n, " that I can't invite you for dinner"));
}
for (var i = 0; i < guests2.length; i++) {
    console.log("Hey ".concat(guests2[i], ", you are still invited for dinner"));
}
console.log("Hey guys ".concat(canceledGuest1, " can't make it this time :)"));
for (var i_2 = 0; i_2 <= guests2.length; i_2++) {
    guests2.pop();
}
console.log(guests2);
