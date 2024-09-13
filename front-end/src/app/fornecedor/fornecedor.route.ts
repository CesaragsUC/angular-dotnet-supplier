import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FornecedorResolve } from "./services/fornecedor.resolve";
import { ExcluirComponent } from "./excluir/excluir.component";
import { FornececedorGuard } from "./services/fornecedor.guard";
import { DetalhesComponent } from "./detalhes/detalhes.component";
import { EditarComponent } from "./editar/editar.component";
import { FornecedorAddComponent } from "./adicionar/fornecedor.add.component";
import { ListaComponent } from "./lista/lista.component";
import { FornecedorAppComponent } from "./fornecedor.app.component";

const fornecedorRouterConfig: Routes = [
    {
        path: '', component: FornecedorAppComponent,
        children: [
            { 
                path: 'listar-todos',
                component: ListaComponent,
                // canActivate: [FornececedorGuard],
                // data: [{ claim: { nome: 'Fornecedor', valor: 'Listar'}}],

             },
            {
                path: 'adicionar-novo', component: FornecedorAddComponent,
                // canActivate: [FornececedorGuard],
                // data: [{ claim: { nome: 'Fornecedor', valor: 'Adicionar'}}]
            },
            {
                path: 'editar/:id', component: EditarComponent,
                // canActivate: [FornececedorGuard],
                // data: [{ claim: { nome: 'Fornecedor', valor: 'Atualizar' } }],
                resolve: {
                    fornecedor: FornecedorResolve
                }
            },
            {
                path: 'detalhes/:id', component: DetalhesComponent,
                resolve: {
                    fornecedor: FornecedorResolve
                }
            },
            {
                 path: 'excluir/:id', component: ExcluirComponent,
                // canActivate: [FornececedorGuard],
                // data: [{ claim: { nome: 'Fornecedor', valor: 'Excluir' } }],
                // resolve: {
                //     fornecedor: FornecedorResolve
                // }
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(fornecedorRouterConfig)
    ],
    exports: [RouterModule]
})
export class FornecedorRoutingModule { }