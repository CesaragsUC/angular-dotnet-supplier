import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { AcessoNegadoComponent } from './errors/acesso-negado/acesso-negado.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SobreComponent } from './institucional/sobre/sobre.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module')
                        .then(m => m.ContaModule)
  },
  {
     path: 'produtos',
     loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule)
  },
  {
    path: 'fornecedores',
    loadChildren: () => import('./fornecedor/fornecedor.module').then(m => m.FornecedorModule)
 },
  { path: 'acesso-negado', component: AcessoNegadoComponent },
  { path: 'nao-encontrado', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
