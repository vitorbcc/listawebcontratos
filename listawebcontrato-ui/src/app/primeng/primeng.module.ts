import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FieldsetModule} from 'primeng/fieldset';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DropdownModule} from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import {ToastModule} from 'primeng/toast';

@NgModule({
    imports: [
        ButtonModule,
        InputTextModule,
        OverlayPanelModule,    
        CalendarModule,
        TableModule,
        DialogModule,
        FieldsetModule,
        ProgressSpinnerModule,
        DropdownModule,
        MessageModule,
        ToastModule
    ],
    declarations: [
      
      
    ],
    exports: [
    ButtonModule,
    InputTextModule,
    OverlayPanelModule,    
    CalendarModule,
    TableModule,
    DialogModule,
    FieldsetModule,
    ProgressSpinnerModule,
    DropdownModule,
    MessageModule,
    ToastModule

    ],
    providers: [
        { provide: FormBuilder },
        { provide: MessageService }
    ]
})
export class PrimeNgModule { }
