const prompt = require('prompt-sync')();

function exibirTabuada(nr){
    for(let x = 0; x <= 10; x++){
        console.log(`${nr} x ${x} = ${nr * x }`);
        
    }
}
exibirTabuada(5)


function Numero (numer){
let um = (numer * 1)
let dois = (numer * 2)
let tres = (numer * 3)
let quatro = (numer * 4)
let cinco = (numer * 5)
let seis = (numer * 6)
let sete = (numer * 7)
let oito = (numer * 8)
let nove = (numer * 9)
let dez = (numer * 10)
console.log(`O resultado da tabuada do ${numer} é ${um} ${dois} ${tres} ${quatro} ${cinco} ${seis} ${sete} ${oito} ${nove} ${dez}`);
}
Numero(2)
Numero(5)
Numero(10)
