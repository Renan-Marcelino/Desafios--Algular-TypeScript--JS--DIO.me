const produto = 60;

const pagamento =  'Credito + 2x' //Dinheiro ou Pix - Credito 2x - Credito > 2x

if(pagamento === 'Debito') {
    const ValorFinal = produto - (produto / 100 * 10);
    console.log('Valor do Produto no débito é de: ' + ValorFinal);
}else if(pagamento === 'Dinheiro' || pagamento === 'Pix') {
    const ValorFinal = produto - (produto / 100 * 15);
    console.log('Valor do Produto no Pix ou Dinheiro é de: ' + ValorFinal);
}if(pagamento === 'Credito 2x') {
    const ValorFinal = produto;
    console.log('Valor do Produto no Credito é de: ' + ValorFinal);
}else{
    const ValorFinal = produto + (produto / 100 * 10);
    console.log('Valor do Produto no Credito é de: ' + ValorFinal);
}