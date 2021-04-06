import {Cliente} from "./Cliente.js"
import { Conta } from "./conta.js";
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Henrique", 14562578796);

const contaCorrenteHenrique = new ContaCorrente(1001, cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const conta = new Conta(0, cliente1, 1001);

console.log(conta);