import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaAppComponent } from './conta.app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContaRoutingModule } from './conta.route';
import { CadastroValidationService, LoginValidationService } from '../form-validator/usuario/conta.validation.service';
import { provideNgxMask } from 'ngx-mask';
import { ContaService } from './services/conta.service';


@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    ContaAppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ContaRoutingModule
  ],
  providers: [
    CadastroValidationService,
    LoginValidationService,
    ContaService,
    provideNgxMask()
  ],
})
export class ContaModule { }
