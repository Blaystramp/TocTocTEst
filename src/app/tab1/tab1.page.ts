import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public photoService: PhotoService){}

  addPhotoToGallery(){
    this.photoService.addNewToGallery()
  }

  async ngOnInit() {
    await this.photoService.loadSave()
  }






}