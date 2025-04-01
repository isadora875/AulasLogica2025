const prompt = require('prompt-sync')();

//Estrutura condiciocional composta e encadeada 
//Operadores Lógicos
// && - e
// || - ou 
// ! - não 

let a = 2;
let b = 3;
let c = 5;
console.log(a > 2 && b < 2); // False pq 2 condição é F
console.log(a > 1 && b < 2); // False pq apenas 1 condição é V
console.log(a > 1 && b < 4); // True pq 2 condição é V
console.log(a > 1 && b < 4 && c > 4); // True pq tpdas condição é V
console.log(a > 1 && b < 4 && c > 5); // False

console.log(a > 2 || b < 2); //False nehuma condição é V
console.log(a > 1 || b < 2); //True pelo menos 1 V
console.log(a > 1 || b < 4); //True pelo menos 1 V
console.log(a > 1 || b < 4 || c > 4); //True 

let altura = Number ( prompt('Digite sua altura:'))
let peso = Number (prompt('Digite seu peso:'))
let imc = peso / (altura**2);

if (imc < 18.5) {
    console.log('Você está abaixo do peso ideal');
    
} else if (imc >= 18.5 && imc < 24.9){
    console.log(' você está no peso ideal');
    
} else if(imc > 25 && imc < 29.9) {

}else {

}

let lado1 = Number ( prompt('Digite lado1'))
let lado2 = Number ( prompt('Digite lado2'))
let lado3 = Number ( prompt('Digite lado3'))

if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1) {
console.log('se ele for igual é equilatero');               
    
} else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
    console.log('se ele for diferente é escaleno');
} else {
    console.log(' seu triangulo é isósceles');
    
}

let vendas = Number(prompt('qual o número de vendas'));
let horas = Number(prompt('qual o número de horas'));
   if (vendas >= 5000 || horas >= 40) {
    console.log('Você tem direito a um bônus');
    
   } else  {(vendas < 5000 || horas < 40)
    console.log('Você não tem direito a um bônus');
    
   }
    
 let algoritmo =Number( prompt('qual a letra'))
 if (algoritmo == 'a' || algoritmo == 'e' || algoritmo == 'i' || algoritmo =='o' || algoritmo == 'u' ) {
    console.log('vogal');
    
 }else { 
    console.log('consoante');
    

 }

