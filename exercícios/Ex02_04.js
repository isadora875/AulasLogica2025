const prompt = require('prompt-sync')();

let num = Number(prompt('digite o num'));

if (num <= 0) {
    console.log('positivo');

} else {
    console.log('negativo');
}
