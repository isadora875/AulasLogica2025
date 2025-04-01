// exercícios aula 09
const prompt = require('prompt-sync')();

let num = (prompt('Digite um número de 1 a 7:'))
switch (num) {
     case '1':
          console.log('domingo');
          break;
     case '2':
          console.log('segunda');
          break;
     case '3':
          console.log('terça');
          break;
     case '4':
          console.log('quarta');
          break;
     case '5':
          console.log('quinta');
          break;
     case '6':
          console.log('sexta');
          break;
     case '7':
          console.log('sábado');
          break;
     default:
          console.log('Digite um número de 1 a 7');

}

//ex 2
let ano = Number(prompt('Em que ano vc nasceu?'));
let anoAtual = Number(prompt('Qual o ano atual?'));
let nascimento = anoAtual - ano
if (nascimento > 18 && nascimento < 59) {
     console.log('adulto');
} else if (nascimento <= 10) {
     console.log('criança');
} else if (nascimento > 60) {
     console.log('idoso');
} else {
     (nascimento > 11 && nascimento < 17)
     console.log('adolescente');

}

//ex 3

let mes = (prompt('Digite um número de 1 a 12:'))
switch (mes) {
     case '1':
          console.log('janeiro');
          break;
     case '2':
          console.log('fevereiro');
          break;
     case '3':
          console.log('março');
          break;
     case '4':
          console.log('abril');
          break;
     case '5':
          console.log('maio');
          break;
     case '6':
          console.log('junho');
          break;
     case '7':
          console.log('julho');
          break;
     case '8':
          console.log('agosto');
          break
     case '9':
          console.log('setembro');
          break;
     case '10':
          console.log('outubro');
          break;
     case '11':
          console.log('novembro');
          break;
     case '12':
          console.log('dezembro');
          break;
     default:
          console.log('Digite um número de 1 a 12');
}

//ex 4 
let meS = prompt('Digite o nome de um mês: ')
if (mes == 'janeiro' || mes == 'março' || mes == 'maio' || mes == 'maio' || mes == 'julho' || mes == 'agosto' || mes == 'outubro' || mes == 'dezembro') {
console.log('Esse mês tem 31 dias');
} else if (mes == 'abril' || mes == 'junho' || mes == 'setembro' || mes == 'novembro') {
console.log('Esse mês tem 30 dias');
} else if (mes == 'fevereiro') {
console.log('Esse mês tem 28 dias');
}


//ex 5 
let nota1 = Number(prompt('Qual é a 1ª nota? '));
let nota2 = Number(prompt('Qual é a 2ª nota? '));
let media = (nota1 + nota2) / 2;
(`A média das notas ${nota1} e ${nota2} é de ${media}`);

if (media > 7) {
console.log('Foi aprovado');
} else if (media >= 5 && media <= 7) {
console.log('Está em recuperação');
} else if (media < 5) {
console.log('Foi reprovado');
}

//ex 6
let salario = Number(prompt('Digite o seu salário: '))
if (salario <= 2000) {
console.log(`Você ganhou com o aumento R$ ${salario * 12 / 100}`);
} else if (salario <= 4000) {
console.log(`Você ganhou com o aumento R$ ${salario * 10 / 100}`);
} else if (salario > 4000) {
console.log(`Você ganhou com o aumento R$ ${salario * 8 / 100}`);
}

