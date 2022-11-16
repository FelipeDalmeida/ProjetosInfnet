let vetor=[]

function adicionaElemento(valor){
   
    vetor.push(valor)
}

adicionaElemento(1)
adicionaElemento(2)

console.log(vetor)

function teste(teste='teste'){
    console.log(teste)
}

teste()
teste('blablabla')

class Pessoa{
    constructor(nome, idade, endereco, pontos=0){
        this.nome=nome;
        this.idade=idade;
        this.endereco=endereco;
        this.pontos=pontos;
    }
}

pessoa1= new Pessoa('Felipe',28,'Barra');

