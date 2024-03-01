class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    mostraPessoa() {
        return `${this.nome}, ${this.idade}`;
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade) {
        super(nome, idade);
    }

    dizerPeriodoEscolar() {
        let periodoEscolar = this.acharPeriodoEscolar();
        console.log(`${this.nome} tem ${this.idade} anos e está no ${periodoEscolar}`);
    }

    acharPeriodoEscolar() {
        let periodoEscolar;
        switch (true) {
            case this.idade < 12:
                periodoEscolar = 'fundamental I';
                break;
            case this.idade < 16 && this.idade > 11:
                periodoEscolar = 'fundamental II';
                break;
            case this.idade < 18 && this.idade > 15:
                periodoEscolar = 'ensino médio';
                break;
            case this.idade > 17:
                periodoEscolar = 'ensino superior';
                break;
            default:
                periodoEscolar = 'outro';
                break;
        }
        return periodoEscolar;
    }
}

let p = new Aluno('Davi', 18);
let a = new Aluno('Pedro', 12);

p.dizerPeriodoEscolar();
a.dizerPeriodoEscolar();