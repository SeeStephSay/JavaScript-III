/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window Binding - The window/global object is the default when none of the other rules apply, unless you use strict mode, in which case, will prevent window binding from breaking our code, but it will return 'undefined'. Strict mode basically means "don't break the rules."

* 2. Implicit Binding - When the function is invoked, 'this' refers to what's to the left of the dot. Applies to objects with methods, and is the most common type.

* 3. Explicit Binding - Use call, apply, or bind to explicitly tell the JavaScript engine to set 'this' to point to a certain value. Call passes arguments one-by-one. Apply passes additional arguments in as arrays. In both instances, the first argument tells us what 'this' is. Also, both call and apply can be used to invoke a function immediately. Bind is used to create a new function that is permanently bound to a 'this' value. 

* 4. New Binding - Using the 'new' keyword constructs a new object, and 'this' points to it. It is best practice to capitalize the Constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function knightsOfNiWindow() {
	console.log(this);
}
knightsOfNiWindow();

// Principle 2
// code example for Implicit Binding

const knightsOfNi = {
	name   : 'The Knights Who Say Ni',
	phrase : 'Ni! Ni! Ni!',
	say    : function() {
		console.log(`${this.name} are the keepers of the sacred words "Ni", "Peng", and "Neee-Wom"!`);
	},
};
knightsOfNi.say();

// Principle 3
// code example for Explicit Binding

function Alien(attributes) {
	this.tool = attributes.tool;
	this.homePlanet = attributes.homePlanet;
	this.anatomy = attributes.anatomy;
}

Alien.prototype.from = function() {
	return `I'm the only remaining being from ${this.homePlanet}`;
};

function TimeLord(doctorAttributes) {
	Alien.call(this, doctorAttributes); //This is the explicit binding.
	this.enemy = doctorAttributes.enemy;
}
TimeLord.prototype = Object.create(Alien.prototype); //This is the explicit binding.
TimeLord.prototype.catchPhrase = function() {
	return `I'm gonna wipe every last stinking ${this.enemy} outta the sky!`;
};

// Principle 4
// code example for New Binding

const theDoctor = new TimeLord({
	//This is the new binding.
	tool       : 'Sonic Screwdriver',
	homePlanet : 'Gallifrey',
	anatomy    : 'Has two hearts.',
	enemy      : 'Dalek',
});

console.log(theDoctor.from());
console.log(theDoctor.catchPhrase());
