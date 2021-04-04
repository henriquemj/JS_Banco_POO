import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Henrique", 14562578796);
const cliente2 = new Cliente("Cláudia", 57864578112);

let numeroDeContas = 0;

const contaCorrenteHenrique = new ContaCorrente(1001, cliente1);
numeroDeContas++;

contaCorrenteHenrique.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);
numeroDeContas++;

let valor = 200;
contaCorrenteHenrique.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);