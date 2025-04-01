const prompt = require('prompt-sync')();

let qtdePar = 0;
let qtdeImpar = 0
let somaPar = 0
let somaImpar = 0
for(let contador = 1; contador <= 5; contador++ ) {
let valor = Number(prompt('Digite o número: '));
if (valor == 0) {
    break;
}
 if (valor % 2 == 0) {
        qtdePar++
        somaPar = somaPar + valor;
    } else {
        qtdeImpar++;
        somaImpar = somaImpar + valor
    }
}
console.log(`voce digitou ${qtdePar} n° pares, somados resultou em ${somaPar}`);
console.log(`voce digitou ${qtdeImpar} n° ímpares, somados resultou em ${somaImpar}`);
