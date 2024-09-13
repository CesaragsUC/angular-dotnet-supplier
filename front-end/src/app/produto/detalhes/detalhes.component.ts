import { Component } from '@angular/core';
import { environmentDev } from '../../environments/variables';
import { Produto } from '../models/produto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent {

  imagens: string = environmentDev.imagensUrl;
  produto: Produto;

  constructor(private route: ActivatedRoute) {

    this.produto = this.route.snapshot.data['produto'];
  }


}
