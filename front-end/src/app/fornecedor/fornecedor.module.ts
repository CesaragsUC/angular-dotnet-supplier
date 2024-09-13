import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorAddComponent } from './adicionar/fornecedor.add.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ListaProdutosComponent } from './produtos/produtos.component';
import { FornecedorService } from './services/fornecedor.service';
import { FornecedorResolve } from './services/fornecedor.resolve';
import { FornececedorGuard } from './services/fornecedor.guard';
import { FornecedorRoutingModule } from './fornecedor.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FornecedorAppComponent } from './fornecedor.app.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [
    FornecedorAppComponent,
    FornecedorAddComponent,
    ListaComponent,
    EditarComponent,
    ExcluirComponent,
    DetalhesComponent,
    ListaProdutosComponent

  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    NgxSpinnerModule,
    NgxMaskDirective
  ],  
  exports: [],
  providers: [
    FornecedorService,
    FornecedorResolve,
    FornececedorGuard,
    provideNgxMask()
  ]
})
export class FornecedorModule { }
