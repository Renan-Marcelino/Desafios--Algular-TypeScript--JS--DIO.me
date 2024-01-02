class Carros {
    nome;
    marca;
    cor;
    mediaDeCombustivel;

    constructor(nome, marca, cor, mediaDeCombustivel) {
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        this.mediaDeCombustivel = mediaDeCombustivel;
    }

    calcularGastos(distanciaEmKm, PrecoDoCombustivel) {
        return distanciaEmKm / this.mediaDeCombustivel * PrecoDoCombustivel;
    }
}

const gol = new Carros('Gol', 'Volkswagen', 'vermelho', 14);
const gastos = gol.calcularGastos(100, 4.57);
console.log(`O gasto da viagem com o ${gol.nome} será de R$${gastos.toFixed(0)} reais.`);
