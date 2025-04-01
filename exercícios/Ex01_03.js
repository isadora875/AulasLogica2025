const prompt = require('prompt-sync')();

let numero = Number(prompt('Qual é o número? '));
let dobro = (numero * 2);
let triplo = (numero * 3);
let elevado = (numero ** 3);
console.log(`O número é ${numero} o seu dobro é ${dobro} o seu triplo é ${triplo} o seu valor elevado ao cubo é ${elevado}`);
