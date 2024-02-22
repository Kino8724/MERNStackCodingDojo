// Problem 1
// Why did the code produce that output? If applicable, how would you get the index value that did not output?
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // predict: "Tesla"
console.log(otherRandomCar) // predict: "Mercedes"
// It output that because 'randomCar' is calling index 0 and the second one goes to index 1 with the comma. If we wanted 'Honda' then we would do 2 commas i.e. [,,otherOtherRandomCar] = cars

// Problem 2
// Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName); // predict: 'Elon'
console.log(employeeName); //predict: ReferenceError
// You would need to get rid of line 21 or to not change the name when initializing the variable

// Problem 3
// Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // '12345'
console.log(hashedPassword); // Undefined
// I would change it by adding a password key:value inside of person

// Problem 4
// Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;// 2
const [,,,second] = numbers;// 5
const [,,,,,,,,third] = numbers;// 2
const [,,,,fourth] = numbers;// 6
//Predict the output
console.log(fourth);
console.log(first === second);// false
console.log(first === third);// true

// Problem 5
// Why did the code produce that output? Console.log the last value in the secondKey property's array.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // 'value'
const { secondKey } = lastTest; // [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; // 5
//Predict the output
console.log(key);// 'value'
console.log(secondKey);// [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // 1
console.log(willThisWork); // 5
console.log(secondKey[5]); // 3

// Problem 6
// First, how many scopes does the following code block contain? Define each scope and guess what the output will be.
var beatles = ['Paul', 'George', 'John', 'Ringo']; // global scope: 1
function printNames(names) { //function scope: 2
  function actuallyPrintingNames() { //function scope: 3
    for (var index = 0; index < names.length; index++) { // for loop scope: 4
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);
// The output will print the names in the list and its index then it will print the final name and its index [after running I see the index is one more due to the iteration at the end of the loop]

// Problem 7
// Why did the code produce that output?
 function actuallyPrintingNames() {
  for (let index = 0; index < names.length; index++) {
    let name = names[index];
    console.log(name + ' was found at index ' + index);
  }
  console.log('name and index after loop is ' + name + ':' + index);
}     
// I think it will do nothing because the function is never called[but if it did then it would error]

// Problem 8
// Why did the code produce that output? Explain the output, including any possible errors and why they occurred. If there are no errors, explain the justification for each keyword used to declare variables.
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index]; // this will get one name on the list based on the index
      console.log(name + ' was found at index ' + index); // this will log each name and its index
    }
  }
  actuallyPrintingNames(); //calls the function 
  }
} // this will cause a syntax error
printNames(beatles);

// Problem 9
// Why did the code produce that output? Explain why each console.log looks the way it does.
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) // true
console.log(planet === planetCopy) // false, this is because it is a deep copy, meaning they are not the same in terms of where they are in memory and hold "different" values


