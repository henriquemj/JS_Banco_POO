class Cliente {
    nome;
    cpf;
}
class ContaCorrente {
    agencia;
    _saldo = 0;
    
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return  valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        { 
            return; 
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Henrique";
cliente1.cpf = 14562578796;

const cliente2 = new Cliente();
cliente2.nome = "Cláudia";
cliente2.cpf = 57864578112;

const contaCorrenteHenrique = new ContaCorrente();
contaCorrenteHenrique.agencia = 1001;

contaCorrenteHenrique.depositar(100);
contaCorrenteHenrique.depositar(100);
contaCorrenteHenrique.depositar(100);

const valorSacado = contaCorrenteHenrique.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteHenrique);