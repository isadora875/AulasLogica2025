const prompt = require('prompt-sync')();

//Crie uma lista com os meses do ano e imprima apenas os meses que começam com "J".


let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
for (let J of meses){
    if ('J' == J[0]){
        console.log(J);
        
    }
}