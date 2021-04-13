import { Component, OnInit} from "@angular/core";
import { FormGroup } from "@angular/forms";
import {  NavigationExtras, Router } from "@angular/router";
import { AleMinasService } from "../services/aleMinasSerice";
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';



@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
  })
  export class MainComponent implements OnInit {
  
    constructor(
                private aleMinasService:AleMinasService,
                private router: Router,
                private messageService: MessageService
                ) {      
    }

    controleBusca:boolean=false;
    ngOnInit(): void {

    }

    buscar(form:FormGroup){         
            const queryParams: any = {};
            queryParams.anoContrato = form.controls.anoContrato.value ;
            queryParams.tipoContrato =  form.controls.tipoContrato.value,
            queryParams.nomeFornecedor = form.controls.nomeFornecedor.value;

            const navigationExtras: NavigationExtras = {
                queryParams
              };
              if(this.testaParam(queryParams)){
                 this.router.navigate([`busca`], navigationExtras);
              }  
              else{                
                this.addMessage("");
              }
    }    
    testaParam(queryParams:any){
        if(!queryParams.anoContrato && queryParams.tipoContrato == "" && queryParams.nomeFornecedor.trim() == ""){
            return false;
        }else{
            return true;
        }    
    }
    addMessage(msg:string) {
        console.log("ad")
        this.messageService.add({severity:'warn',life:1000, summary:'Atenção', detail:'Busca não realizada! Utilize menos um parametro.'});
    }
    
}