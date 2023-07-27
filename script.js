var car = {};
car.color = "grey";
car.mileage = 98765;

// console.log(car);

car.turnKey = function() {
    console.log("The engine is running")
}

// console.log(car);
// car.turnKey();

car.lightsOn = function() {
    console.log("The lights are on")
}

console.log(car);
car.turnKey();
car.lightsOn();