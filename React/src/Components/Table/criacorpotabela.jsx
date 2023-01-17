const CriaCorpoTabela=({corpoTabela,theadStyle,thStyle,tbodyStyle,trStyle, tdStyle})=>{
    let head=[];
    let elementosCorpo=[]
    let elemento=[]
    let tabela=[]
    let corpo=[];


    for(let j=0;j<corpoTabela[0].length;j++){           //primeiro elemento cria thead
        elemento.push(<th style={thStyle}>{corpoTabela[0][j]}</th>)
        
    }
        head.push(<thead style={theadStyle}>{elemento}</thead>)
    
    tabela.push(head)
    
    for(let i=1;i<corpoTabela.length;i++){
        let elemento=[]
        for(let j=0;j<corpoTabela[i].length;j++){
            elemento.push(<td style={tdStyle}>{corpoTabela[i][j]}</td>)
            
        }
        elementosCorpo.push(<tr style={trStyle}>{elemento}</tr>)
    }
    
    corpo.push(<tbody style={tbodyStyle}>{elementosCorpo}</tbody>)
    tabela.push(corpo)
    return tabela
}

export default CriaCorpoTabela