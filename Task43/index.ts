let magicians: string[] = ["David Copperfield", "Dynamo", "Penn & Teller", "David Blaine"];

function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];
  for (let magician of magicians) {
    great_magicians.push(magician + " the Great");
  }
  return great_magicians;
}

let new_array: string[] = make_great(magicians);

// Calling original array
show_magicians(magicians);

// Calling modified array
show_magicians(new_array);



export{}