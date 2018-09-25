declare function require(msg:string):any;
var readline = require('readline-sync');

import {Controle} from "./Controle";

let quantidade:number = readline.question("Quantidade de Locais: ");
let control:Controle = new Controle(Number(quantidade));

function menu():string{
    return "Menu \n 1 - Criar nova sala \n 2 - Cadastrar cliente \n 3 - Cancelar \n 4 - Parar";
}

let status:boolean = true;
while(status){
    console.log(control.verStatus());
    console.log(menu());
    let comando:string = readline.question("Comando: ");

    switch (comando) {
        case "1":
            let novaQuantidade:number = readline.question("Quatidade de cadeiras: ");
            control = new Controle(Number(novaQuantidade));
            break;
        case "2":
            let tell = readline.question("Numero do Telefone: ");
            let id = readline.question("Id do Clinte: ");
            let cadeira = readline.question("Local da cadeira: ");
            control.cadCliente(id,tell,cadeira);
            break;
        case "3":
            let idCancel:string= readline.question("Digite o ID: ");
            control.cancelar(id);
            break;
        case "4":
            status = false;
            break;
    
        default:
            break;
    }
}