const entrada = require ('readline-sync');

const valor_vibracao = entrada.questionInt (" Qual o valor da vibracao?:");

if (valor_vibracao <= 3 ){
    console.log(" situação ESTÁVEL")
} else if ( valor_vibracao <= 4){
    console.log("ATENÇÃO!!!")
} else { (valor_vibracao >= 6) 
    console.log("SITUAÇÃO CRITICA !!!")}

    --