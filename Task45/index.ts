// Defining a type for the car object
type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary number of keyword arguments
  };
  
  // function that takes a manufacturer, a model, and an optional object of keyword arguments
  function createCar(manufacturer: string, model: string, options?: Record<string, any>): Car {
    // car object with the manufacturer and model
    let car: Car = { manufacturer, model };
  
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
  