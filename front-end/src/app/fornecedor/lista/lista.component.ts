import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../models/fornecedor';
import { FornecedorService } from '../services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{
  
  public fornecedores!: Fornecedor[];
  errorMessage!: string;

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    this.fornecedorService.obterTodos()
      .subscribe({
        next: fornecedores => {
          this.fornecedores = fornecedores;
        },
        error: err => this.errorMessage = err
      });

  }

}
