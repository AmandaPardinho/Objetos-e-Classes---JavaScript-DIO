console.log("Crie uma classe para representar carros.\n\
Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.\n\
Crie um método que, dada a quantidade de quilômetros e o preço do combustível, nos dê o valor gasto para realizar o percurso.");

class Carro{
    marca;
    cor;
    combustivel;
    rendimento;

    constructor(marca, cor, combustivel, rendimento){
        this.marca = marca;
        this.cor = cor;
        this.combustivel = combustivel;
        this.rendimento = rendimento;
    }

    gastoViagem(distancia, precoCombustivel){
        let gastoViagem = ((distancia * precoCombustivel)/(carro1.rendimento));

        console.log("O valor gasto de combustível na viagem foi de R$ " + gastoViagem.toFixed(2));
    }
}

let carro1 = new Carro("Fiat", "Preto", "Etanol", 10);

carro1.gastoViagem(100, 4.47);