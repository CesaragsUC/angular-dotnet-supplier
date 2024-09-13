import { Component, Input } from '@angular/core';
import { environmentDev } from '../../environments/variables';
import { Produto } from '../../produto/models/produto';

@Component({
  selector: 'fornecedor-lista-produto',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ListaProdutosComponent {

  imagens: string = environmentDev.imagensUrl;

  @Input()
  produtos!: Produto[];

  
}
