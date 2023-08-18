let current_users = ["john", "alice", "bob", "carol", "david"];

let new_users = ["eric", "fiona", "john", "carol", "george"];

// Looping through the new_users list to see if each new username has already been used
for (let new_user of new_users) {
  let lower_new_user = new_user.toLowerCase();
  if (current_users.includes(lower_new_user)) {
    console.log(`The username ${new_user} is already taken. Please enter a new username.`);
  }else {
    console.log(`The username ${new_user} is available.`);
  }
}
