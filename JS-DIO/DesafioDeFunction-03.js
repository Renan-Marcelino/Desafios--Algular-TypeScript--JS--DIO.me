// **************** METODO 1 ******************
 
function verificarPagamento(pagamento, produto){
    if(pagamento === 'Debito') {
        const ValorFinal = produto - (produto / 100 * 10);
        console.log('Valor do Produto no débito é de: ' + ValorFinal);
    }else if(pagamento === 'Dinheiro' || pagamento === 'Pix') {
        const ValorFinal = produto - (produto / 100 * 15);
        console.log('Valor do Produto no Pix ou Dinheiro é de: ' + ValorFinal);
    }if(pagamento === 'Credito 2x') {
        const ValorFinal = produto;
        console.log('Valor do Produto no Credito 2x é de: ' + ValorFinal);
    }else{
        const ValorFinal = produto + (produto / 100 * 10);
        console.log('Valor do Produto no Credito é de: ' + ValorFinal);
    }
}

(function(){
    verificarPagamento('Credito + 2x', 60 ); //Dinheiro ou Pix - Credito 2x - Credito > 2x
})();



// **************** METODO 2 ******************
 
function verificarPagamento2(pagamento, produto) {
    if (pagamento === 'Debito') {
        const ValorFinal = produto - (produto / 100 * 10);
        return 'Valor do Produto no débito é de: ' + ValorFinal;
    } else if (pagamento === 'Dinheiro' || pagamento === 'Pix') {
        const ValorFinal = produto - (produto / 100 * 15);
        return 'Valor do Produto no Pix ou Dinheiro é de: ' + ValorFinal;
    } if (pagamento === 'Credito 2x') {
        return 'Valor do Produto no Credito 2x é de: ' + produto;
    } else {
        const ValorFinal = produto + (produto / 100 * 10);
        return 'Valor do Produto no Credito Parcelado mais de 2x é de: ' + ValorFinal;
    }
}

(function () {
    const resultado = verificarPagamento2('Pix', 60); //Dinheiro ou Pix - Credito 2x - Credito > 2x
    console.log(resultado);
})();



// **************** METODO 3 ******************

function verificarPagamento3(pagamento) {
    if (pagamento === 'Debito') {
        return 'Valor do Produto no débito é de: ';
    } else if (pagamento === 'Dinheiro' || pagamento === 'Pix') {
        return 'Valor do Produto no Pix ou Dinheiro é de: ';
    } if (pagamento === 'Credito 2x') {
        return 'Valor do Produto no Credito 2x é de: ';
    } else {
        return 'Valor do Produto no Credito Parcelado mais de 2x é de: ';
    }
}

function calvularValorFinal(produto, pagamento) {
    if (pagamento === 'Debito') {
        const ValorFinal = produto - (produto / 100 * 10);
        return ValorFinal;
    } else if (pagamento === 'Dinheiro' || pagamento === 'Pix') {
        const ValorFinal = produto - (produto / 100 * 15);
        return ValorFinal;
    } if (pagamento === 'Credito 2x') {
        return produto;
    } else {
        const ValorFinal = produto + (produto / 100 * 10);
        return ValorFinal;
    }
}

(function () {
    const resultado = verificarPagamento3('Debito') + calvularValorFinal(60, 'Debito'); //Dinheiro ou Pix - Credito 2x - Credito > 2x
    console.log(resultado);
})();