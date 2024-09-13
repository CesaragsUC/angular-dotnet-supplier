import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageData } from '../../utils/localstorage';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  styleUrl: './menu-login.component.css'
})
export class MenuLoginComponent {
  
  constructor(private router: Router) {

  }


  token: any;
  user: any;
  email: string = "";
  localStorage = new LocalStorageData();

  usuarioLogado(): boolean {
    this.token = this.localStorage.obterTokenUsuario();
    this.user = this.localStorage.obterUsuario();

    if (this.user)
        this.email = this.user.email;

    return this.token !== null;
  }

  logout() {
    this.localStorage.limparDadosLocaisUsuario();
    this.router.navigate(['/home']);
  }

  public obterUsuario() {
    const user = localStorage.getItem('casoft.user');

    console.log(user);
    return user ? JSON.parse(user) : null;
}

}
