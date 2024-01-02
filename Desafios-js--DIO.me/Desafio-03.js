const nota1 = 1;
const nota2 = 7;
const nota3 = 2;

const NotaFinal = (nota1 + nota2 + nota3) / 3;

if(NotaFinal < 5){
    console.log('Reprovado pois tirou: ' + NotaFinal.toFixed(0));
}else if(NotaFinal > 7){
    console.log('Aprovado pois tirou: ' + NotaFinal.toFixed(0));
}else {
    console.log('Recuperação pois tirou: ' + NotaFinal.toFixed(0));
};