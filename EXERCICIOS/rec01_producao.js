const entrada = require ('readline-sync');

const quantidade_de_caixas = entrada.question (" quantas caixas foram produzidas ?");
const quantidade_de_horas = entrada.question (" quantas horas foram trabalhadas ?");

const producao_dia = quantidade_de_caixas * quantidade_de_horas

console.log (" ---- RELATÓRIO DA PRODUÇÃO ----")
console.log (`A producao foi de: ${producao_dia}`)