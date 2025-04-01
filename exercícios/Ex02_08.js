const prompt = require('prompt-sync')();

let valorVendaMes = Number(prompt('digite valor vendaMes'))
if (valorVendaMes > 5000.00){
    console.log('comissão 5%');
    let comissao = valorVendaMes * 0.05
    console.log(comissao);
    } 
    if (valorVendaMes < 5000.00){
        console.log('comissão 3%');
        let comissao = valorVendaMes * 0.03
        console.log(comissao);
        } 