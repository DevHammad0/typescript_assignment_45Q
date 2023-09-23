"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["David Copperfield", "Dynamo", "Penn & Teller", "David Blaine"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(magician + " the Great");
    }
    return great_magicians;
}
let new_array = make_great(magicians);
// Calling original array
show_magicians(magicians);
// Calling modified array
show_magicians(new_array);
