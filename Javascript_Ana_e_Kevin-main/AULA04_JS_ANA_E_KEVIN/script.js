//laço while = enquanto
var x = 0;
document.write('<br><h3>testando loop com WHILE</h3>')
while (x <= 10) {
    document.write('<br>O valor de X é: ' + x);
    x = x + 1;
}
//laço for = para
var controle = 10;
document.write('<br><h3>testando loop com FOR </h3><br>')
for (a = 0; a < controle; a++) {
    document.write('<br>O valor de X é: ' + x);
    x = x + 1;
}
//laço switch = escolha
//criar a função  pedir()
function pedir() {
    //  alert("A casa caiu mano!!!")
    var valor = prompt("Digite a opção de 1 a 4")
    //console.log(valor);
    //console.log(typeof(valor));
    //console.log(Number(valor));
    //console.log(typeof(Number)(valor));

    switch (Number(valor)){
        case 1:
            Alert('Você escolheu suco');
            break;

            case 2:
            Alert('Você escolheu Agua gelada');
            break;

            case 3:
            Alert('Você escolheu sorvete');
            break;

           case 4:
            Alert('Você escolheu Chamar o garçom');
            break;

            default:
            alert("Digite entre 1 e 4");
            break;

    }
}