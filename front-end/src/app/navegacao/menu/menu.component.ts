import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  public isCollapsed: boolean;

  constructor() {
    this.isCollapsed = true;
  }


  menuItems: NavItems [] = [
    {
      link: '/home',
      name: 'Home',
      exact: false,
      admin: false
    },
    {
      link: '/fornecedores/listar-todos',
      name: 'Fornecedores',
      exact: false,
      admin: false
    },
    {
      link: '/produtos/listar-todos',
      name: 'Produtos',
      exact: false,
      admin: false
    },
    {
      link: '/sobre',
      name: 'Sobre',
      exact: false,
      admin: false
    }
  ];

  ngOnInit(): void {
    
  }


}

interface NavItems {
  link: string,
  name: string,
  exact: boolean,
  admin: boolean
}
