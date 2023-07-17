// objects - a real world entity
// ~ key/value pais called as properties
// ~ if a key's values are functions then they are called methods
// ~  dot notation to access properties


// creating an object
const robot = {
    name: "Eila",
    lastName: "johnsons",
    age: function myAge() {
        console.log("My age is 21");
    },
    animal: function() {
        console.log("My favourite animal is tiger");
    },
    job() {
        console.log("I work as Software Engineer");
    },
    colour: () => {
        console.log("My favourite color is blue");
    }
}
console.log(robot);

// robot.myAge(); -- gives error
robot.age();