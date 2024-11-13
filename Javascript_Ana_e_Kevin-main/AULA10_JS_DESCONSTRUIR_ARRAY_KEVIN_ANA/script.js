let pessoa = {
    nome: 'Kevin',
    sobreNome:'Murilo',
    empresa: 'JT consept',
    cargo: 'Filho do dono',
};

console.log(pessoa);
console.log(pessoa.nome);

//desconstruir o objeto 
const {nome,cargo,empresa}=pessoa;
console.log(nome);
console.log(empresa);


let nomes =['Aparicio','Bernadete','Cremilda'];
console.log(nomes);
let {0:primeiroNome,1:segundoNome,2:terceiroNome}=nomes;
console.log(primeiroNome);

//outro jeito de construir o array
let[primNome,segNome,tercNome]=nome;
console.log(segNome);  //Bernadete