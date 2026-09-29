const entrada = require ('readline-sync');

const ferramentas = [];

for ( let i = 0; i<=3; i++ ){
    const ferrramentas = {
         nome:entrada.question (`Digite o nome da ferramenta ${i+1}:`),
         quantidade:entrada.questionInt (`Digite a quantidade da ferramenta ${i+1}:`),
         quantidadeEstoque:entrada.question (`Digite a quantidade de estoque da ferramenta ${i+1}:`),
    };
    ferramentas.push(ferramentas);
}

console.log("--- RELATÓRIO ESTOQUE ---");

for (let i= 0; i < ferramentas.lengh; i++ ){
    const produto = ferramentas [i];
}

let situacao;
if ( ferramentas.quantidade < ferramentas.quantidadeEstoque){
    situacao = "REPOR ESTOQUE";
}else{
    situacao = " ESTOQUE OK";
}

console.log(`Material: ${produto.nome}`);
console.log(`Quantidade: ${produto.quantidade}`);
console.log(`Estoque Mínimo: ${produto.estoqueMinímo}`);
console.log(`Situacao: ${situacao}`);
console.log("-".repeat(20));
