class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura ** 2);
    }

    classificarIMC() {
        const IMC = this.calcularIMC();

        if (IMC <= 18.5) {
            return'Abaixo do peso.';
        } else if (IMC > 18.5 && IMC <= 25) {
            return'Peso normal.';
        } else if (IMC > 25 && IMC <= 30) {
            return'Acima do peso.';
        } else if (IMC > 30 && IMC <= 40) {
            return'Obeso.';
        } else {
            return'Obesidade Grave.';
        }
    }
}

const renan = new pessoa('Renan', 90, 1.78);
const ClassificacaoDoIMC = renan.classificarIMC();
const IMC = renan.calcularIMC();
console.log(`O IMC de ${renan.nome} é ${IMC.toFixed(1)} e está ${ClassificacaoDoIMC}`);