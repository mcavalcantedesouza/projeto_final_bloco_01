import { Produto } from "./Produto";

export class Ferramenta extends Produto{

    private _tipoFerramenta: string;


	constructor(id: number, nome: string, tipo: number, preco: number, tipoFerramenta: string) {
        super(id, nome, tipo, preco); // Atributos da Classe Produto
		this._tipoFerramenta = tipoFerramenta;
	}


    /**
     * Getter tipoFerramenta
     * @return {string}
     */
	public get tipoFerramenta(): string {
		return this._tipoFerramenta;
	}

    /**
     * Setter tipoFerramenta
     * @param {string} value
     */
	public set tipoFerramenta(value: string) {
		this._tipoFerramenta = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Tipo de Ferramenta: ${this._tipoFerramenta}`);
    }

}