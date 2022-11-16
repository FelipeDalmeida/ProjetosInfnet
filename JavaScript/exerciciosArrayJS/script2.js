
var vetor=[]

function adicionaElemento(){
    nota=parseFloat(document.getElementById('nota').value);
    vetor.push(nota)
}

const media=()=>{
    nota=parseFloat(document.getElementById('nota').value);
    vetor.push(nota)
    soma=vetor.reduce((total,current)=>(total+current),0);

    valorMedia=soma/vetor.length

    document.getElementById('media').innerHTML=valorMedia.toFixed(1);
}


const adicionar=()=>{
    nome=document.getElementById('nome').value
    nota=document.getElementById('nota').value
    
    tabelaAdicao=`<tr>
            <td>${nome}</td>
            <td>${nota}</td>
            </tr>
    `
    tabelaAntiga=document.getElementById('tab-row').innerHTML;

    tabelaNova=tabelaAntiga+tabelaAdicao;

    document.getElementById('tab-row').innerHTML=tabelaNova;

    media();
}