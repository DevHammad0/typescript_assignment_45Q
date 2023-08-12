/*More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your
 program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 
• Add one new guest at the end of your array
to the end of your list. 
• Print a new set of invitation messages, one for each
 person in your list. */


var guests2 = ["Saad", "Haris", "Fatima", "Huma"];
let canceledGuest = guests2.pop();
guests2.unshift("Sareena")
guests2.push("Ali","Amir")
guests2.splice(2,0,"Moin")


for (var i = 0; i < guests2.length; i++) {
    console.log("Hello ".concat(guests2[i], ", We would be delighted if you could join us for dinner!"));
}

console.log(`Hey guys ${canceledGuest} can't make it this time :)`);
console.log("Good New! We found a bigger dinning table wohoo!");



