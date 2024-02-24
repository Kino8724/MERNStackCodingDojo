// Problem 1
const isAdult = age => (age >= 18 ? "You are good to go!" : "Sorry, you must be 18 or older")
console.log(isAdult(7))
console.log(isAdult(22))
// Problem 2
const getJacket = isRaining => (isRaining ? "Get your rain jacket" : "No rain on todays forecast")
console.log(getJacket(true))
console.log(getJacket(false))
// Problem 3
const isEven = num => (num % 2 == 0 ? "Thats an even number" : "Thats an odd number")
console.log(isEven(2))
console.log(isEven(3))
// Problem 4
const compareNums = (numOne, numTwo) => (numOne > numTwo ? `${numOne} is greater than ${numTwo}` : `${numOne} is less than ${numTwo}`)
console.log(compareNums(2, 3))
console.log(compareNums(3, 2))
