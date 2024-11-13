//criar uma função para exibir uma lista de alunos
// function listaAluno (aluno1, aluno2, aluno3, aluno4){
//     console.log("Sejam bemvindo todos os alunpos!");
//     console.log(aluno1);
//     console.log(aluno2);
//     console.log(aluno3);
//     console.log(aluno4);
// }
//na função não temos como saber de antemão quantos parâmetros serão passado
//aí entra em ação o Rest  Operator que irá transformar os parâmetros em um array

//vamos escrever a função utilizando o Rest Operator
function listaAlunos(...alunos){
    console.log("Sejam bemvindo todos os alunos!");
    console.log(alunos);
    console.log(alunos[0]);
    console.log(alunos[3]);
}
listaAlunos('Adamastor', 'Benevides', 'Conegundes', 'Demerval', 'Emengarda');

//outro exemplo: sorteador de números primos menores do que 20

function sorteadorPrimo(...nomes){
    console.log(nomes);
    //const nomeSorteado =Math.random()*nomes.length;

    const nomeSorteado = Math.floor(Math.random()*nomes.length)
console.log(`posição ${nomeSorteado}`);
console.log(`Nomes: ${nomes[nomeSorteado]}`);
   
}
 sorteadorNomes(ALINE, ANA CLARA, ANA LUIZA,ANDRE, BERNARDO, DANIEL, DEIVID, LUCAS 
    ENRIQUE
    LORENZO 
    VALENTINA
    JEFTE 
    JULIA 
    KAMILA 
    VITOR  GARRETT
    HELOISE
    RAPHAEL 
    
    LEONARDO FREITAS
    VINICIUS
    VITOR SCHUSKI
    PEDRO RODACINSKI
    NICOLAS
    PEDRO PORTELA 
    RAFAELA
    
     
    IZADORA
    NYCOLAS 
    RAYRA 
    JOAO MATHEUS 
    JOAO MAURICIO 
     
    KEVIN 
    
    GABRIEL ROSSA
    
    KARINA 
    LEONARDO SPECAMILIO 
    FERNANDA 
    MATHEUS
    JOSE 
    GABRIEL ZATTERA 
    
    );