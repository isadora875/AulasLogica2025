const prompt = require('prompt-sync')();

function Linha () {
    console.log(' - * - * - * - * - * - * - * - * - ');
}
Linha();
console.log('SESI/SENAI');
Linha()

function Cabecalho(){
    console.log('- * - * - * - * - * - * - * - * - * -');
    console.log('SESI/SENAI');
    console.log('- * - * - * - * - * - * - * - * - * -');
}
Cabecalho()

function CabecalhoEscola (nomeEscola){
    Linha();
    console.log(nomeEscola);
    Linha();
}

CabecalhoEscola('USP');
CabecalhoEscola('SESI');

function Soma (nr1 , nr2){
    let resultado = nr1 + nr2;
    console.log(resultado);    
}

Soma (5 , 8);


//Função com parâmetros e retorno
function media (n1, n2){
    let resultado = (n1 + n2) / 2;
    return resultado;
}

