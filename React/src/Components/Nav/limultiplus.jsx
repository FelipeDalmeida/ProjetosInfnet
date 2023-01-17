const Limultiplus=({lis,style,className})=>{ //Irá gerar as li do Nav
    let liSum=[]
    for(let i=0;i<lis.length;i++){
        liSum.push(<li style={style} className={className}>{lis[i]}</li>)
    }
    return liSum;
}

export default Limultiplus