const entrada = require ('readline-sync')

const porcentagem_oleo = entrada.questionInt(" porcentagem de oleo:")

if(porcentagem_oleo <= 80){
    console.log(" NÍVEL  DE OLEO NORMAL")
}else{ (porcentagem_oleo>= 40 )
    console.log("INSPEÇÃO NECESSÁRIA ")
};

