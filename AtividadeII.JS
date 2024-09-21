class Funcionario {
    constructor(nome, idade, cargo) {
      if (!nome || !idade || !cargo) {
        throw new Error("Todos os campos de nome, idade e cargo devem ser preenchidos.");
      }
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }
  
    trabalhar() {
      return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      if (!departamento) {
        throw new Error("O campo departamento deve ser preenchido para o cargo de Gerente.");
      }
      this.departamento = departamento;
    }
  
    gerenciar() {
      return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
  }
  
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      if (!linguagem) {
        throw new Error("O campo linguagem de programação deve ser preenchido para o cargo de Desenvolvedor.");
      }
      this.linguagem = linguagem;
    }
  
    
    programar() {
      return `${this.nome} está programando em ${this.linguagem}.`;
    }
  }
  
  function exibirErro(mensagem) {
    const erroDiv = document.getElementById("erro");
    erroDiv.innerHTML = mensagem;
  }
  
  function exibirResultado(mensagem) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = mensagem;
    document.getElementById("erro").innerHTML = "";  // Limpa erros anteriores
  }
  
  function cadastrarFuncionario() {
    try {
      
      const nome = document.getElementById("nome").value;
      const idade = parseInt(document.getElementById("idade").value);
      const cargo = document.getElementById("cargo").value;
      const departamento = document.getElementById("departamento").value;
      const linguagem = document.getElementById("linguagem").value;
  
      let funcionario;
  
      
      if (cargo === "Gerente") {
        funcionario = new Gerente(nome, idade, cargo, departamento);
      } else if (cargo === "Desenvolvedor") {
        funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
      } else {
        throw new Error("Cargo inválido.");
      }
  
      
      let resultado = funcionario.seApresentar() + "<br>" + funcionario.trabalhar();
  
      
      if (funcionario instanceof Gerente) {
        resultado += "<br>" + funcionario.gerenciar();
      } else if (funcionario instanceof Desenvolvedor) {
        resultado += "<br>" + funcionario.programar();
      }
  
      exibirResultado(resultado);
    } catch (erro) {
      exibirErro(erro.message);
    }
  }
  
  
  function atualizarFormulario() {
    const cargo = document.getElementById("cargo").value;
  
    
    if (cargo === "Gerente") {
      document.getElementById("departamentoLabel").style.display = "block";
      document.getElementById("departamento").style.display = "block";
      document.getElementById("linguagemLabel").style.display = "none";
      document.getElementById("linguagem").style.display = "none";
    } else if (cargo === "Desenvolvedor") {
      document.getElementById("departamentoLabel").style.display = "none";
      document.getElementById("departamento").style.display = "none";
      document.getElementById("linguagemLabel").style.display = "block";
      document.getElementById("linguagem").style.display = "block";
    }
  }
  