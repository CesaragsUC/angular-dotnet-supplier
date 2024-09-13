import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from "../errors/not-found/not-found.component";
import { AcessoNegadoComponent } from "../errors/acesso-negado/acesso-negado.component";
import { SobreComponent } from "../institucional/sobre/sobre.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MenuLoginComponent } from './menu-login/menu-login.component';

@NgModule({
    declarations: [
    MenuComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    AcessoNegadoComponent,
    SobreComponent,
    MenuLoginComponent
  ],
    imports: [
         CommonModule,
         RouterModule,
         NgbModule
        ],
    exports: [
        MenuComponent,
        FooterComponent,
        HomeComponent,
        NotFoundComponent,
        AcessoNegadoComponent,
        SobreComponent,
        MenuLoginComponent
    ]
})

export class NavegacaoModule {}