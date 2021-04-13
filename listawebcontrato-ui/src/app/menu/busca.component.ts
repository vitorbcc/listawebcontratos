import { query } from "@angular/animations";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder} from "@angular/forms";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import {SelectItem} from 'primeng/api';


@Component({
    template: ``
  })
  export class BuscaComponent implements OnInit {
    

    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private activatedRoute: ActivatedRoute
      ) {
      }
       



    ngOnInit(): void {
        const queryParams: any = {};
            queryParams.anoContrato =  this.activatedRoute.snapshot.queryParamMap.get('anoContrato');
            queryParams.tipoContrato =  this.activatedRoute.snapshot.queryParamMap.get('tipoContrato');
            queryParams.nomeFornecedor  = this.activatedRoute.snapshot.queryParamMap.get('nomeFornecedor');    
        
            const navigationExtras: NavigationExtras = {
            queryParams
          };
        
         this.router.navigate([``], navigationExtras);        
    }
    
     

}

