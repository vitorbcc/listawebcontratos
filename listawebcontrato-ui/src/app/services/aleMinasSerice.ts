import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { xml2json } from 'xml-js';
//import { Convert, Welcome } from "../models/welcome.model";
import {Model} from "../models/model.model"



@Injectable({
  providedIn: 'root'
})
export class AleMinasService {

  private API = environment.apiAleMg;
  constructor(
    private http: HttpClient
  ) { }
  
  listarWebContracts(anoContrato:string,tipoContrato:string,nomeFornecedor:string):Observable<Model>{ 
    let contrato: Model;
    let params = new HttpParams();    
    if(anoContrato) {
      params = params.set('ano', `${anoContrato}`);
    }
    if(tipoContrato) {
      params = params.set('tipo', `${tipoContrato}`);
    }
    if(nomeFornecedor) {
      params = params.set('forn', `${nomeFornecedor}`);
    }
    return this.http.get(this.API,{ responseType: 'text',params: params}).pipe(take(1)).pipe(map(res=>{return contrato =JSON.parse(xml2json(res.toString(), {compact: true, spaces: 4})) }))
  
    }
  
  }