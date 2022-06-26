import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor } from '@angular/common/http';







@Injectable({
  providedIn: 'root'
})
export class LugarService {
  //url api toctoc
  url = 'Access-Control-Allow-Origin: https://api.toctoc.com/api/v1/public/externo/propiedadescercanas?latitud=-33.0507901&longitud=-71.6096952&radio=50'

  //url apibackdummy
  //url = 'Access-Control-Allow-Origin: https://www.localhost:8080/apitoctoc/cerca/-1&-5&-20'
  constructor(private http: HttpClient) { }
  
  

  cargarLugares(): Observable<any>{
/*
    console.log( axios.get(this.url,{
      headers:{
        Authorization:'Bearer N#-t2B=g?J'
      }
    
    }))*/
    
    //token bearer
    const httpHeaders = new HttpHeaders({

      //'Content-Type': 'application/json',
      //'Content-Type': 'application/json',
      'Content-Type': 'application/xml',

      'Authorization': 'Bearer N#-t2B=g?J'
    });


    //return this.http.get<any>(this.url,{headers:headers})
    
    //console.log(this.http.get<any>(this.url, { headers: httpHeaders }))
    console.log('ffsf')
    return this.http.get<any>(this.url, { headers: httpHeaders })
    console.log(this.http.get<any>(this.url))
    //return this.http.get<any>(this.url)
    
    

  }
}


//ahora con el Access-Control-Allow-Origin: no da cors problem en mozilla ,pero igual sigue sin leer los datos 
