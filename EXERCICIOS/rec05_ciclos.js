const entrada = require ('readline-sync')

const producao_ciclo = entrada.questionInt (" Quantos produtos sao produzidos por ciclo?:");

console.log(" ---- PRODUÇÃO ACUMULADA ---- ");
for(let ciclo = 1; ciclo <= 10; ciclo ++) {
    const acumulado = producao_ciclo * ciclo;
    console.log(`Ciclo${ciclo}:${acumulado} peças`)
}