import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClarifaiAPIPage } from './clarifai-api.page';

const routes: Routes = [
  {
    path: '',
    component: ClarifaiAPIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClarifaiAPIPageRoutingModule {}
