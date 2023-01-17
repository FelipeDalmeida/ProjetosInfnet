// const calculaInvestimento=(investInicial,investMensal,investJuros,investTempo,periodo,juros,tipoInvest,setTotalBruto,setDinheiroInvestido,setTotalJuros,setImposto,setTotalIR,setTotalLiquido)=>{
//     const m=[]//montante

//     let parcelasMensais=parseFloat(investMensal.replace(",","."));
//     let c=parseFloat(investInicial.replace(",",".")); //capital inicial
//     let i=parseFloat(investJuros.replace(",","."))/100; //taxa
//     let t=parseInt(investTempo.replace(",",".")); //tempo
    

//     if(periodo==="Anos"){ //converter tempo para meses
//         t=t*12;
//     }
//     if(juros==="Anual"){
//         i=Math.pow((1+i),1/12)-1;
//     }
//       //TODO: Colocar imposto de renda
    
    
//     calcularValorInvestimento(m,c,parcelasMensais,t,i,tipoInvest) //retorna um array com o montante a cada mês TODO: Gráfico com progressão por mês

//     let imposto=calcularIR(tipoInvest,t)
//     let totalBruto=m[m.length-1]
//     let totalInvestido=(c+t*parcelasMensais);
//     let totalJuros=(m[m.length-1]-totalInvestido);
//     let totalIR=totalJuros*imposto;

//     setTotalBruto(`R$ ${totalBruto.replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,')}`)
//     setDinheiroInvestido(`R$ ${totalInvestido.toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,')}`)
//     setTotalJuros(`R$ ${totalJuros.toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,')}`)
//     setTotalLiquido(`R$ ${(totalBruto-totalIR).toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,')}`)
 
//     if(tipoInvest==="LCI/LCA"){
//         setImposto("Isento")
//         setTotalIR("Isento")
//     } else {
//         setImposto(`${imposto*100}%`)
//         setTotalIR(`R$ ${totalIR.toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,')}`)
//     }
// }



function calcularValorInvestimento(m, meses, inicial,mensal,tempo,taxa){
    let acumulado=inicial

    for(let i=0;i<tempo;i++){
        acumulado=acumulado*(1+taxa);
        acumulado+=mensal;
        m.push(acumulado.toFixed(2))
        meses.push(i+1)
    }
    
}



function calcularIR(tipoInvest,tempo){
    let tempoDias=tempo*30;
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



export {calcularValorInvestimento,calcularIR}