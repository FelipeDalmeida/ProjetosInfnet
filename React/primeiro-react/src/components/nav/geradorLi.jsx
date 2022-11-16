import Li from "./li";

const GeradorLi=({style,listaLi,className})=>{ //listaLi deve ser um array
    let liGerada=[];
    for(let i=0;i<listaLi.length;i++){
        let valor=listaLi[i];
        liGerada.push(<Li style={style} valor={valor} className={className}/>)
    }
    return liGerada
}

export default GeradorLi