import { Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';

export const routes: Routes = [
    { path: '', component: CatalogoComponent },
    { path: 'joia/:codigo', component: DetalheComponent }
];
