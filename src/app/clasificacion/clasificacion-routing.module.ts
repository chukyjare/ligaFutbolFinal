import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasificacionPage } from './clasificacion.page';

const routes: Routes = [
  {
    path: '',
    component: ClasificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasificacionPageRoutingModule {}
