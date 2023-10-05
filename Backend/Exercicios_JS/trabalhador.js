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
            var trabalhar = Funcionario.nome + " bateu o ponto para iniciar o trabalho às " + agora.getHours() + ":" + agora.getMinutes();
            var HoraTrabalhoDiv = document.getElementById("HoraTrabalho");
            HoraTrabalhoDiv.innerHTML = "<h4>Informativo:</h4><p>" + trabalhar + "</p>";
            this.ponto = false;
        }else if(this.ponto === false){
            var trabalhar = Funcionario.nome + " Terminou o Trabalho ás " + agora.getHours() + ":" + agora.getMinutes();
            var HoraTrabalhoDiv = document.getElementById("HoraTrabalho");
            HoraTrabalhoDiv.innerHTML = "<h4>Informativo:</h4><p>" + trabalhar + "</p>";
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
        var apresentacao = "Nome: " + Gerente1.nome + ", Idade: " + Gerente1.idade + ", Cargo: " + Gerente1.cargo + ", Departamento: " + Gerente1.departamento;
        var apresentacaoDiv = document.getElementById("apresentacaoDiv");
        apresentacaoDiv.innerHTML = "<h4>Apresentação:</h4><p>" + apresentacao + "</p>";
    }

    Trabalhar() {
        const agora = new Date(); 
        if(this.ponto === true){
            var trabalhar = Gerente1.nome + " bateu o ponto para iniciar o trabalho às " + agora.getHours() + ":" + agora.getMinutes();
            var HoraTrabalhoDiv = document.getElementById("HoraTrabalho");
            HoraTrabalhoDiv.innerHTML = "<h4>Informativo:</h4><p>" + trabalhar + "</p>";
            this.ponto = false;
        }else if(this.ponto === false){
            var trabalhar = Gerente1.nome + " Terminou o Trabalho ás " + agora.getHours() + ":" + agora.getMinutes();
            var HoraTrabalhoDiv = document.getElementById("HoraTrabalho");
            HoraTrabalhoDiv.innerHTML = "<h4>Informativo:</h4><p>" + trabalhar + "</p>";
            this.ponto = true;
        }
        
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
        var apresentacao = "Nome: " + Programador1.nome + ", Idade: " + Programador1.idade + ", Cargo: " + Programador1.cargo + ", Departamento: " + Programador1.linguagem;
        var apresentacaoDiv = document.getElementById("apresentacaoDiv");
        apresentacaoDiv.innerHTML = "<h4>Apresentação:</h4><p>" + apresentacao + "</p>";
    }
    Trabalhar() {
        const agora = new Date(); 
        if(this.ponto === true){
            var trabalhar = Programador1.nome + " bateu o ponto para iniciar o trabalho às " + agora.getHours() + ":" + agora.getMinutes();
            var HoraTrabalhoDiv = document.getElementById("HoraTrabalho");
            HoraTrabalhoDiv.innerHTML = "<h4>Informativo:</h4><p>" + trabalhar + "</p>";
            this.ponto = false;
        }else if(this.ponto === false){
            var trabalhar = Programador1.nome + " Terminou o Trabalho ás " + agora.getHours() + ":" + agora.getMinutes();
            var HoraTrabalhoDiv = document.getElementById("HoraTrabalho");
            HoraTrabalhoDiv.innerHTML = "<h4>Informativo:</h4><p>" + trabalhar + "</p>";
            this.ponto = true;
        }
        
    }
}

//var funcionario1 = new Funcionario("Rafael", 27, "TI - Desenvolvedor");
//var Gerente1 = new Gerente("Carla", 27, "Gerente",true,"Segurança");
//var Programador1 = new Programador("Ju",27,"Desenvolvedor",true,"JavaScript e Java");
