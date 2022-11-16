// O INFNET resolveu dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.

// Faça um script que recebe o salário de um colaborador e adicione o reajuste segundo o seguinte critério, baseado no salário atual:

//     nome do funcionario:
//     salario do funcionario:

//     salários até R$ 280,00 (incluindo) : aumento de 20%
//     salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//     salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//     salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe 
//     na tela ou console:
    
//     o nome do funcionario;
//     o salário antes do reajuste;
//     o percentual de aumento aplicado;
//     o valor do aumento;
//     o novo salário, após o aumento.

let pergunta="s"
let lista=""

while(pergunta ==='s'){
    let nome=prompt("Informe o nome do funcionário:");
    let salario=prompt("Informe o salário");
    salario=parseFloat(salario)

    let percentual=reaguste(salario);
    let aumento=salario*percentual;
    let salarioReajustado=salario+aumento;

    let li=`<li>Funcionário: ${nome}</li><li>Salário sem reajuste:R$ ${salario}</li><li>Percentual aplicado: ${percentual*100}%<li>Aumento:R$ ${aumento}</li><li>Novo salário:R$ ${salarioReajustado}</li>`
    // document.write(`Funcionário: ${nome}<br>Salário sem reajuste:R$ ${salario}<br>Percentual aplicado: ${percentual*100}%<br>Aumento:R$ ${aumento}<br>Novo salário:R$ ${salarioReajustado}`);
    document.getElementById('mudar').innerHTML=li;

    lista+=li+"<br><br><br>"

    pergunta=perguntar();

}

document.getElementById('mudar').innerHTML=lista;

function reaguste(salario){
    if(salario<=280){
        return 0.2;
    } else if(salario>280 && salario<=700){
        return 0.15;
    } else if(salario>700 && salario<=1500){
        return 0.10;
    } else{
        return 0.05;
    }
}

function perguntar(){
    let pergunta=prompt("Deseja continuar? (S)im ou (N)ão")
    return pergunta.toLowerCase();
}