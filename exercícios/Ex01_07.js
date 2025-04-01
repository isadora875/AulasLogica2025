const prompt = require('prompt-sync')();

let dinheiro = Number(prompt('Quanto dinheiro você tem na carteira? '));
let dolar = (dinheiro * 5.79);
console.log(`A quantidade de dinheiro que você tem na carteira em dolar é de ${dolar}`);

