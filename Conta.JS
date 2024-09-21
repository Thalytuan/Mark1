class ContaCliente{

    constructor(numeroConta,Saldo,debito,credito){
        this.numeroConta = numeroConta;
        this.Saldo = Saldo
        this.credito = credito
        this.debito = debito;
    }

    calcularSaldoAtual(){
        return this.Saldo - this.debito + this.credito
    }

    verficarSaldo(){
        const saldoAtual = this.calcularSaldoAtual()
        if(this.calcularSaldoAtual >= 0){
            alert("Saldo positivo R$ " + saldoAtual)
        }else{
            alert("Saldo negativo R$ " + saldoAtual)
        }
    }
}

let numeroConta = prompt("Digite o número da conta do cliente")
let Saldo = parseFloat(prompt("Digite o saldo do cliente"))
let debito = parseFloat(prompt("Digite o debito do cliente"))
let credito = parseFloat(prompt("Digite o credito do cliente"))

let conta = new ContaCliente(numeroConta,Saldo,debito,credito)
conta.verificarSaldo();