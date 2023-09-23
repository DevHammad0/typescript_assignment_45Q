"use strict";
// function that takes a manufacturer, a model, and an optional object of keyword arguments
function createCar(manufacturer, model, options) {
    // car object with the manufacturer and model
    let car = { manufacturer, model };
    // If options are provided, adding them to the car object
    if (options) {
        for (let key in options) {
            car[key] = options[key];
        }
    }
    return car;
}
let myCar = createCar("Toyota", "Corolla", { color: "red", year: 2023 });
console.log(myCar);
