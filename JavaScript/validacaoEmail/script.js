function enviar(){
    const nome=document.getElementById('nome').value;
    const email=document.getElementById('email').value;
    const confemail=document.getElementById('confemail').value;
    const idade=parseInt(document.getElementById('idade').value);

    console.log(nome)
    console.log(email)
    console.log(confemail)
    console.log(idade)

    verificaNome(nome);
    verificaEmail(email);
    comparaEmail(email,confemail);
    verificaIdade(idade);


}

function verificaNome(nome){
    if(nome==null || nome.length<=2){
        alert("Erro no campo nome!")
    }
}

function verificaEmail(email){
    if(email==null || email.length<=6){
        alert("Erro no campo email!")
    }
}

function comparaEmail(email1,email2){
    if(email1!==email2){
        alert("Emails diferentes")
    }
}

function verificaIdade(idade){
    if(idade<18){
        alert("Menor de Idade, acesso negado!")
    }
}
