import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) {}

  
    chisteramdom(){
      return this.http.get("https://api.chucknorris.io/jokes/random")
    }

}
