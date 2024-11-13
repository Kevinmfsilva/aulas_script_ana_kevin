//map
//percorre o array e executa a açao que tivermos programado

// let lista = ['Altamiro','Barnabe','Cremildo'];

// lista.map((nome,possicao)=>{

// console.log(`O nome é ${nome} e ele ocupa a posicao ${possicao}`)

// })

//reduce
//procura reduzir o array, normalmente, atravez de
//operacoes matematicas ,transformando todo o conteudo
//do array em um unico valor

// let numeros = [2,3,5,10]

// let total = numeros.reduce((acumulador,numero,indice,original)=>{
//     console.log(`${acumulador} - total até agora`);
//     console.log(`${numero} - valor atual`);
//     console.log(`${indice} - possicao até agora`);
//     console.log(`${original} array original`);

//     console.log(`---------------------------------`)
//     return acumulador = acumulador * numero;

// }); 

// console.log(`Total do reduce é ${total}`);

//find


// let listagem =[2,3,'KEVIN'`,5,`'Aluno'];

// let busca = listagem.find((item2)=>{
//     if(item2 === "KEVIN"){
//         return console.log(`Nome encontrado`)
//     }else{
//         return console.log('Nmome não encontrado')
//     };

// });

// console.log(busca);


let palavras = ['alface','beterraba','cenoura','dedo','espinafre'];

resultado = palavras.filter((palavra)=>{
    return palavra.length>=7;
})

console.log(resultado);