

import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,


    CoreModule,
    LancamentosModule,
    PessoasModule,

  ],
  providers: [
                ],
  bootstrap: [AppComponent]
})
export class AppModule { }
