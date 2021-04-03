class Cliente {
    nome;
    cpf;
}
class ContaCorrente {
    agencia;
    #saldo = 0;
    
    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
        }
    }

    depositar(valor){
        if(valor >0){
            this.#saldo += valor;
            console.log(this.#saldo);
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
contaCorrenteHenrique.saldo = 10000;
contaCorrenteHenrique.agencia = 1001;


contaCorrenteHenrique.depositar(100);
contaCorrenteHenrique.sacar(50);


console.log(contaCorrenteHenrique);