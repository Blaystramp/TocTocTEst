import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClarifaiService {
  url = 'http://www.localhost:8080/predict/'

  constructor(private http: HttpClient) { }

  clarifaiPost (): Observable<any>{

    return this.http.post(this.url,"f")
  }
}
