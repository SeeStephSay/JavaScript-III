/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
-called in the global scope
* 2. Implicit Binding
-called as a method (i.e. obj.func())
* 3. Explicit Binding
- called by call(), apply(), or bind()
* 4. New Binding
-called by the new keyword
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function car(){
    console.log(this.sound);
}
    
const sound = "vroom";
    
sound();

// Principle 2

// code example for Implicit Binding

let myCar = {
    name: "Maserati",
    sound: "vroom",
    car: function(){
    console.log(this.sound);
    }
};
    
myCar.car();

// Principle 3

// code example for New Binding

function Car(saying){
this.sound = saying;
}
    
let myCar = new Car("I am BumbleBee!");
    
console.log(myCar.sound);
    
// Principle 4

// code example for Explicit Binding

function car(){
    console.log(this.sound);
}

let myCar = {
    name: "Maserati",
    sound: "vroom",
};

car.call(myCar);