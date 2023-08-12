//14
/*Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people
you’d like to invite to dinner. Then use your list to print a message
 to each person, inviting them to dinner.*/
var guests = ["Saad", "Haris", "Fatima", "Huma"];
for (var i = 0; i < guests.length; i++) {
    console.log("Hello ".concat(guests[i], ", We would be delighted if you could join us for dinner!"));
}
