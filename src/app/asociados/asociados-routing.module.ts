import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallaAsociadosComponent } from './components/pantalla-asociados/pantalla-asociados.component';
import { SideBarComponent } from '../layout/components/side-bar/side-bar.component';
import { PantallaDetallesComponent } from './components/pantalla-detalles/pantalla-detalles.component';
import { PantallaNuevoAsociadoComponent } from './components/pantalla-nuevo-asociado/pantalla-nuevo-asociado.component';
import { PantallaEditarAsociadoComponent } from './components/pantalla-editar-asociado/pantalla-editar-asociado.component';


const routes: Routes =  [
  {
    path: '',
    component: SideBarComponent,
    children: [
      {
        path: 'asociados',
        component: PantallaAsociadosComponent,
      },
      {path: '', redirectTo: '/asociados', pathMatch: 'full'}
    ],
  },
  {
    path: 'details/:asociadoId',
    component: PantallaDetallesComponent,
  },
  {
    path: 'newAsociado',
    component: PantallaNuevoAsociadoComponent,
  },
  {
    path: 'details/:asociadoId/edit',
    component: PantallaEditarAsociadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsociadosRoutingModule { }
