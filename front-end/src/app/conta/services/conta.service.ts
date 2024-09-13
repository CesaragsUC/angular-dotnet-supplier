import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { Usuario } from "../models/usuario";
import { BaseService } from "../../services/base.service";



@Injectable()
export class ContaService extends BaseService {

    constructor(private http: HttpClient) { super(); }

    registrarUsuario(usuario: Usuario):Observable<Usuario> {
        let response = this.http.post(this.urlService + 'nova-conta', usuario,this.obterHeaderJson())
        .pipe(map(this.extractData), catchError(this.serviceError));

        return response;
    }

    login(usuario: Usuario): Observable<Usuario> {
        let response = this.http
            .post(this.urlService + 'entrar', usuario, this.obterHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }

}