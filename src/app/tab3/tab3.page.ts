import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  btnGeo(){
    console.log("nacho chupalo");
  }

 async getCurrentLocation(){
    try{
      const cordenadas = await Geolocation.getCurrentPosition();
      console.log(`Current position:`, cordenadas);
    }catch(e){
      console.log(e);
    }
  }  



}
