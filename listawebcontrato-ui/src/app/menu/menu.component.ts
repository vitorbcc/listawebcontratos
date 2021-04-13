import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import {SelectItem} from 'primeng/api';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
  })
  export class MenuComponent implements OnInit {
  
    @Output() aoBuscar = new EventEmitter<FormGroup>();
    

    constructor(
      private formBuilder: FormBuilder
      ) {
      }  

    ngOnInit(): void {
      this.listTipoContrato = [{label:'Convênio',value:'Convênio'},{label:'Contrato',value:'Contrato'}]
    }
    listTipoContrato:SelectItem[]=[];

    form = this.formBuilder.group({
      nomeFornecedor: ['', Validators.nullValidator],
      anoContrato:['', Validators.nullValidator],
      tipoContrato:['', Validators.nullValidator],
      anoProcLicitatorio:['', Validators.nullValidator]
    }
    )

    buscar(){            
            this.aoBuscar.emit(this.form);
            
    }    

}

