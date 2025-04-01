const prompt = require('prompt-sync')();

let metros = Number(prompt('Digite um número em metros: '));
let centimetros = (metros * 100);
let milimetros = (metros * 1000);
let km = (metros / 1000);
console.log(`O valor do n° é de ${metros} convertido para centimetros é ${centimetros} convertido para milimetros é ${milimetros} convertido para km é ${km}`);

