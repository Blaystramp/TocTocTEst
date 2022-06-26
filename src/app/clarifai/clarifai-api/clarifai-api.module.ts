import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClarifaiAPIPageRoutingModule } from './clarifai-api-routing.module';

import { ClarifaiAPIPage } from './clarifai-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClarifaiAPIPageRoutingModule
  ],
  declarations: [ClarifaiAPIPage]
})
export class ClarifaiAPIPageModule {}
