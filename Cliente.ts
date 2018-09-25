export class Cliente{
    private id:string;
    private telefone:string;
    private cadeira:number;
    
    public constructor(id:string,telefone:string,cadeira:number){
        this.id = id;
        this.telefone = telefone;
        this.cadeira = cadeira;
    }

    public getId():string{
        return this.id;
    }
    public setId(id:string):void{
            this.id = id;
    }

    public getTell():string{
        return this.telefone;
    }
    public setTell(tell:string):void{
            this.telefone = tell;
    }

    public getCadeira():number{
        return this.cadeira;
    }
    public setCadeira(cadeira:number):void{
        if(cadeira>=0){
            this.cadeira = cadeira;
        }
    }

    public toString():string{
        return "Id: "+ this.id + "\n" +
                "Telefone: " + this.telefone + "\n"+
                "Cadeira: " + this.cadeira + "/n";
    }
}