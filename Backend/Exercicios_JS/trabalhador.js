class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.ponto = true;
    }
    getnome() {
        return this.nome;
    }

    getidade() {
        return this.idade;
    }

    getcargo() {
        return this.cargo;
    }
    getponto(){
        return this.ponto;
    }
    

    apresentar_se() {
        console.log("Olá, sou o " + this.getnome() + "\nminha idade é: " + this.getidade() + "\nSou do cargo de: " + this.getcargo());
    }

    Trabalhar() {
        const agora = new Date(); 
        if(this.ponto === true){
        console.log(this.getnome()+ " bateu o ponto para iniciar o trabalho! ");
        console.log(agora.getHours()+":"+agora.getMinutes());
        this.ponto = false;
        }
             
        else if(this.ponto === false){
            console.log(this.getnome()+ " bateu o ponto para finalizar o trabalho! ");
            console.log(agora.getHours()+":"+agora.getMinutes());
            this.ponto = true;
        }
        
    }

}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo,ponto,departamento){
    super(nome,idade,cargo,ponto);
    this.departamento = departamento;
    }

    getDepartamento() {
        return this.departamento;
    }

    apresentar_se() {
        console.log("Olá, sou o " + this.nome +
            "\nminha idade é: " + this.idade +
            "\nSou do cargo de: " + this.cargo +
            "\nDo setor de: " + this.departamento);
    }
}

class Programador extends Funcionario{
    constructor(nome,idade,cargo,ponto,linguagem){
        super(nome,idade,cargo,ponto);
        this.linguagem = linguagem;
    }
    getLinguagem(){
        return this.linguagem;
    }

    apresentar_se() {
        console.log("Olá, sou o " + this.nome +
            "\nminha idade é: " + this.idade +
            "\nSou do cargo de: " + this.cargo +
            "\nProgramo em: " + this.linguagem);
    }
}

var funcionario1 = new Funcionario("Rafael", 27, "TI - Desenvolvedor");
var Gerente1 = new Gerente("Carla", 27, "Gerente",true,"Segurança");
var Programador1 = new Programador("Ju",27,"Desenvolvedor",true,"JavaScript e Java");

console.log("#############")

Gerente1.apresentar_se();
Gerente1.Trabalhar();
console.log("#############")

Programador1.apresentar_se();
Programador1.Trabalhar();
Programador1.Trabalhar();