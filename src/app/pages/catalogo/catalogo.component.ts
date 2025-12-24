import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JoiasService } from '../../services/joia.service';
import { Joia } from '../../models/joia.model';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  joias: Joia[] = [];
  filtradas: Joia[] = [];

  localSelecionado = 'Todos';
  precoMax = 500;
  ordenacao = 'menor';

  constructor(private service: JoiasService) {
    this.joias = this.service.getJoias();
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    this.filtradas = this.joias
      .filter(j =>
        (this.localSelecionado === 'Todos' || j.local.includes(this.localSelecionado)) &&
        j.preco <= this.precoMax
      )
      .sort((a, b) =>
        this.ordenacao === 'menor'
          ? a.preco - b.preco
          : b.preco - a.preco
      );
  }
}
