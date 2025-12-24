import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { JoiasService } from '../../services/joia.service';
import { Joia } from '../../models/joia.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  joia?: Joia;

  constructor(
    private route: ActivatedRoute,
    private service: JoiasService
  ) {}

  ngOnInit(): void {
    const codigo = this.route.snapshot.paramMap.get('codigo');
    if (codigo) {
      this.joia = this.service.getJoiaPorCodigo(codigo);
    }
  }
}
