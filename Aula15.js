//Escopo de variáveis
//Variável global pode ser acessada em qaulquer lugar 
//Variável local só pode ser acessada dentro do bloco

//Variável local
function NomeEscola(){
     escola = 'SESI';
    console.log(`Valor dentro da função: ${escola}`);
}

var escola = 'SENAI';
console.log(`Valor fora da função: ${escola}`);
NomeEscola();
console.log(`Valor após a função: ${escola}`);

//Variável Global
var escola2 = 'SENAI';

function NomeEscola2(){
    escola2 = 'SESI';
   console.log(`Valor dentro da função: ${escola2}`);
}
console.log(`Valor fora da função: ${escola2}`);
NomeEscola();
console.log(`Valor após a função: ${escola2}`);

//Documentando funções
/**
 * Soma de dois numeros
 *@param {number} a - Primeiro número
 *@param {number} b - Segundo número
 *@returns {number}  - Soma dos dois números
*/
function Soma (a, b){
    return a + b;
}
Soma()






