import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';


import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/primeng';
import { InputTextareaModule } from "primeng/components/inputtextarea/inputtextarea";
import { CalendarModule } from "primeng/components/calendar/calendar";
import { SelectButtonModule } from "primeng/components/selectbutton/selectbutton";
import { DropdownModule } from "primeng/components/dropdown/dropdown";
import { InputMaskModule } from "primeng/components/inputmask/inputmask";

import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppComponent } from './app.component';
import { LancamentoPesquisaComponent } from './lancamento-pesquisa/lancamento-pesquisa.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { MessageComponent } from './message/message.component';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';



@NgModule({
  declarations: [
    AppComponent,
    LancamentoPesquisaComponent,
    NavBarComponent,
    PessoaPesquisaComponent,
    LancamentoCadastroComponent,
    PessoaCadastroComponent,
    MessageComponent,
    LancamentosGridComponent,
    PessoasGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
