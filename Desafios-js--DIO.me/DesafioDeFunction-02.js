//***************** metodo 1 ******************

function VerificarSeEMaiorDeIdade(idade){
    if(idade < 18) {
        console.log('Menor de Idade.');
    }else {
        console.log('Maior de Idade.');
    }
}

(function(){
    console.log('METODO 1.');

    VerificarSeEMaiorDeIdade(18);  
    VerificarSeEMaiorDeIdade(15);
})();

//***************** metodo 2 ******************

function VerificarSeEMaiorDeIdade2(idade) {
    if (idade < 18) {
        return 'Menor de Idade.';
    } else {
        return 'Maior de Idade.';
    }
}

(function () {
    console.log('METODO 2.');

    const resultadoMetodo1 = VerificarSeEMaiorDeIdade2(18);
    console.log(resultadoMetodo1);

    const resultadoMetodo2 = VerificarSeEMaiorDeIdade2(15);
    console.log(resultadoMetodo2);
})();