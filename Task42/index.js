"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["David Copperfield", "Dynamo", "Penn & Teller", "David Blaine"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);
show_magicians(magicians);
