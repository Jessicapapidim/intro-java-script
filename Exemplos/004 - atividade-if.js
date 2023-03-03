let nota = require('prompt-sync')();

let vDigitado;
vDigitado = nota('Digite a 1º nota de 0 a 10: ')
let n1 = parseInt(vDigitado);
vDigitado = nota('Digite o 2º nota de 0 a 10: ')
let n2 = parseInt(vDigitado);

let media = (n1 + n2)/2

if (media < 5) {
    console.log ("I");
} else if (media >= 5 && media < 6.5) {
    console.log ("R")
} else if (media >= 6.5 && media < 8.5){
    console.log ("B");
} else {
    console.log ("MB")
}



