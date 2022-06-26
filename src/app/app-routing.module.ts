import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'lugares',
    loadChildren: () => import('./lugares/lugares/lugares.module').then( m => m.LugaresPageModule)
  },
  {
    path: 'clarifai-api',
    loadChildren: () => import('./clarifai/clarifai-api/clarifai-api.module').then( m => m.ClarifaiAPIPageModule)
  },
  {
    path: 'postclarifai',
    loadChildren: () => import('./clarifai/postclarifai/postclarifai.module').then( m => m.PostclarifaiPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}