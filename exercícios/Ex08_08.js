const prompt = require('prompt-sync')();

function SenhaAleatoria(qtdeCaracteres){
    let listaCaracteres = ['!', 'a', 5, 'R', '$', '#'];
    let senha = '';

    for(let x = 1; x <= qtdeCaracteres; x++){
    let posSorteada = Math.floor(Math.random() * listaCaracteres.length)
    senha = senha + listaCaracteres[posSorteada];
    }
    return senha;

}
let senhaGerada = SenhaAleatoria(8);
console.log(senhaGerada);
