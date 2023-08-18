let magicians: string[] = ["David Copperfield", "Dynamo", "Penn & Teller", "David Blaine"];

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
}
  
function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " the Great";
  }
}

make_great(magicians);

show_magicians(magicians);


export{}