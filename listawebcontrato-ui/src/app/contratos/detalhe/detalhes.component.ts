import { typeWithParameters } from "@angular/compiler/src/render3/util";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Aditamento, Contrato } from "src/app/models/model.model";
import { AleMinasService } from "src/app/services/aleMinasSerice";


@Component({
    selector: 'app-detalhes',
    templateUrl: './detalhes.component.html',
    styleUrls: ['./detalhes.component.scss']
  })
  export class DetalhesComponent implements OnInit {
  
    constructor(private activatedRoute: ActivatedRoute                
                ) {      
    }
    contrato: Contrato;
    displayModalAditamentos:boolean=false;
    ngOnInit(): void { 
        const param = this.activatedRoute.snapshot.queryParamMap.get('contrato');
     
        if (param === null) {
        this.contrato=null;
        } else {
        this.contrato = JSON.parse(param);
        }
    }
    aditamentos(){
        if(Object.keys(this.contrato.listaAditamento).length==0)
            return true;
        else
             return false;       
    }
    VisualizarAditamento(){
        this.displayModalAditamentos=true;    

    }
    Aditamento2Tree(contrato:Contrato){
        
        
    }
        
    
}