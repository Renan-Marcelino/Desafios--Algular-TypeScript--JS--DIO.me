let nomeBeneficiario;
let valorConta;
let dataVencimento;

// Neste bloco, temos as funções gets para ler os valores de entrada:
nomeBeneficiario = gets();
valorConta = parseFloat(gets());
dataVencimento = gets();

// Imprima a saída adequada utilizando o conceito de template strings:
print(`Pagamento Agendado! Valor: R$ ${valorConta.toFixed(0)}, vencimento ${dataVencimento}.`);
