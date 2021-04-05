import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Henrique", 14562578796);

const contaCorrenteHenrique = new ContaCorrente(1001, cliente1, 1001);
contaCorrenteHenrique.depositar(500);
contaCorrenteHenrique.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca._sacar(10);

console.log(contaPoupanca);
console.log(contaCorrenteHenrique);