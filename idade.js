console.log("Determinar qual pessoa é mais velha.")

class Pessoa{
    nome;
    idade;
    anoNascimento; 

    constructor(nome, idade, anoNascimento){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;
    }

    descrever(){
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}.')
    }
}

function compararPessoas(p1, p2){
    
    if(p1.idade === p2.idade){
        console.log(p1.nome + " e " + p2.nome + " têm a mesma idade");
    }else if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else{
        console.log(p1.nome + " é mais novo(a) que " + p2.nome);
    }
}

let p1 = new Pessoa("Luana", 20);
let p2 = new Pessoa("Paulo", 47);

compararPessoas(p1, p2);