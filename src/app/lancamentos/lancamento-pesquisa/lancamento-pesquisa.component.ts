
import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from "primeng/components/common/api";

import { lancamentoService, LancamentoFiltro } from './../lancamento.service';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent implements OnInit  {

  totalRegistros = 0;
  filtro = new LancamentoFiltro;
  lancamentos = [];
  constructor(private lancamentoService: lancamentoService){}

  ngOnInit(){
  }

  pesquisar(pagina = 0){
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisa(this.filtro )
    .then( resultado => {
      this.totalRegistros = resultado.total;
      this.lancamentos = resultado.lancamentos;
    });
  }

  aoMudarPagina (event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }
}
