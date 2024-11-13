//Diferenca var let e const

//VAR
var nome = 'Adamastor';
console.log(nome);

if (nome === 'Adamastor') {
    var escola = 'CESF';
    console.log(escola);
}
console.log(escola);

escola = 'sagrada';
console.log(escola);

//com variaveis do tipo var podemos acessar a (visibilidade)
//fora do escobo de criacao da variavel

//LET
if (nome === 'Adamastor') {
    let curso = 'DS';
    console.log(curso);
}
//console.log(curso)
curso = 'Desenvolvimento'
console.log(curso);

//let so permite acesso a variavel no escopo onde ele foi criada (escopo de bloco)
//se reatribuir valor a ela é como se estivessemos declarando uma nova variavel
//do tipo var com o nome do curso

//const 
const cargo = 'estudante'
console.log(cargo);
///cargo = 'programador';
console.log(cargo)

//variaveis do tipoconst tem escopo de bloco, com as let , mas ela não 
//permite reatribuicao de valor 

//criaçao de variaveis sem atribuicao inicial
var aluno1;
aluno1 = 'Ana clara'
console.log(aluno1);

let aluno2;
aluno2 = 'Bernardo';
console.log(aluno2);

//const aluno3; variaveis do tipo const nao podem ser apenas declaradas
const aluno3 = 'Cremilda';
console.log(aluno3);
