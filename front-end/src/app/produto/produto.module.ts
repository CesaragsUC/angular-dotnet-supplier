import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoAddComponent } from './adicionar/produto.add.component';
import { ProdutoAppComponent } from './produto.app.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ProdutoRoutingModule } from './produto.route';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutoService } from './services/produto.service';
import { ProdutoResolve } from './services/produto.resolve';
import { ProdutoGuard } from './services/produto.guard';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    ProdutoAppComponent,
    ListaComponent,
    ProdutoAddComponent,
    EditarComponent,
    ExcluirComponent,
    DetalhesComponent,
    
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  exports: [],
  providers: [
    ProdutoService,
    ProdutoResolve,
    ProdutoGuard
    
  ]
})
export class ProdutoModule { }
