var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
    var number = num_1[_i];
    if (number === 1) {
        console.log("1st");
    }
    else if (number === 2) {
        console.log("2nd");
    }
    else if (number === 3) {
        console.log("3rd");
    }
    else {
        console.log("".concat(number, "th"));
    }
}
