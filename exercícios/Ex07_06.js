const prompt = require('prompt-sync')();

// Receba uma palavra do usuário e calcule quantas vogais há nesta palavra.

let palavra = prompt('Digite uma palavra: ')
let vogal = ['a','e', 'i', 'o', 'u']
let vogais = 0;
if (palavra.slice(1)){
    console.log()
    vogais++
} console.log(`Tem ${vogais} vogais`)


