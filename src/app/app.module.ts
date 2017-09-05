

import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CoreModule } from './core/core.module';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/primeng';
import { ConfirmationService } from "primeng/components/common/api";

import { AppComponent } from './app.component';

import { LancamentosModule } from './lancamentos/lancamentos.module';
import { lancamentoService } from './lancamentos/lancamento.service';
import { PessoasModule } from './pessoas/pessoas.module';
import { PessoaService } from './pessoas/pessoa.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,

    LancamentosModule,
    PessoasModule,
    CoreModule

  ],
  providers: [lancamentoService,
                PessoaService,
                ConfirmationService,
                {provide: LOCALE_ID, useValue: 'pt-BR'}
                ],
  bootstrap: [AppComponent]
})
export class AppModule { }
