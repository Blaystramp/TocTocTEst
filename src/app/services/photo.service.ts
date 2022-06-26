import { TabsPage } from './../tabs/tabs.page';
import { Injectable } from '@angular/core';
import { CameraPhoto, Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';
import { Foto } from '../models/foto.interface';
import { Geolocation } from '@capacitor/geolocation';
import { LoadingController } from '@ionic/angular';


import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  //En este arreglo se almacenan las fotos
  public fotos: Foto[];
  private PHOTO_STORAGE: string = "fotos"
  

  constructor(public loadingController: LoadingController, public router: Router){ }
      
    public async addNewToGallery(){
      //proceso_para_tomar_foto
      const fotoCapturada = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      })
      try{
        
        const cordenadas = await Geolocation.getCurrentPosition();
        let corde = cordenadas.coords.latitude;
        console.log(`Current position: `);
      }catch(e){
        console.log(e);
      }
      /*this.fotos.unshift({
        filepath: "foto_",
        webviewPath: fotoCapturada.webPath
      })*/
      
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      const savedImageFile = await this.savePicture(fotoCapturada);
      this.router.navigateByUrl("tabs/tab2");


0


      Storage.set({
        key: this.PHOTO_STORAGE,
        value: JSON.stringify(this.fotos)
      })
      
    }
      public async savePicture(cameraPhoto: CameraPhoto){
        
        const base64Data = await this.readAsBase64(cameraPhoto)
        const filename = new Date().getTime + '.jpeg';
        const savedFile = await Filesystem.writeFile({
          path: filename,
          data: base64Data,
          directory: Directory.Data
        })
        this.presentLoading();
        //https://www.youtube.com/watch?v=jGEAqQbHNic&t=1050s&ab_channel=IngenieriadeSoftware-UTA VOY EN EL MINUTO 1:14:55hrs

      }
      public async readAsBase64(cameraPhoto: CameraPhoto){
        const response = await fetch (cameraPhoto.webPath!)
        const blob = await response.blob()

        return await this.convertBlobToBase64(blob) as string

      }
      convertBlobToBase64 = (blob: Blob) => new Promise ((resolve, reject) => {
        const reader = new FileReader
        reader.onerror = reject
        reader.onload = () => {
          resolve(reader.result)
        }
        //sin eso al principio
        reader.readAsDataURL(blob)
      })
     
      public async loadSave()
      {
        //recuperar las fotos de la caché
        const listaFotos = await Storage.get ({ key: this.PHOTO_STORAGE } )
        this.fotos = JSON.parse(listaFotos.value) || []
        
        //Desplegar las fotos leidas en formato base64

        for(let foto of this.fotos )
        {
          //Leer cada foto almacenada en el sistema de archivo
          const readFile = await Filesystem.readFile({
            path: foto.filepath,
            directory: Directory.Data
          })

          //solo para plataforma web: Carga las fotos en base 64
          //no es necesario 

          foto.webviewPath = `data:image/jpeg;base64,${readFile.data}`
        }
      }
      async presentLoading() {
        const loading = await this.loadingController.create({
          message: 'Cargando archivos y comparando...',
          duration: 5000
        });
        await loading.present();
    
        const { role, data } = await loading.onDidDismiss();
    
        console.log('Loading dismissed!');
      }


    }
    




  




