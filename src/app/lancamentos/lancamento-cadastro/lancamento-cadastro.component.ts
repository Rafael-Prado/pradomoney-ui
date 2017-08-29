import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    {label:'Receita', value:'RECEITA'},
    {label:'Despesa', value:'DESPESA'},
  ];

  categorias = [
    {label:'Alimentação', value:'1'},
    {label:'Viagens', value:'2'},
    {label:'Carro', value:'3'},
  ];

  pessoas = [
    {label:'João Silva', value:'3'},
    {label:'Maria Lima', value:'1'},
    {label:'Pedroa alvaro', value:'5'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
