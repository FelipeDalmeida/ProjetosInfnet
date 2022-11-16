class Pessoa{
    constructor(nome,idade,cpf){
        this.nome=nome;
        this.idade=idade;
        this.cpf=cpf;
    }

    identificacao(){
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nCPF: ${this.cpf}`)
    }
}

class Jogador extends Pessoa{
    constructor(nome,idade,cpf,pontos=0){
        super(nome,idade,cpf)
        this.pontos=pontos;
        this.jogos={}
    }

    adicionaPonto(ponto){
        this.pontos+=ponto;
    }
    pontosFeitos(){
        console.log(`O jogador ${this.nome} possui ${this.pontos} Pontos`)
    }
    adicionaJogo(jogo){
        let tamanho=Object.keys(this.jogos).length;
        let numJogo=`Jogo ${tamanho}`;
        this.jogos[numJogo]=jogo;
    }

    jogosParticipando(){
        console.log(this.jogos)
    }
}

const jogador1=new Jogador("Felipe",28,"15974886747")
jogador1.identificacao()
jogador1.pontosFeitos()
jogador1.jogosParticipando()
jogador1.adicionaPonto(100)
jogador1.pontosFeitos()
jogador1.adicionaJogo("Futebol")
jogador1.jogosParticipando()
jogador1.adicionaJogo("Basquete")
jogador1.adicionaJogo("Xadrez")
jogador1.jogosParticipando()
