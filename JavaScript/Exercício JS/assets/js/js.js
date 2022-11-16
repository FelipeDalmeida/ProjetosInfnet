
console.log('Hello Word');

function buscaPalavra(){
    let palavra= document.getElementById('busca').value;
    const texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium totam consectetur, esse voluptatibus velit! Fugit soluta quis fuga eos et quo sit maxime pariatur nihil id, eum ipsa! Eius!";

    posicao=texto.indexOf(palavra);

    let resposta;

    if(posicao>-1 && posicao!=""){
        resposta=`Posição inicial em ${posicao} e final em ${(posicao+palavra.length)-1}`;
    }
    else{
        resposta="Palavra não encontrada";

    }

    document.getElementById('retorno').innerHTML=resposta;
}