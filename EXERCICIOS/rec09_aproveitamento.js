const entrada = require ('readline-sync')

const porcentagem_util = entrada.questionInt(" porcentagem util:");
const porcentagem_total = entrada.questionInt(" porcentagem total:");
 

console.log ("--- REVISÃO DO APROVEITAMENTO ---")
if(porcentagem_total >= 90){
    console.log("EXCELENTE")
    
}else{ (porcentagem_total<= 75 )
console.log("REVISAR PROCESSO")
};

if(porcentagem_util >=90){
    console.log("EXCELENTE")

}else{ (porcentagem_util<= 75)
    console.log ("REVISAR PROCESSO")

}
