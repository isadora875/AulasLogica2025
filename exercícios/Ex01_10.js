const prompt= require ('prompt-sync') ();

let kmCorrido = Number (prompt ('Digite o kmCorrido:'));
let diasCorridos = Number (prompt ('Digite o diasCorridos:'));
let diaria = 60.00;
let km = 0.15;
let valorPagarKm= kmCorrido*km;
let valorPagarDiaria = diasCorridos*diaria;
console.log(valorPagarKm);
console.log(valorPagarDiaria);
console.log(valorPagarDiaria + valorPagarKm);



