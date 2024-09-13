import { Injectable } from "@angular/core";
import { BaseService } from "../../services/base.service";
import { Fornecedor } from "../models/fornecedor";
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable } from "rxjs";
import { CepConsulta, Endereco } from "../models/endereco";

@Injectable()
export class FornecedorService extends BaseService {

    fornecedor: Fornecedor = new Fornecedor();

    constructor(private http: HttpClient) { super() }

    obterTodos(): Observable<Fornecedor[]> {
        return this.http
            .get<Fornecedor[]>(this.urlService + "fornecedores")
            .pipe(catchError(super.serviceError));
    }

    obterPorId(id: string): Observable<Fornecedor> {
        return this.http
            .get<Fornecedor>(this.urlService + "fornecedores/" + id, super.obterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    novoFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
        return this.http
            .post(this.urlService + "fornecedores", fornecedor, this.obterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    atualizarFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
        return this.http
            .put(this.urlService + "fornecedores/" + fornecedor.id, fornecedor, super.obterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    excluirFornecedor(id: string): Observable<Fornecedor> {
        return this.http
            .delete(this.urlService + "fornecedores/" + id, super.obterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    atualizarEndereco(endereco: Endereco): Observable<Endereco> {
        return this.http
            .put(this.urlService + "fornecedores/endereco/" + endereco.id, endereco, super.obterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    consultarCep(cep: string): Observable<CepConsulta> {
        return this.http
            .get<CepConsulta>(`https://viacep.com.br/ws/${cep}/json/`)
            .pipe(catchError(super.serviceError))
    }
}