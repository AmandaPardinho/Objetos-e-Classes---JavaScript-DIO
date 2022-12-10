console.log("Crie uma classe para representar pessoas. Para cada pessoa teremos os atributos 'nome', 'peso' e 'altura'.\n\
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)).\n\
Instancie uma pessoa chamada José que tenha 70 kg e 1,75 m de altura e peça ao José para informar o valor de seu IMC.");

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC(){
        var imc = this.peso / (Math.pow(this.altura, 2));
        console.log("O IMC de José é igual a " + imc.toFixed(2));

        if(imc < 18.5){
            console.log("\nAbaixo do peso");
        }else if(imc >= 18.5 && imc < 25){
            console.log("\nPeso normal");
        }else if(imc >= 25 && imc < 30){
            console.log("\nAcima do peso");
        }else if(imc >= 30 && imc < 40){
            console.log("\nObeso");
        }else{
            console.log("\nObesidade mórbida");
        }
    }
}

let jose = new Pessoa("José", 70, 1.75);

jose.calculaIMC();