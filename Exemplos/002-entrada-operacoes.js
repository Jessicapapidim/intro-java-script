//fazendo referencia para a biblioteca de entrada de dados
let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome ')

console.log('Nome digitado: ' + nome);

//trabalhando com números do jeito errado
//let n1 = entrada('Digite o 1º número: ');
//let n2 = entrada('Digite o 2º número: ');

//do jeito certo
//let n1 = parseInt(entrada('Digite o 1º número: '));
//let n2 = parseInt(entrada('Digite o 2º número: '));
// ou da forma abaixo:

let vDigitado;
vDigitado = entrada('Digite o 1º número: ')
let n1 = parseInt(vDigitado);
vDigitado = entrada('Digite o 2º número: ')
let n2 = parseInt(vDigitado);

let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2; //divisão que armazena o resultado completo
let resto = n1 % n2; //resto da divisão

console.log('Resultado da soma entre ' + n1 + ' e ' + n2 + ' = ' + soma);
console.log('Adição ' + soma);
console.log('subtracao ' + subtracao)
console.log('multiplicacao ' + multiplicacao);
console.log('Resultado da Divisão entre ' + n1 + ' e ' + n2 + ' =' + divisao.toFixed(2));
console.log('Resultado da divisao com Inteiro ' + n1 + ' e ' + n2 + ' =' + parseInt(divisao));
console.log('Resultado do resto da Divisão ' + n1 + ' e ' + n2 + ' =' + resto);


console.log('');
entrada('Pressione Enter para encerrar.');






