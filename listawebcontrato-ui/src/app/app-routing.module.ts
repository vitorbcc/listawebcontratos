import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesComponent } from './contratos/detalhe/detalhes.component';
import { ContratoListComponent } from './contratos/list/contrato-list.component';
import { MainComponent } from './main/main.component';
import { BuscaComponent } from './menu/busca.component';


const routes: Routes = [

  {
    path: '', component: MainComponent,
    
  
      children: [
                { path: '', component: ContratoListComponent},
                {path: 'detalhes',component: DetalhesComponent},
                {path:'busca',component:BuscaComponent}
              
              ]
            }      
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
