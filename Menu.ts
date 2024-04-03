import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { Tinta } from "./src/model/Tinta";
import { Ferramenta } from "./src/model/Ferramenta";

let opcao, id, tipo, preco: number;
let nome, cor, tipoFerramenta: string;
let tipoProduto = ["Tinta", "Ferramenta"];

const produtoController: ProdutoController = new ProdutoController();


export function main() {

    do {
        console.log("======================================================");
        console.log("                                                      ");
        console.log("                     Tinta Fácil                      ");
        console.log("                                                      ");
        console.log("        Sua loja de tintas mais perto de você         ");
        console.log("======================================================");
        console.log("                                                      ");
        console.log("            1 - Cadastrar Produto                     ");
        console.log("            2 - Listar todos os Produtos              ");
        console.log("            3 - Listar Produto pelo ID                ");
        console.log("            4 - Atualizar Produto                     ");
        console.log("            5 - Deletar Produto                       ");
        console.log("            0 - Sair                                  ");
        console.log("                                                      ");
        console.log("======================================================");
    
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");
    
        switch (opcao) {
            case 1:
                console.log("Cadastrar Produto!");

                nome = readlinesync.question("Digite o Nome do Produto: "); 

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preco: ");

                switch (tipo) {
                    case 1:
                        cor = readlinesync.question("Digite a cor da tinta: ");
                        produtoController.cadastrar(new Tinta(produtoController.gerarId(), nome, tipo, preco, cor));
                        
                        break;
                    case 2:
                        tipoFerramenta = readlinesync.question("Digite o tipo de Ferramenta: ");
                        produtoController.cadastrar(new Ferramenta(produtoController.gerarId(), nome, tipo, preco, tipoFerramenta));
                        break;
                }



                console.log("Produto cadastrado com sucesso");
                keyPress();
                break;
            case 2:
                console.log("Listar todas os Produtos!");

                produtoController.listarTodas();


                keyPress();
                break;
            case 3:
                console.log("Listar Produto pelo ID!");

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.procurarPorId(id);

                keyPress();
                break;
            case 4:
                console.log("Atualizar Produto!");

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                    
                let produto = produtoController.buscarNoArray(id);

                if (produto !== null){

                    nome = readlinesync.question("Digite o Nome do Produto: ");

                    tipo = produto.tipo;
    
                    preco = readlinesync.questionFloat("Digite o preco: ");
    
                    switch (tipo) {
                        case 1:
                            cor = readlinesync.question("Digite a cor da tinta: ");
                            produtoController.atualizar(new Tinta(id,
                                nome, tipo, preco, cor));
                            break;
                        case 2:
                            tipoFerramenta = readlinesync.question("Digite o tipo de Ferramenta: ");
                            produtoController.atualizar(new Ferramenta(id,
                                nome, tipo, preco, tipoFerramenta));
                            break;
                    }

                }else
                    console.log("Produto não Encontrado!")


                keyPress();
                break;
            case 5:
                console.log("Deletar Produto!");

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.deletar(id);

                keyPress();
                break;
            case 0:
                console.log("\nTinta Fácil, sua loja de tintas mais perto de você!\n");
                console.log("\nObrigado e volte sempre!\n");
                sobre();
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
                keyPress();
                break;
        }
    } while (opcao !== 0);

}    

function keyPress(): void {
    
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

/* Função com os meus dados */
export function sobre(): void {

    console.log("=========================================================");
    console.log("                                                       ");
    console.log("              Projeto desenvolvido por:                ");
    console.log("         Michel Oliveira Cavalcante de Souza           ");
    console.log("        https://github.com/mcavalcantedesouza          ");
    console.log("                                                       ");
    console.log("=========================================================");

}

main();