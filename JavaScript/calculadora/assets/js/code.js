function limpar(){
    document.getElementById('resultado').innerHTML=""
}

function inserir(elemento){
    const tela=document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML=tela+elemento;

}

function apagar(){
    const tela=document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML=tela.substring(0,tela.length-1);
}

    function calcular(){

    const tela=document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML=eval(tela);
    }