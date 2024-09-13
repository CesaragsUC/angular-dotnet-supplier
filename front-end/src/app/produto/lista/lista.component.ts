import { Component, OnInit } from '@angular/core';
import { environmentDev } from '../../environments/variables';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{

  imagens: string =  environmentDev.imagensUrl;

  public produtos!: Produto[];
  errorMessage!: string;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.obterTodos()
      .subscribe({
        next: produtos => {
          this.produtos = produtos;
        },
        error: err => this.errorMessage = err
      });
  }
}
