import { Component } from '@angular/core';
import { environmentDev } from '../../environments/variables';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent {
  
  imagens: string = environmentDev.imagensUrl;
  produto: Produto;

  constructor(private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {

    this.produto = this.route.snapshot.data['produto'];
  }

  public excluirProduto() {
    this.produtoService.excluirProduto(this.produto.id)
      .subscribe({
        next: evento => { this.sucessoExclusao(evento) },
        error: err => { this.falha() }
      })
  }

  public sucessoExclusao(evento: any) {

    const toast = this.toastr.success('Produto excluido com Sucesso!', 'Good bye :D');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/produtos/listar-todos']);
      });
    }
  }

  public falha() {
    this.toastr.error('Houve um erro no processamento!', 'Ops! :(');
  }
}
