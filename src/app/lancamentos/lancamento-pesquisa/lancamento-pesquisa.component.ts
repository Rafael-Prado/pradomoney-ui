import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastyService } from 'ng2-toasty';
import { LazyLoadEvent } from "primeng/components/common/api";
import { ConfirmationService } from "primeng/components/common/api";

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
  @ViewChild('tabela') tabela;

  constructor(private lancamentoService: lancamentoService,
              private toasty: ToastyService,
              private confirmation: ConfirmationService ){}

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

  confirmarExclusao(lancamento: any){
    this.confirmation.confirm({
      message:'Você realmente deseja excluir esse Lançamento ??',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  excluir(lancamento: any){
    this.lancamentoService.excluir(lancamento.codigo)
      .then( () => {
        if (this.tabela.first === 0) {
          this.pesquisar();
        }else{
          this.tabela.first = 0;
        }

        this.toasty.success('Lançamento excluido com sucesso!');
      });
  }
}
