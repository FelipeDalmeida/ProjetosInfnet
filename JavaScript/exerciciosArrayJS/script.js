
// var vetor=[1,2];

// var jason={
//     nome:{
//         principal:'Felipe',
//         sobrenomeMeio:'Seabra',
//         sobrenome:'d\'Almeida',
//     },
//     profissao:'Engenheiro',
//     habilidade:['HTML5','CSS3','JavaScript','Phyton',2]
// }

// // console.log(jason.nome)
// // console.log(jason['nome'])

// console.log(jason.habilidade[0])

// const numero=jason.habilidade[4]

// console.log(numero+2)

// function media(array){
//     let soma=array.reduce((total,atual)=>{return total+atual},0);

//     return soma/array.length;
// }


// console.log(media(vetor))


// const vetor2= vetor.map(function(num){return num*2})
// const vetor2= vetor.map((num)=>{return num*2})

// const vetor2=vetor.map(function(num,i){return num*i})

// console.log(vetor2)

// console.log(2818/6)


const funcao=()=>{
    let p=document.getElementById('serie');
    count=0;
    
    for(i=0;i<20;i++){
        // p.innerHTML +=`${i} `;
        p.innerHTML +=i;
        console.log(i)
        


    }
    p.innerHTML +="<br>";
    count+=1;

}

const func2=()=>{
    let pos=document.getElementById('but').style;



    // var element = document.getElementById('but'),
    // style = window.getComputedStyle(element),
    // left = style.getPropertyValue('margin-left'),
    // top=style.getPropertyValue('margin-top');
    // console.log(top);
    


    

    

    tamanho1=Math.floor(Math.random() * 350);
    tamanho2=Math.floor(Math.random() * 350);
   
    
    tamanho1=`${tamanho1}px`
    tamanho2=`${tamanho2}px`

    // while(tamanho1<=left+25 ||tamanho1>=left-25){
    //     tamanho1=Math.floor(Math.random() * 350);
    // }
    // while(tamanho2<=top+25 ||tamanho1>=top-25){
    //     tamanho2=Math.floor(Math.random() * 350);
    // }
    

    pos.marginLeft=tamanho1
    pos.marginTop=tamanho2
    console.log(pos.marginLeft)
    
}

const func3=()=>{
    alert("FODA-SE!")
}

const uhul=()=>{
    alert('UHUUUUL')
}