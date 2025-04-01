const prompt = require('prompt-sync')();
//Criando nossa primeira variável
//Uma variável serve para armazenar uma informação/valor
// O memória crie um espaço com o nome curso e receba o valor 'Desenvolvimento de Sistemas
var curso = 'Desenvolvimento de Sistemas';

console.log('curso'); //Para imprimir uma variável, não se coloca entre ""
console.log(curso); // Jeito correto de usar uma variável
console.log('curso', curso);

var idade = 15; //inteira // integer
var temperatura = 24.5; //real // float
var nome = 'Isadora'; //string

console.log('Olá, ', nome, ' você tem ', idade, ' anos' )
console.log('está cursando ', curso, ' hoje faz', temperatura, '°C');

console.log('Olá, ' + nome + ' você tem ' + idade + ' anos' )
console.log('está cursando ' + curso + ' hoje faz' + temperatura + '°C');

//Template String
//Utilizo a crase ' ' para criar uma string
//para colocar variáveis dentro da string, utilizo %(variável)
console.log(`Olá, ${nome} você tem ${idade} anos
            está cursando ${curso} hoje faz ${temperatura}ºC`)
// Declarando uma variável lógica/boolean/boleano (true/false)
var podeDirigir = true;
var estaChovendo = false;

// Declarando uma variável nula
//sempre começar com letra ou _


//var true = "var"

//Exercício
//Nota1 valido
//NomeCompleto valido
//Nome Completo invalido
//Média invalido
//console invalido
//_salario valido
//9dade invalido
//Minha_Variavel valido
//var invalido
//valor$ invalido
//nome-completo invalido
//escola_ valido
//TELEFONE valido
//true invalido

let cidade ='Andradina'
var turma = '2ºB'
const ano = 2025

console.log(turma);
turma = '3ºB' //Reatribuindo o valor de uma variável
console.log(turma);

//não = 2026 //Não podemos reatribuir valor a uma constante

let _nome = 'Isadora'
let _idade = '15'
let _peso = '59'
console.log(_nome , _idade , _peso);

console.log(typeof _nome, typeof _idade, typeof _peso);

//No prompt o computador espera o usuario digitar uma informação
//sempre quando recebemos uma informação de entrada ela vem em STRING
_nome = prompt('qual o nome?');
_idade = prompt('qual é a idade?')
_peso = prompt('qual o peso?')
console.log(_nome , _idade , _peso);

console.log(typeof _nome, typeof _idade, typeof _peso);

//Criem duas variáveis num1 e num 2 e recebam as informações pelo prompt
let num1 = prompt('Digite o primeiro nº:')
let num2 = prompt('Digite o seguundo nº:')
console.log(num1 + num2);

console.log(typeof num1); //string
num1 = Number(num1);  //Convertendo a variável do tipo string para Number
console.log(typeof num1); //Number

let nr1 = Number(prompt('digite o primeiro nº:'));
let nr2 = Number(prompt('digite o segundo nº:'));
console.log(nr1 + nr2);

//Convertendo os dados de uma variável
nr1 = "100.14"; //string
nr1 = Number("100.14"); //Convertendo uma string para o Number
nr1 = parseInt("100.14") //Convertendo string para integer
nr1 = parseFloat("100"); //Convertendo string para float 100.00
nr1 = String(100.14); //Convertendo um Number para string

_nome = prompt('qual o nome?'); //string
_idade = parseInt(prompt('qual é a idade?')); //int
_peso = parseFloat(prompt('qual o peso?')); //float
console.log(_nome , _idade , _peso);

//Exercícios Variáveis

let nomeAluno = prompt('qual seu nome?')
let altura = prompt('qual sua altura?')
let escola = prompt('onde voçê estuda?')
let anoAtual = prompt('em que ano você está?')
console.log(nomeAluno + altura + escola + anoAtual);

let nomeProfessor = prompt('Qual o nome do professor?');
let materia = prompt('Qual a materia?');
let anoIngresso = prompt('Qual o ano de ingresso?');

_nomeAluno = prompt('Qual é o seu nome?');
_Altura = parseFloat(prompt('Qual sua altura?'));
_Escola = prompt('Qual sua escola?');
_anoAtual = parseInt(prompt('Qual o ano atual?'));
console.log(nomeAluno + altura + escola + anoAtual);



