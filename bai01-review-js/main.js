//1. functions declaration and call
function helloWorld() {
    console.log("Hello world")
};

//call functions
helloWorld();

//function with parameters
function helloWorld2(a, b) {
    return a + b;
};
helloWorld2(5, 10);

//call function with parameters
function helloWorld3(userName) {
    console.log("Hello " + userName);
};
helloWorld3("Tu nguyen");

//function with default parameters
function helloWorld4(c = 1, d) {
    return c * d;
}
let result = helloWorld4(undefined, 10);
console.log(result);


//=====================================
//2. functions expression
let variableFunction = function (a, b) {
    return a + b;
}
console.log(variableFunction(5, 10));

//3. arrow function
let arrowFunction = (a, b) => {
    return a + b;
}
console.log(arrowFunction(5, 10));

//give two numbers a and b, calculate the sum of a and b, after that, calculate  
// the product of a and b, then return the sum of the two results
let calculate = (a, b) => {
    let sum = a + b;
    let product = a * b;
    return sum + product;
}
let resultCalculate = calculate(5, 10);
console.log(resultCalculate);


// function ten_ham(parameterss){
//     // body of function
//     return someValue;
// }
// console.log(ten_ham("Hello world"));

// let ten_ham2 = function(parameterss){
//     // body of function
//     return someValue;
// }
// console.log(ten_ham2("Hello world"));

// let ten_ham3 = (parameterss) => {
//     // body of function
//     return someValue;
// }
// console.log(ten_ham3("Hello world"));


// return a object
let person = (name, age) => {
    return {
        "Full name": name,
        "Age": age
    }
}
console.log(person("Tu Nguyen", 18));

let person2 = (name, age) => ({
    "Full name": name,
    "Age": age
})
console.log(person2("Tu Nguyen", 18));