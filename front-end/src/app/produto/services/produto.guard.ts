import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { BaseGuard } from "../../services/base.guard";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ProdutoGuard extends BaseGuard implements CanActivate {
    
    constructor(protected override router: Router){ super(router); }

    canActivate(routeAc: ActivatedRouteSnapshot):Observable<boolean> | boolean {
        return super.validarClaims(routeAc);
    }    
}