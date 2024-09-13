import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, Router, UrlSegment } from "@angular/router";
import { BaseGuard } from "../../services/base.guard";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class FornececedorGuard extends BaseGuard implements CanActivate{

    constructor(protected override router: Router) { super(router); }

    canActivate(routeAc: ActivatedRouteSnapshot) {
        return super.validarClaims(routeAc);
    }  


}