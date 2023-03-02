let entrada = require('prompt-sync')();

let idade = entrada('Digite sua idade: ');

if (idade == 18) {
console.log('Você pode se matricular na auto-escola!');
}
if (idade > 18) {
console.log('Você tem idade para dirigir caso tenha habilitação!');
}
if (idade < 18) {
console.log('Você não tem idade para dirigir!');    
}


if (idade >= 18) {
    console.log ('maior');
}else{
    console.log ('menor');
}



//console.log('A idade digitada é: ' + idade);
