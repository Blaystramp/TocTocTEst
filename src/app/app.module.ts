import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';;
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy },
    LocationAccuracy,
    NativeGeocoder
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
