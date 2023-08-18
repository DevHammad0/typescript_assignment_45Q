function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`You have ordered a ${size} shirt with the message "${message}" on it.`);
  }
  
  // Making a large shirt and a medium shirt with the default message
  make_shirt();
  make_shirt("medium");
  
  // Making a shirt of any size with a different message
  make_shirt("small", "TypeScript is awesome!");
  