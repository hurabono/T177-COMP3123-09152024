//T177 101083889 Heesu Cho 
// COMP3123 lab exercise week2


// Exercise 1:
// Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals 
//and for..of



const greeter = (myArray, counter) =>{
    const greetTest = "hello";

    for ( let i = 0; i < counter; i++ ){
        for (const index of myArray){
            console.log(`${greetTest} ${index}`);
        }
    }
}

greeter(['Grandy Savage', 'Ric Flair', 'Hulk Hogan'],3);


// function gretter (myArray, counter){
//     const greetTest = "Hello";

//     for ( const index of myArray  ){

//         console.log( `${greetTest} ${index}`);
//     }
// }

// gretter(['Grandy Savage', 'Ric Flair', 'Hulk Hogan'],3);



//Exercise 2: 
//Using destructuring assignment syntax and the spread operator, write a function will capitalize the 
// first letter of a string.


const capitalize = (string)=>{
    
    const[first] = string;

    // Use the toUpperCase function to capitalize only the first letter, and use slice(1) 
    //to convert the rest of the string starting from the second character to lowercase.
    return first.toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJS'));

// output should be Foobar, Node js



// Exercise 3: 
// Using array.proto.map create function to use the capitalize method in Exercise 2 to uppercase 
// the first character of each Color in the following array..

const colors = ['red', 'green', 'blue' ]

//Like in Exercise 2, but using array, and use a function that capitalizes the first letter.

const capitalizeArr = (string) =>{
    const[firstArr] = string;
    return firstArr.toUpperCase() + string.slice(1).toLowerCase();
}


// Use the map() function to create a new array with a capitalized first letter.”
const capitalizedColors = colors.map(color => capitalizeArr(color));
console.log(capitalizedColors);
// output should be ['Red', 'Green', 'Blue' ]



//Exercise 4: 
//Using array.proto.filter create a function that will filter out all the values of the array that are less 
//than twenty.

var values = [1, 60, 34, 30, 20, 5]

// using the filter() array function, and create a new array that contains only the numbers less than to 20 from the values array.
const lessThan20 = values.filter( value => value < 20 );

console.log(lessThan20)
//output has to be [1,5]



// Exercise 5: 
// Using array.proto.reduce create calculate the sum and product of a given array.

var array = [1,2,3,4]

// code here
//Make the sum and multiplication to product of 1, 2, 3, 4 in the arrangement

let sum = 0;
let product = 1; // The number of products starts with one

for(const value of array ){
    sum += value;
    product *= value;
}


console.log(sum);
console.log(product);
// output 10, 24



//Exercise 6: 
// Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives 
// from Car Class. The parameters for the Car class is the model and year. The parameters for the 
// subclass is the model, year and balance.
// Use the super key word in the Sedan subclass to set the model and name in base Car 
// constructor.

//make Car class 
class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model}engine ${this.year}`;
    }
}


//using extends to create a Sedan subclass which derives from Car Class.

class Sedan extends Car {
    constructor(model, year, balance){
        super(model, year);
        this.balace = balance;
    }

    info(){
        return `${this.model} has a balance of $ ${this.balace.toFixed(2)}`;
    }
}


const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

//sub class - extends Car super class
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());

// output 
// Model: Pontiac Firebird engine 1976
// Volvo SD has a balance of $30000.00
