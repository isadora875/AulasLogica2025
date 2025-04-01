//Estruturas condicionais aninhadas
//Switch case
const prompt = require('prompt-sync')();

let valorCompra = 120;
let clienteVIP = true;

if (valorCompra >= 100) {
   if (clienteVIP == true) {
    console.log(`Você ganhou R$ ${valorCompra * 10 / 100}`);
   } else {
    let desconto = valorCompra * 5 / 100;
    console.log(`você ganhou R$ ${desconto} de desconto`);
    
   }
} else {
  let restante = valorCompra;
  console.log(`Compre mais R$ ${restante} e gamhe desconto`);

}

// Exercícios

let idade = Number(prompt('qual a idade ?'));
if (idade > 16 && idade < 18 || idade > 70) {
    console.log('Voto facultativo');
} else if (idade < 16){
     console.log('Você não pode votar'); 

     } else if (idade > 18 && idade < 70 ){
     console.log('Voto obrigatório');
     
     }

//Switch case é uma alternativa ao if else 
let n1 = Number(prompt('Digite um nº: '));
let n2 = Number(prompt('Digite outro nº: '));
let op = prompt('Digite o operador (+ - / * **): ');
switch (op) {
    case '+':               // if (op == '+')
        console.log(n1 + n2);
        break;
case '-':                 //else if (op == '-')
    console.log(n1 - n2);
case '/':                  //else if (op == '/')
        console.log(n1 / n2);
        break;
case '*':               //else if (op == '*')
         console.log(n1 * n2);
         break;
case '**':            //else if (op == '**')
         console.log(n1 ** n2);
         break;
default:                  //else
    console.log('Operador inválido');
    
}



     
     



