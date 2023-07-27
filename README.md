# Object Methods

This repository demonstrates how to design objects as combinations of data and functionality.

Objects consists of key-value pairs, known as properties.

You can add new key-value pairs to existing objects using the dot-notation and the assignment operator.

~~~
var car = {};
car.color = "grey";
~~~

Properties can take many data types, including functions.

~~~
var car = {};

car.color = "grey";

// Add a method to the car object so that it can be called as car.turnkey()

car.turnkey = function() {
    console.log("engine running");
}
~~~

If the function is a property of an object, it is then referred to as a method.

This is a function that can be accessed only through the JavaScript object that it is a member of. For example, the log method, which belongs to the console object, can be accessed through the console object.


To create an object using the constructor function

~~~
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
~~~

Next, you can add a method to my car object. And this method, when called, will output some text to the console.

You can do this by adding another property to my car object. A method is just another property of the car object. It's just another key-value pair that the car object holds.

What's unique is that the value being assigned to it is a function

~~~
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
console.log(car)
~~~

You can inspect my car object again by typing its name into the console log method. It displays that the car object contains 3 properties: the color property, the mileage property and the turnTheKey property.

Key-value pairs in an object are referred to simply as properties. However, if you want to differentiate between properties that can be executed, then such properties are referred to as methods.

~~~
// Example of adding properties and methods to an object

var car = {};
car.color = "grey";
car.mileage = 98765;
console.log(car);

car.turnTheKey = function() {
    console.log("The engine is running");
}

car.lightsOn = function() {
    console.log("The lights are on");
};

console.log(car);
car.turnTheKey();
car.lightsOn();
~~~