var usernames2 = ["ali", "salman", "moin", "admin", "haris"];
// if test to make sure the list of users is not empty
if (usernames2.length > 0) {
    for (var _i = 0, usernames2_1 = usernames2; _i < usernames2_1.length; _i++) {
        var username = usernames2_1[_i];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// If the list is empty, printing the message We need to find some users!
else {
    console.log("We need to find some users!");
}
// Now removing all of the usernames from array and then testing
usernames2 = [];
if (usernames2.length > 0) {
    for (var _a = 0, usernames2_2 = usernames2; _a < usernames2_2.length; _a++) {
        var username = usernames2_2[_a];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(usernames2, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
