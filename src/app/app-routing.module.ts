import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';

const routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'joia/:codigo', component: DetalheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
