const calculaInvestimento=(investInicial,investMensal,investJuros,investTempo,periodo,juros,setTotalBruto,setDinheiroInvestido,setTotalJuros)=>{
    const m=[]//montante
    let parcelasMensais=parseFloat(investMensal.replace(",","."));
    let c=parseFloat(investInicial.replace(",",".")); //capital inicial
    let i=parseFloat(investJuros.replace(",","."))/100; //taxa
    let t=parseInt(investTempo.replace(",",".")); //tempo
    

    if(periodo==="Anos"){
        t=t*12;
    }
    if(juros==="Anual"){
        i=Math.pow((1+i),1/12)-1;
    }
    // let imposto=calcularIR(tipoInvest,t)  TODO: Colocar imposto de renda
    let totalInvestido=(c+t*parcelasMensais).toFixed(2);
    
    calcularValorInvestimento(m,c,parcelasMensais,t,i) //retorna um array com o montante a cada mês TODO: Gráfico com progressão por mês

    setTotalBruto(`R$ ${m[m.length-1]}`)
    setDinheiroInvestido(`R$ ${totalInvestido}`)
    setTotalJuros(`R$ ${(m[m.length-1]-totalInvestido).toFixed(2)}`)
}

function calcularValorInvestimento(m, inicial,mensal,tempo,taxa){
    let acumulado=inicial

    for(let i=0;i<tempo;i++){
        acumulado=acumulado*(1+taxa);
        acumulado+=mensal;
        m.push(acumulado.toFixed(2))
        console.log(m[i])
    }
    
}

function calcularIR(tipoInvest,tempo){
    let tempoDias=tempo/30;
    if (tipoInvest==="CDB"){
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

export default calculaInvestimento