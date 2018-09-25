import {Sala} from "./Sala";
import {Cliente} from "./Cliente";
export class Controle{
    private sala:Sala;
    private cliente:Cliente;

    constructor(qtd:number){
        this.sala = new Sala(qtd);
    }

    public criarNovaSala(qtd:number):void{
        this.sala = new Sala(qtd);
    }

    public verStatus():string{
        return this.sala.verStatus();
    }
    
    public cadCliente(id:string,tell:string,local:number):void{
        this.sala.cadCliente(new Cliente(id,tell,local),local)
    }

    public cancelar(id:string):void{
        this.sala.cancelar(id);
    }
    
}