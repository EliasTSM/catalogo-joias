import { Injectable } from '@angular/core';
import { Joia } from '../models/joia.model';

@Injectable({
  providedIn: 'root'
})
export class JoiasService {

  telefone = '5571982041698';

  joias: Joia[] = [
    {
      nome: 'Joia cobra',
      codigo: 'J001',
      preco: 14.99,
      local: 'Trágus',
      imagem: 'imagens/cobra.jpeg'
    },
    {
      nome: 'Joia nariz',
      codigo: 'J002',
      preco: 9.99,
      local: 'Nariz',
      imagem: 'imagens/nariz.jpeg'
    },
    {
      nome: 'Joia redonda (Titânio)',
      codigo: 'J003',
      preco: 34.99,
      local: 'Hélix',
      imagem: 'imagens/redonda.jpeg'
    },
    {
      nome: 'Joia trio (Titânio)',
      codigo: 'J003',
      preco: 39.99,
      local: 'Hélix, Conch',
      imagem: 'imagens/trio.jpeg'
    },
  ];

  getJoias(): Joia[] {
    return this.joias;
  }

  getJoiaPorCodigo(codigo: string): Joia | undefined {
    return this.joias.find(j => j.codigo === codigo);
  }
}
