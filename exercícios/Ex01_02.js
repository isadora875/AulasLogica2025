const prompt = require('prompt-sync')();
let Inteiro = Number(prompt('qual é o numero inteiro?'));
let Sucessor = Inteiro + 1;
let Antecessor = Inteiro - 1;
console.log(`o numero é ${Inteiro} seu sucessor é ${Sucessor} seu antecessor é ${Antecessor}`);
