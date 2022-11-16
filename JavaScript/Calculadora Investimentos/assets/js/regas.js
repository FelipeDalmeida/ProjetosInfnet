

function calcular(){
    let tipoInvest=document.getElementsByName("tipo_aplicacao");
    let invInicial=document.getElementById("invIni");
    let invMensal=document.getElementById("invMen");
    let tempo=document.getElementById("tempo");
    let tempoInv=document.getElementsByName("tempoInv");
    let juros=document.getElementById("taxaJuros");
    

    tempo=parseInt(tempo.value);
    invInicial=parseFloat(invInicial.value);
    invMensal=parseFloat(invMensal.value);
    juros=parseFloat(juros.value)/100;


    
    let tempoDias=parseInt(calcularTempo(tempo,tempoInv));
    let totalBruto=calcularValorInvestimento(invInicial,invMensal,tempoDias,juros);
    let imposto=calcularIR(checarRadio(tipoInvest),tempoDias);
    

    let totalAportadoMensal=invMensal*(tempoDias/30);


    let totalInvest=invInicial+totalAportadoMensal;
    let valorJuros=totalBruto-totalInvest;
    let valorIr=valorJuros*(imposto);
    let totalLiquido=totalBruto-valorIr;

    document.getElementById('totalBruto').innerHTML=totalBruto.toFixed(2);
    document.getElementById('totalInvestido').innerHTML=totalInvest.toFixed(2);
    document.getElementById('valorJuros').innerHTML=valorJuros.toFixed(2);
    document.getElementById('imposto').innerHTML=`${imposto*100}%`;
    document.getElementById('valorIr').innerHTML=valorIr.toFixed(2);
    document.getElementById('totalLiquido').innerHTML=totalLiquido.toFixed(2);
}


function checarRadio(variavel){
    for(i=0;i<variavel.length;i++){
        if(variavel[i].checked==true){
            return i;
        }
       
    }

}
// FUNÇÃO PARA CALCULAR QUANTO DE IMPOSTO SERÁ APLICADO NA APLICAÇÃO - SOMENTE CDB TEM IMPOSTO
function calcularIR(tipoInvest,tempoDias){
    if (tipoInvest==0){
        if(tempoDias<180){
            return 0.225;
        }
        if(tempoDias>=180 && tempoDias<360){
            return 0.2;
        }
        if(tempoDias>=360 && tempoDias<720){
            return 0.175;
        }
        if(tempoDias>=720){
            return 0.15;
        }
    }
    else{
        return 0;
    }
}

function calcularTempo(tempo,tempoInv){
    if(tempoInv[0].value=="mensal"){
        return tempo*30;
    }
    else if(tempoInv[0].value=="anual"){
        return tempo*360;
    }
}

function calcularValorInvestimento(inicial,mensal,tempoDias,taxaAA){
    acumulado=inicial;

    taxamensal=Math.pow(1+taxaAA,1/12)-1;

    for(i=0;i<tempoDias/30;i++){
        acumulado=acumulado*(1+taxamensal);
        acumulado+=mensal;
    }

    return acumulado;
    
}