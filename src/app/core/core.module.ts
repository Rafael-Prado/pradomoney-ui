

import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from "primeng/components/confirmdialog/confirmdialog";
import { ConfirmationService } from "primeng/components/common/confirmationservice";

import { ErrorHandlerService } from './error-handler.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { lancamentoService } from "../lancamentos/lancamento.service";
import { PessoaService } from "../pessoas/pessoa.service";

@NgModule({
  imports: [
    CommonModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,

  ],
  declarations: [
    NavBarComponent
  ],
  exports: [
    NavBarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    lancamentoService,
    PessoaService,
    ConfirmationService,
    ErrorHandlerService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class CoreModule { }
