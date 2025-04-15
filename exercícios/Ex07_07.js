const prompt = require('prompt-sync')();

//Nessa string ‘Gol;Corsa;Palio;Monza;Fusca;’, faça a separação desses itens para uma lista e exiba o item e a posição que ele está

let car = 'Gol,Corsa,Palio,Monza,Fusca'
let lista = car.split(',')
for(const [pos,list] of lista.entries()){
    console.log(`${pos} e ${list}`)
}
