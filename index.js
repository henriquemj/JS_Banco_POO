class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Henrique";
cliente1.cpf = 14562578796;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Cláudia";
cliente2.cpf = 57864578112;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);