const prompt = require('prompt-sync')();
//Estrutura de laço de repetição for 

//inicialização da variável , condição do for ; incremento da variável
for (let contador = 1; contador <= 5; contador++){ 
    console.log(contador);
}


for (let contador = 5; contador <=50; contador++){ 
    console.log(contador);
}

// neste iniciamos a partir do número 5, até o 50
// pulando de 3 em 3
for (let contador = 5; contador <=50; contador+= 3){ 
    console.log(`O contador é ${contador}`);
}

//Utilizando o break para parar o for 
for (let contador = 1; contador <= 500; contador++ ) {
    console.log(contador);
    if (contador == 50) {
        break;
    }    
}

console.log('Entregando os notebooks');
for (let nr = 1; nr <= 32; nr++){
    let nome = prompt(`Quem é o n° ${nr}: `);
    let presente = prompt(`O(A) ${nome} está presente (S ou N)?`)

    if (presente == "S"){
        console.log(`Pegar o notebook ${nr}`);
        console.log(`Levar o notebook até o(a) ${nome}`);
    } else {
        console.log(`Não pegar o notebook ${nr}`);
    }
}
