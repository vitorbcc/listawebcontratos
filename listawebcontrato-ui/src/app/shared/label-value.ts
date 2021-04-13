import { Pipe, PipeTransform } from '@angular/core';
import { count } from 'rxjs/operators';

import { DatePipe } from '@angular/common';


@Pipe({ name: 'labelValue' })
export class LabelValuePipe implements PipeTransform {

    constructor (private dataPipe:DatePipe){

    }
  
  transform(value: any, tipo: 'objeto2Texto' | 'objeto2Data' | 'aditamento' ): any {
    //const items = this._lista(tipo);
    //const encontrado = items.find(e => e.value == value);
    switch(tipo) {
               case 'objeto2Texto': 
                    return  value._text;
                case 'objeto2Data':
                    return this._toData(value);
             }
    
  }

  _toData(value:any):string{                
      const s:string[]=value._text.split("-");
        return this.dataPipe.transform(new Date(parseInt(s[0]),parseInt(s[1]),parseInt(s[2])),"dd/MM/yyyy");
  }

//   _lista(tipo: string): any[] {
//     switch(tipo) {
//       case 'objeto2Texto': return  
//     }
//     return [];
//   }

}