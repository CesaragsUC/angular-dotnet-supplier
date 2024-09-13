import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Fornecedor } from "../models/fornecedor";
import { FornecedorService } from "./fornecedor.service";

@Injectable()
export class FornecedorResolve implements Resolve<Fornecedor> {

    constructor(private fornecedorService: FornecedorService) { }

    // vai pegar minha rota atual paramentro "id", e ja fazer a consulta no serviço
    // ex: localhost:4200/fornecedores/editar/fcec1c2e-5b07-4a64-a801-d21d12bfcf03
    resolve(route: ActivatedRouteSnapshot) {
        return this.fornecedorService.obterPorId(route.params['id']);
    }
}