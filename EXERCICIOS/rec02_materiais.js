const entrada = require ('readline-sync');

const nome_peca = entrada.question("nome da peca:");
const quantidade_peca = entrada.questionFloat (" quantidade adquirida:");
const preco_peca = entrada.questionFloat("preco unitario da peca:");

const valor_final = quantidade_peca * preco_peca

console.log("---- RELATÓRIO DA COMPRA ----");
console.log(`Nome da peca: ${nome_peca}`);
console.log(`Quantidade adquirida: ${quantidade_peca}`);
console.log(`Preço Unitario da peça: ${preco_peca}`);
console.log (`Valor a pagar: ${valor_final}`);