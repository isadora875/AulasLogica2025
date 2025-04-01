const prompt= require ('prompt-sync') ();

let num1 = parseInt(prompt('digite o num1 '));
let num2 = parseInt(prompt('digite o num2 '));
if (num1 == num2){
    console.log('igual');
} else {
    console.log('diferente')
}
