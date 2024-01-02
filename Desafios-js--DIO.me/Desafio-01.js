const ValorCombustivel = 5.79;
const GastoMedioCombustivel = 12;
const DistanciaemKm = 1580;

let valorGasto = DistanciaemKm / GastoMedioCombustivel * ValorCombustivel;

console.log('O valor gasto de combustivel será:' + valorGasto.toFixed(2));