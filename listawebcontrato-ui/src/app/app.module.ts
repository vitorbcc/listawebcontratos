import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './primeng/primeng.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContratoListComponent } from './contratos/list/contrato-list.component';
import { LabelValuePipe } from './shared/label-value';
import { DatePipe } from '@angular/common';
import { DetalhesComponent } from './contratos/detalhe/detalhes.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { BuscaComponent } from './menu/busca.component';
import { TopBarComponent } from './topbar/topbar.component';



@NgModule({
  declarations: [
    AppComponent,
    ContratoListComponent,
    DetalhesComponent,
    LabelValuePipe,
    MenuComponent,
    MainComponent,
    BuscaComponent,
    TopBarComponent,
    
    
    
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,
    PrimeNgModule,
    
    
    
    
  ],
  providers: [
    { provide: FormBuilder },
    { provide: DatePipe },
    { provide: LabelValuePipe},
  
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
