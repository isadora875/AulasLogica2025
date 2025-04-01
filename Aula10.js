//Estrutura de laço de repetição While
const prompt = require('prompt-sync')();

let resposta = 'S';

while(resposta == 'S') {
    console.log('Você está dentro do bloco');
    resposta = prompt('Deseja continuar? S/N')
}
console.log('FIM');

let senhaSecreta = 'Senai'
let senhaDigitada
while (senhaSecreta != senhaDigitada) {
    console.log('Descubra a senha secreta!');
    senhaDigitada = prompt('qual a senha?')
}
console.log('FIM');

//Exemplo 3 - Executando um número determinado de vezes
let contador = 1;
while (contador <=5) {
    console.log(`O contador está no n° ${contador}`);
    contador = contador + 1;
}



//Exemplo 4 
//Posso deixar meu laço executando sem uma condição específica, apenas
// com while (true) e encerrar o loop com o comando break
let total = 0;
let qtde = 0;

while (true) {
    let valor = Number(prompt('Digite o valor do produto (0 para encerrar): '))

    if (valor == 0) {
        break;
    } else {
        total = valor + total;
        qtde++;
    }
}

console.log(`Você comprou no total ${qtde} produtos`);
console.log(`valor total da compra R$ ${total.toFixed(2)}`);

//exercício 1

let Contador = 10;
while (Contador >=0) {
    console.log(`O contador está no n° ${Contador}`);
    Contador--
}

//exercício 2

let Contador1 = 2;
while (Contador1 <=20) {
    if (Contador1 % 2 == 0)
    console.log(`O contador está no n° ${Contador1}`);
    Contador1++
}

//Exercício 3

let totalPar = 0;
let totalImpar = 0
let Qtde = 2;

while (true) {
    let valor = Number(prompt('Digite o número ou 0 para parar: '));

    if (valor == 0) {
        break;
    }else {
        if (totalPar % 2 == 0){
            totalPar += valor
        }else{
            totalImpar += valor
        }
    }
}
console.log(`A soma do n° par é ${totalPar} `);
console.log(`A soma do n° ${totalImpar}`);

//Exercício 4 
