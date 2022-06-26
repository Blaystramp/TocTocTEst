import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostclarifaiPage } from './postclarifai.page';

const routes: Routes = [
  {
    path: '',
    component: PostclarifaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostclarifaiPageRoutingModule {}
