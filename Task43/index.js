"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magicians = ["David Copperfield", "Dynamo", "Penn & Teller", "David Blaine"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push(magician + " the Great");
    }
    return great_magicians;
}
var new_array = make_great(magicians);
// Calling original array
show_magicians(magicians);
// Calling modified array
show_magicians(new_array);
