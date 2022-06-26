import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresPage } from './lugares.page';

const routes: Routes = [
  {
    path: '',
    component: LugaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugaresPageRoutingModule {}
