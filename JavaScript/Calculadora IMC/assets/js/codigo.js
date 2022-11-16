



function calcularIMC(){
    let peso=document.getElementById('peso').value;
    let altura=document.getElementById('altura').value;

    peso=parseFloat(peso.replace(",","."));
    altura=parseFloat(altura.replace(",","."));


    let condicao;

    let imc=peso/(Math.pow(altura,2));

    if(imc<18.5){
        condicao='Desnutrição'
    } else if(imc<25){
        condicao='Normal'
    } else if (imc<30){
        condicao='Acima do peso'
    } else if(imc<35){
        condicao='Obesidade I'
    } else if(imc<40){
        condicao='Obesidade II'
    } else{
        condicao='Obesidade III'
    }

    document.getElementById('resultadoIMCValor').innerHTML=imc.toFixed(1);
    document.getElementById('resultadoIMCCondicao').innerHTML=condicao;
    console.log(imc.toFixed(1));
    console.log(condicao);
}