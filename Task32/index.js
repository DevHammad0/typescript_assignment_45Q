var current_users = ["john", "alice", "bob", "carol", "david"];
var new_users = ["eric", "fiona", "john", "carol", "george"];
// Looping through the new_users list to see if each new username has already been used
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var lower_new_user = new_user.toLowerCase();
    if (current_users.includes(lower_new_user)) {
        console.log("The username ".concat(new_user, " is already taken. Please enter a new username."));
    }
    else {
        console.log("The username ".concat(new_user, " is available."));
    }
}
