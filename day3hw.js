//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function favorites(randomObj){
    for(let key in randomObj){
    if(randomObj[key] instanceof Array){
        randomString = `My favorite ${key}s are`
        for(let food of randomObj[key]){
            if(food instanceof Object){
                for(let key1 in food){
                    console.log(`My favorite ${[key]} from ${key1} is ${food[key1]}`)
                }
            }else{
                randomString += (" " + food)
            }
        }console.log(randomString)
    }else{
       console.log(`My favorite ${key} is ${randomObj[key]}!`)
    }
}
}

console.log(favorites(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age){
        this.name = name;
        this.age=age;
    }
// Use an arrow to create the printInfo method
    printInfo(){
        return `This person's name is ${this.name} and they are ${this.age} years's old!`
    }
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    increaseAge(){
        this.age++
        return `${this.name} is now one year older: ${this.age} years old`
    }
}

let kevin = new Person('Kevin',100);
let trey = new Person('Trey',5);

console.log(kevin.printInfo())
console.log(trey.printInfo())

console.log(trey.increaseAge())
console.log(trey.increaseAge())
console.log(trey.increaseAge())






// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const greaterThanTen = (randomString) => {
    return new Promise(
        (resolve,reject)=>{
            if(randomString.length >= 10){
                resolve(true)
            }else{
                reject(false)
            }
        }
    )
}

greaterThanTen("Hello").then(
    (result)=>{
        console.log("Big word")
    }).catch(
        (error)=>{
            console.log("Small Number")
        }
    )


