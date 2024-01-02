const PrecoEtanol = 5.79;
const PrecoGasolina = 6.50;
const GastoMedioCombustivel = 10;
const DistanciaemKm = 1580;
const TipoDeCombustivelNoCarro = 'Etanol';//Gasolina

if (TipoDeCombustivelNoCarro === 'Etanol') {

    let valorGasto = DistanciaemKm / GastoMedioCombustivel * PrecoEtanol;

    console.log('O valor gasto de combustivel será:' + valorGasto.toFixed(2));

} else {

    let valorGasto = DistanciaemKm / GastoMedioCombustivel * PrecoGasolina;

    console.log('O valor gasto de combustivel será:' + valorGasto.toFixed(2));

}