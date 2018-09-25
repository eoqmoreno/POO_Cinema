import {Cliente} from "./Cliente";
export class Sala{
    private clientes: Cliente[] = new Array();    //Array de clientes da classe cliente
    private cadeiras: any[];

    constructor(qtd:number){
        this.cadeiras = new Array(qtd);
        for(let i=0; i<this.cadeiras.length;i++){
            this.cadeiras[i]="- ";
        }   
    }
    
    public setClientes(cliente: Cliente[]):void{
        this.clientes = cliente;
    }
    public getClientes():any{
        return this.clientes;
    }
    
    public setCadeiras(cadeiras:number):void{
        this.cadeiras = new Array(cadeiras);
    }
    public getCadeiras():any{
        return this.cadeiras;
    }
    

    public cancelar(id:string):void{
        if(this.clientes.length>0){
            for(let i in this.clientes){
                if(this.clientes[i].getId() == id){
                    let cadeira:number = this.clientes[i].getCadeira();
                    this.clientes.splice(Number(i),1);
                    this.cadeiras[cadeira] = "- ";
                }
            }
        }
    }

    public cadCliente(cliente:Cliente, local:number):void{
        if(this.cadeiras[local] != "- "){
            console.log("Já existe alguém nesse local");
        }else{
            if(this.clientes.length>0){
                for(let i of this.clientes){
                    if(cliente.getId() == i.getId()){
                        console.log("Já existe um usuário com o mesmo ID")
                    }else{
                        this.cadeiras[local]  = cliente;
                        this.clientes.push(cliente);
                    }
                }
            }else{
                this.cadeiras[local]  = cliente;
                this.clientes.push(cliente);
            }
        }
    }
    
    public verStatus():string{
        let res:string = "";
        for(let i of this.cadeiras){
            if(i!="- "){
                res += i.getId()+":"+i.getTell()+ " ";
            }else{
                res += i;
            }
        }
        return res;
    }
}