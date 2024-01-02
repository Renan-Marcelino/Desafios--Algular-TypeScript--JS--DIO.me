// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output), pulando linha.

const contaBancaria = {
    investimentoInicial: parseFloat(gets()),
    taxaJurosMensal: parseFloat(gets()),
    periodoMeses: parseInt(gets()),
  };
  
  // Calcule a taxa de juros mensal em formato decimal (0 a 1) a partir da taxa percentual fornecida:
  function calcularJuros(taxaJurosMensal, investimentoInicial) {
    return taxaJurosMensal / 100;  // Corrigido para retornar a taxa em formato decimal (0 a 1).
  }
  
  // Calcule o montante (valor total após o investimento) usando a fórmula de juros compostos.
  function calcularMontante(investimentoInicial, taxaJurosMensal, periodoMeses) {
    const taxaDecimal = calcularJuros(taxaJurosMensal, investimentoInicial);
    const montante = investimentoInicial * Math.pow((1 + taxaDecimal), periodoMeses);
    return montante;
  }
  
  // Calcule o montante usando a função calcularMontante:
  const montante = calcularMontante(contaBancaria.investimentoInicial, contaBancaria.taxaJurosMensal, contaBancaria.periodoMeses);
  
  // É impresso informações sobre o investimento:
  print("Investimento: " + contaBancaria.investimentoInicial.toFixed(2));
  print("Juros: " + contaBancaria.taxaJurosMensal);
  print("Período: " + contaBancaria.periodoMeses);
  print("Resultado: " + montante.toFixed(2));
  