const prompt = require('prompt-sync')();

let velocidade = Number(prompt('digite a velocidade:'))
if (velocidade > 80) {
    console.log('multa');
    let multa = velocidade * 7.0
    console.log(multa);
} else {
    console.log('não multa');

}