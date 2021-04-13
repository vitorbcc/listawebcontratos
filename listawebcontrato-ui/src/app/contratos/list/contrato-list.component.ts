import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { Aditamento, Contrato } from "src/app/models/model.model";
import { AleMinasService } from "src/app/services/aleMinasSerice";


@Component({
    selector: 'app-contrato-list',
    templateUrl: './contrato-list.component.html',
    styleUrls: ['./contrato-list.component.scss']
  })
  export class ContratoListComponent implements OnInit {
    constructor(
                private router: Router,
                private aleMinasService:AleMinasService,
                private activatedRoute: ActivatedRoute  
                ) {      
    }
  
    controleBusca:boolean=false;
    contratos:Contrato[]=[];
    contratoDetalhe:Contrato;
    

    ngOnInit(): void {      
      let ano = this.activatedRoute.snapshot.queryParamMap.get('anoContrato')
      let tipo = this.activatedRoute.snapshot.queryParamMap.get('tipoContrato')
      let nome =this.activatedRoute.snapshot.queryParamMap.get('nomeFornecedor')
      this.controleBusca=true;
      this.aleMinasService.listarWebContracts(ano?ano:null,tipo?tipo:null,nome?nome:null).subscribe( response=>{
          this.contratos=response.listaWebContrato.contrato;
          this.controleBusca=false;
          
      })

    }
    
    buscar(){

    }  
    detalhe(contrato:Contrato){
        const queryParams: any = {};
        queryParams.contrato = JSON.stringify(contrato);
        const navigationExtras: NavigationExtras = {
            queryParams
          };

        this.router.navigate([`detalhes`], navigationExtras);
      
    }
    buscarLegendaDetalhe():string{
        return "Contrato "+ this.contratoDetalhe.seqDocumentoContrato
    }   

      checkAditamentos(contrato:Contrato){
        if(Object.keys(this.contratos.find(e=>e.seqDocumentoContrato===contrato.seqDocumentoContrato).listaAditamento).length==0){
            return "Não";
        }else{
            return "Sim";
        }         
      } 
    

}