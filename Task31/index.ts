
let usernames2 = ["ali", "salman", "moin", "admin", "haris"];

// if test to make sure the list of users is not empty
if (usernames2.length > 0) {
  for (let username of usernames2) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    }else {
      console.log(`Hello ${username}, thank you for logging in again.`);
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
  for (let username of usernames2) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    }else {
      console.log(`Hello ${usernames2}, thank you for logging in again.`);
    }
  }
}
else {
  console.log("We need to find some users!");
}



