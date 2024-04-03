import readlinesync = require("readline-sync");

let opcao, id, tipo, preco: number;
let nome, cor: string;
let tipoProduto = ["Tinta", "Ferramenta"];

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
                        
                        break;
                    case 2:
                        
                        break;
                }



                console.log("Produto cadastrado com sucesso");
                keyPress();
                break;
            case 2:
                console.log("Listar todas os Produtos!");
                keyPress();
                break;
            case 3:
                console.log("Listar Produto pelo ID!");
                keyPress();
                break;
            case 4:
                console.log("Atualizar Produto!");
                keyPress();
                break;
            case 5:
                console.log("Deletar Produto!");
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