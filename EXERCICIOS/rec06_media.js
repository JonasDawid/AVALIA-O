const entrada = require ('readline-sync');

let soma = [0];
 
for (let i = 1; i <=5; i++) {
    const repetição = entrada.questionFloat(`registre o tempo: ${i}:`)
    soma += repetição;

    const media = soma / 5
}



