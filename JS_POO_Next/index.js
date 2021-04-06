import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor ("Allan", 10000, 123456789);
diretor.cadastrarSenha("12345")
const gerente = new Gerente ("Ricardo", 5000, 323789456);
gerente.cadastrarSenha("1234")

const cliente = new Cliente ("Cláudia", 78945612379, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345");
console.log(gerenteEstaLogado, diretorEstaLogado);

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
