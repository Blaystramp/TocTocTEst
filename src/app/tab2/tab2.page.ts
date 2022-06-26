import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../services/global/global.service';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  loc = 'Locating...';
  constructor(
    private global: GlobalService
  ) { }


  ciudad="";
  region="";

  ngOnInit() {
    this.getCurrentLocation();
  }
  async getCurrentLocation() {
    try {
      const coordinates = await this.global.getCurrentLocation();
      console.log('Current position:', coordinates);
      this.getAddress(coordinates);
    } catch(e) {
      console.log(e);
    }
  }
  async getAddress(coordinates) {
    try {
      const address = await this.global.reverseGeocoder(coordinates.coords.latitude, coordinates.coords.longitude);
      console.log('address: ', address);
      this.loc = 
        
        (address?.administrativeArea ? address?.administrativeArea + ', ' : '') + 
        (address?.locality + ', ') + 
        (address?.countryName);
        
      const coords = await this.global.forwardGeocoder(this.loc);
      console.log('forward geocoder result: ', coords);
    } catch(e) {
      console.log(e);
    }
  }
  async enableLocation() {
    try {
      const status = await this.global.requestLocationPermission();
      console.log(status);
      if(status?.location == 'granted') {
        const stat = await this.global.enableLocation();
        if(stat) {
          const coordinates = await this.global.getCurrentLocation();
          console.log(coordinates);
          this.getAddress(coordinates);
        }
      }
    } catch(e) {
      console.log(e);
    }
  }
  async openBrowser(){

    const coordinates = await this.global.getCurrentLocation();
    const address = await this.global.reverseGeocoder(coordinates.coords.latitude, coordinates.coords.longitude);
    //
    const coords = await this.global.forwardGeocoder(this.loc);


    this.ciudad=address.locality
    this.region=address.administrativeArea

    this.ciudad= this.ciudad.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    this.region=this.region.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    //normalize('NFD').replace(/[\u0300-\u036f]/g, "")

    /*
    if (address.locality=="Valparaíso"){
      this.ciudad="valparaiso"
    }
    if (address.administrativeArea=="Valparaíso"){
      this.region="valparaiso"
    }
    if (address.administrativeArea=="Villa Alemana"){
      this.ciudad="villa alemana"
    }
    if (address.administrativeArea=="Valparaíso"){
      this.ciudad="valparaiso"
    }
    if (address.administrativeArea=="Valparaíso"){
      this.ciudad="valparaiso"
    }
    if (address.administrativeArea=="Valparaíso"){
      this.ciudad="valparaiso"
    }
    */
    


    await Browser.open({ url: 'https://www.toctoc.com/arriendo/departamento/'+this.region+'/'+this.ciudad+'?o=link_menu'})
    //hola
    
  }

}
