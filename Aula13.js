const prompt = require('prompt-sync')();
//Alteração sobe nossos vetores (arrays / listras)

//Vetor          0        1          2        3
let frutas = ['Maça', 'Banana', 'Abacaxi', 'Uva'];
//Para iterar sobre um vetor, utilizamos o for
for (let x = 0; x < frutas.length; x++) {
    console.log(`A fruta da posição ${x} é ${frutas[x]}`);
}
console.log('Fim');


//Iterando sobre uma lista usando o for of
let listaJogadores = ['Pelé', 'Maradona', 'Messi', 'Ronaldo'];
for (let jogador of listaJogadores){
    console.log(`O jogador é ${jogador}`);
}

// Vetor cinco números 
let listaNumeros = [4, 5, 8, 3, 2];
for (let numero of listaNumeros){
    console.log(`O número é ${numero}`);
}

// Verificando se um element existe em um array usando includes()
let vogais = ['a', 'e', 'i', 'o', 'u'];
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p'];
let numeros = ['1','2','3', '4', '5', '6', '7', '8', '9'];

let letraParaVerificar = prompt('Digite uma letra: ');
if (vogais.includes(letraParaVerificar.toLowerCase())) {
console.log(`A letra ${letraParaVerificar} é uma vogal`);
} else if (consoantes.includes(letraParaVerificar.toLowerCase())) {
    console.log(`A letra ${letraParaVerificar} é uma consoante`);
} else if (numeros.includes(letraParaVerificar.toLowerCase())){
    console.log(` ${letraParaVerificar} é um numero`);
}else{
    console.log(`a letra ${letraParaVerificar} não é uma letra`);
}

//obtendo a posição de um item em um array usando o for of e a função entries()
//    posição         0        1          2       3
let listaFrutas = ['Maça', 'Banana', 'Abacaxi', 'Uva'];
for (const [pos, fruta] of listaFrutas.entries()) {
    console.log(`A fruta da posição ${pos} é ${fruta}`);
}

//separando uma string utilizando o split()
let produtos = 'Celular,Notebook,TV,Tablet,Monitor';
let listaProdutos = produtos.split(',');
console.log(produtos);
console.log(listaProdutos);

//Strings são lista (vetores / arrays) de caracteres
//            01234
let escola = 'SENAI';  //['S' , 'E', 'N', 'A', 'I']
console.log(escola[0]); //S
//Utilizando o for of exibir a palavra da seguinte forma
for (let letra of escola) {
    console.log(letra);    
}



