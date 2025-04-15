const prompt = require('prompt-sync')();

//Crie uma lista com os números de 1 a 10 e imprima cada número um abaixo do outro.

let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let numero of listaNumeros){
    console.log(`O número é ${numero}`);
}