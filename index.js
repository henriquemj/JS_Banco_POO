class Cliente {
    nome;
    cpf;
}
class ContaCorrente {
    agencia;
    saldo;
    
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Henrique";
cliente1.cpf = 14562578796;

const cliente2 = new Cliente();
cliente2.nome = "Cláudia";
cliente2.cpf = 57864578112;

const contaCorrenteHenrique = new ContaCorrente();
contaCorrenteHenrique.saldo = 0;
contaCorrenteHenrique.agencia = 1001;


console.log(contaCorrenteHenrique.saldo);
contaCorrenteHenrique.saldo = 100;
console.log(contaCorrenteHenrique.saldo);
contaCorrenteHenrique.sacar(50);


console.log(contaCorrenteHenrique.saldo);
console.log(cliente1);
console.log(cliente2);