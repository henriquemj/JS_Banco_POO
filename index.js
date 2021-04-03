import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente();
cliente1.nome = "Henrique";
cliente1.cpf = 14562578796;

const cliente2 = new Cliente();
cliente2.nome = "Cláudia";
cliente2.cpf = 57864578112;

const contaCorrenteHenrique = new ContaCorrente();
contaCorrenteHenrique.agencia = 1001;
contaCorrenteHenrique.cliente = cliente1;
contaCorrenteHenrique.depositar(500);


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

let valor = 200;
contaCorrenteHenrique.transferir(valor, conta2);

console.log("valor:", valor);
console.log(conta2);
console.log(contaCorrenteHenrique);