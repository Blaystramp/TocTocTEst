import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostclarifaiPageRoutingModule } from './postclarifai-routing.module';

import { PostclarifaiPage } from './postclarifai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostclarifaiPageRoutingModule
  ],
  declarations: [PostclarifaiPage]
})
export class PostclarifaiPageModule {}
