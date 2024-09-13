import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { LocalStorageData } from "../utils/localstorage";

export abstract class BaseGuard {

    private localStorage = new LocalStorageData();

    constructor(protected router: Router){}
    
    protected validarClaims(routeAc: ActivatedRouteSnapshot) : boolean {

        if(!this.localStorage.obterTokenUsuario()){
            this.router.navigate(['/conta/login/'], { queryParams: { returnUrl: this.router.url }});
        }  

        let user = this.localStorage.obterUsuario();

        let claim: any = routeAc.data[0];
        if (claim !== undefined) {
            let claim = routeAc.data[0]['claim'];

            if (claim) {
                if (!user.claims) {
                    this.navegarAcessoNegado();
                }
                
                //procura o claim do usuáro
                let userClaims = user.claims.find((x: { type: any; }) => x.type === claim.nome);
                
                if(!userClaims){
                    this.navegarAcessoNegado();
                }
                
                //obtem os valores do claim
                let valoresClaim = userClaims.value as string;

                //verifica se o valor está contido nos valores do claim
                if (!valoresClaim.includes(claim.valor)) {
                    this.navegarAcessoNegado();
                }
            }
        }

        return true;  
    }

    private navegarAcessoNegado() {
        this.router.navigate(['/acesso-negado']);
    }    
}